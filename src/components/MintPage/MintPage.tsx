/* eslint-disable @typescript-eslint/no-unused-vars */

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

const contractAddress = "0x89FfD3d75866733e92649157bA149FF342B70A28";

const MintPage = () => {
  const { account, library } = useWeb3React<Web3Provider>();

  const [mintNum, setMintNum] = useState(1);
  const [totalSupply, setTotalSupply] = useState(5555);
  const [glizzyNum, setGlizzyNum] = useState(0);
  const [numMinted, setNumMinted] = useState(0);

  useEffect(() => {
    if (library && account) {
      try {
        // update ui every 10 seconds
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

            contract
              .walletOfOwner(account)
              .then((res: any[]) => {
                setGlizzyNum(res.length);
              })
              .catch(console.error);
          }
        });
      } catch (e) {}
    }
  }, [account, library]);

  let sig: string = "";
  // calculate number of mints left
  const isWhitelisted = walletConfig.find(({ address, signature }) => {
    if (account === address) {
      sig = signature;
      return true;
    }
    return false;
  });

  return (
    <Container id="mint">
      <Title>Mint a Glizzy</Title>
      <SubTitle>#/5555 Glizzys left to be gripped at 0.0555 ETH each</SubTitle>
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
                mintNum - numMinted === 5 ? 5 - numMinted : mintNum + 1
              );
            }}
          >
            +
          </Plus>
        </MintButton>
        <Button onClick={() => void 0} disabled={true}>
          MINT
        </Button>
      </MintButtonContainer>
      <LeftDog src={leftDog} />
      <RightDog src={rightDog} />
    </Container>
  );
};

export default MintPage;
