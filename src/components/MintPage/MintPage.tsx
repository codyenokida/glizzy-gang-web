import { useEffect, useState } from "react";
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";

import {
  Button,
  Container,
  LeftDog,
  RightDog,
  MintButton,
  MintButtonContainer,
  Minus,
  Num,
  Plus,
  SubTitle,
  Title,
} from "./MintPage.styles";
import walletConfig from "../../constants/walletConfig";
import abi from "../../contracts/GlizzyGangABI.json";

import leftDog from "../../assets/mintGlizzyOne.png";
import rightDog from "../../assets/mintGlizzyTwo.png";

function toAtomicString(value: number, decimals: number) {
  return ethers.utils.parseUnits(value.toString(), decimals).toString();
}

const contractAddress = "0xA727ceA448c740fbF827574026395Cf7e5f973c1";

const MintPage = () => {
  const { account, library } = useWeb3React<Web3Provider>();

  const [mintNum, setMintNum] = useState(1);
  const [totalSupply, setTotalSupply] = useState(5555);
  // const [glizzyNum, setGlizzyNum] = useState(0);
  const [numMinted, setNumMinted] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (library && account) {
      try {
        const contract = new ethers.Contract(
          contractAddress,
          abi,
          library?.getSigner()
        );

        // checking the total supply
        contract
          .totalSupply()
          .then((res: any) => setTotalSupply(parseInt(res.toString())))
          .catch(console.error);

        contract
          .presaleMints(account)
          .then((res: ethers.BigNumber) => {
            setNumMinted(res.toNumber());
          })
          .catch(console.error);

        // listen to transfer event
        contract.on("Transfer", (from: string) => {
          if (from === "0x0000000000000000000000000000000000000000") {
            contract
              .totalSupply()
              .then((res: any) => setTotalSupply(parseInt(res.toString())))
              .catch(console.error);
          }
        });
      } catch (e: any) {
        alert(
          e.error?.message.replace("execution reverted: ", "") || e.message
        );
        console.error(e);
        setLoading(false);
      }
    }
  }, [account, library]);

  let sig: string = "";

  // calculate number of mints left
  const isWhitelisted = walletConfig.find(({ address, signature }) => {
    if (account?.toLowerCase() === address.toLowerCase()) {
      sig = signature;
      return true;
    }
    return false;
  });

  const whitelistMint = async () => {
    try {
      const contract = new ethers.Contract(
        contractAddress,
        abi,
        library?.getSigner()
      );

      const estimatedGasLimit = await contract.estimateGas.presaleMint(
        ethers.utils.arrayify(sig),
        mintNum,
        { value: toAtomicString(0.0555 * mintNum, 18) }
      );

      setLoading(true);
      await contract.presaleMint(ethers.utils.arrayify(sig), mintNum, {
        value: toAtomicString(0.0555 * mintNum, 18),
        gasLimit: ethers.utils.hexlify(
          Math.floor(estimatedGasLimit.toNumber() * 1.2)
        ),
      });
      setLoading(false);
    } catch (e: any) {
      alert(e.error?.message.replace("execution reverted: ", "") || e.message);
      console.error(e);
      setLoading(false);
    }
  };

  // const publicPresale = async () => {
  //   try {
  //     const contract = new ethers.Contract(
  //       contractAddress,
  //       abi,
  //       library?.getSigner()
  //     );

  //     const estimatedGasLimit = await contract.estimateGas.mint(mintNum, {
  //       value: toAtomicString(0.0555 * mintNum, 18),
  //     });

  //     setLoading(true);
  //     await contract.mint(mintNum, {
  //       value: toAtomicString(0.0555 * mintNum, 18),
  //       gasLimit: ethers.utils.hexlify(
  //         Math.floor(estimatedGasLimit.toNumber() * 1.2)
  //       ),
  //     });
  //     setLoading(false);
  //   } catch (e: any) {
  //     alert(e.error?.message.replace("execution reverted: ", "") || e.message);
  //     console.error(e);
  //     setLoading(false);
  //   }
  // };

  return (
    <Container id="mint">
      <Title>Mint a Glizzy</Title>
      <SubTitle>
        {5555 - totalSupply}/5555 Glizzys left to be gripped at 0.0555 ETH each
      </SubTitle>
      <MintButtonContainer>
        <MintButton>
          <Minus
            onClick={() => {
              setMintNum(mintNum > 1 ? mintNum - 1 : 1);
            }}
          >
            -
          </Minus>
          <Num>{mintNum}</Num>
          <Plus
            onClick={() => {
              setMintNum(
                mintNum + 1 < 5 - numMinted ? mintNum + 1 : 5 - numMinted
              );
            }}
          >
            +
          </Plus>
        </MintButton>
        <Button
          onClick={() => whitelistMint()}
          // disabled={false}
          disabled={!isWhitelisted || !sig || loading || totalSupply === 5555}
        >
          MINT
        </Button>
      </MintButtonContainer>
      <LeftDog src={leftDog} />
      <RightDog src={rightDog} />
    </Container>
  );
};

export default MintPage;
