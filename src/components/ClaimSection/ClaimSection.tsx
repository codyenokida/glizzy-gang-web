import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

import {
  Container,
  TextContainer,
  Title,
  Tooltip,
  Num,
  ClaimButton,
  BottomContainer,
  SubTitle,
  Content,
  Section,
  NumContainer,
  MustardBottle,
  MustardBottleFlipped,
} from "./ClaimSection.styles";

import mustardABI from "../../contracts/MustardABI.json";
import glizzyGangABI from "../../contracts/GlizzyGangABI.json";

import mustard from "../../assets/mustard-bottle.png";

const mustardAddress = "0xe4a7ffC3124a7eFdC027C4472204C8351fbEa27c";
const glizzyAddress = "0xA727ceA448c740fbF827574026395Cf7e5f973c1";

const ClaimSection = () => {
  // ethers
  const { account, library } = useWeb3React<Web3Provider>();

  const [claimable, setClaimable] = useState(0);
  const [glizzyCount, setGlizzyCount] = useState(0);
  const [mustardCount, setMustardCount] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (library && account) {
      // initialize mustard contract
      const mustardContract = new ethers.Contract(
        mustardAddress,
        mustardABI,
        library.getSigner()
      );

      // initialize glizzy contract
      const glizzyContract = new ethers.Contract(
        glizzyAddress,
        glizzyGangABI,
        library.getSigner()
      );

      // find balance of glizzys
      glizzyContract
        .balanceOf(account)
        .then((num: ethers.BigNumber) => {
          setGlizzyCount(num.toNumber());
        })
        .catch((e: any) => console.error);

      // find how much is claimable
      mustardContract
        .getClaimable(account)
        .then((num: ethers.BigNumber) => {
          setClaimable(
            parseFloat(parseFloat(ethers.utils.formatUnits(num, 18)).toFixed(3))
          );
        })
        .catch((e: any) => console.error);

      // find balance of mustard
      mustardContract
        .balanceOf(account)
        .then((num: ethers.BigNumber) => {
          setMustardCount(
            parseFloat(parseFloat(ethers.utils.formatUnits(num, 18)).toFixed(3))
          );
        })
        .catch((e: any) => console.error);
    }
  });

  // initiate claim
  const claim = async () => {
    if (library && account) {
      const mustardContract = new ethers.Contract(
        mustardAddress,
        mustardABI,
        library.getSigner()
      );

      // claim
      try {
        setLoading(true);
        await mustardContract.claim(account);
        setClaimable(0);
        setLoading(false);
      } catch (e: any) {
        alert(
          e.error?.message.replace("execution reverted: ", "") || e.message
        );
        setLoading(false);
      }
    }
  };

  return (
    <Container id="claim-mustard">
      <Tooltip>To see values, your Wallet must be connected.</Tooltip>
      <TextContainer>
        <Title>You can claim:</Title>
        <NumContainer>
          <MustardBottle src={mustard} />
          <Num>{claimable} $Mustard</Num>
          <MustardBottleFlipped src={mustard} />
        </NumContainer>
        <ClaimButton loading={loading} onClick={() => claim()}>
          Claim Now
        </ClaimButton>
      </TextContainer>
      <BottomContainer>
        <Section>
          <SubTitle>You own:</SubTitle>
          <Content>{glizzyCount} Glizzys</Content>
        </Section>
        <Section>
          <SubTitle>Total earnt:</SubTitle>
          <Content>{mustardCount} $Mustard</Content>
        </Section>
      </BottomContainer>
    </Container>
  );
};

export default ClaimSection;
