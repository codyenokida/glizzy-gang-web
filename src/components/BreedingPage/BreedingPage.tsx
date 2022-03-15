import { useEffect, useState } from "react";
import { createClient } from "urql";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers/lib/web3-provider";
import { ethers } from "ethers";

import {
  Container,
  BreedingBackground,
  Paragraph,
  TextContainer,
  Title,
  SubTitle,
  SubParagraph,
  BreedingContainer,
  BreedBox,
  Filler,
  ButtonContainer,
  ButtonContainerText,
  Button,
  AssetsTitle,
  AssetsContainer,
  AssetContainer,
  GlizzyImage,
  GlizzyTitle,
  ImagesContainer,
  BreedBoxContainerOne,
  BreedBoxContainerTwo,
  BreedGlizzyImage,
  BreedingImageSmallBackground,
  MustardBottleTwo,
  MustardBottleOne,
} from "./BreedingPage.styles";

import breedingBackground from "../../assets/breedingBackground.png";
import breedingGlizzys from "../../assets/breedGlizzys.png";
import mustard from "../../assets/mustard.png";
import weenieWarriorABI from "../../contracts/WeenieWarriorABI.json";

import { WEENIE_ADDRESS } from "../../constants";

// import fallbackImage from "../../assets/";

const API_URL =
  "https://api.thegraph.com/subgraphs/name/codyenokida/glizzy-gang-nft";

const client = createClient({
  url: API_URL,
});

const BreedingPage = () => {
  const [glizzys, setGlizzys] = useState<any[]>([]);
  const [imageMapping, setImageMapping] = useState<{ [id: number]: string }>(
    {}
  );
  const [loading, setLoading] = useState(false);
  const [contractLoading, setContractLoading] = useState(false);
  const [selected, setSelected] = useState<number[]>([]);
  const [complete, setComplete] = useState(false);

  const { account, library } = useWeb3React<Web3Provider>();

  useEffect(() => {
    fetchData();
    setSelected([251, 252]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account]);

  const fetchData = async () => {
    if (account && library) {
      const query = `
      query {
        users(where:{id:"${account.toLowerCase()}"}) {
          id
          tokens {
            id
            contentURI
          }
        }
      }
    `;
      setLoading(true);
      try {
        const response = await client.query(query).toPromise();
        if (response) {
          if (response.data && response.data.users && response.data.users[0]) {
            const glizzyData = response.data.users[0].tokens;
            let temp = [];
            let tempImageMapping: any = {};
            for (const glizzyInfo of glizzyData) {
              const id = glizzyInfo.id;
              let tempGlizzyInfo = {
                name: `Cryptdog #${id}`,
                id: id,
                src: "https://via.placeholder.com/150",
              };
              // fetch the image based off of the content uri
              const res = await fetch(
                `https://glizzy.mypinata.cloud/ipfs/Qmdq625bCeQa5PLZUGfgZ37vErScuq9PkwdMzFZ5BoFQQ2/${id}`
              );
              const tokenImageURL = await res.json();
              tempGlizzyInfo.src = tokenImageURL.image;
              temp.push(tempGlizzyInfo);
              tempImageMapping[id] = tokenImageURL.image;
            }
            setImageMapping(tempImageMapping);
            setGlizzys(temp);
          }
        }
      } catch (e: any) {
        console.error(e);
        alert(`Error occurred: ${e}`);
      }

      setLoading(false);
    }
  };

  const setOrRemoveSelected = (id: number) => {
    if (selected.length === 2) {
      if (selected.includes(id)) {
        const temp = [...selected];
        const index = temp.indexOf(id);
        if (id !== -1) {
          temp.splice(index, 1);
        }
        setSelected(temp);
      } else {
        // remove the last index
        const temp = [...selected];
        temp.pop();
        setSelected([...temp, id]);
      }
    } else if (selected.length < 2) {
      if (selected.includes(id)) {
        const temp = [...selected];
        const index = temp.indexOf(id);
        if (id !== -1) {
          temp.splice(index, 1);
        }
        setSelected(temp);
      } else {
        setSelected([...selected, id]);
      }
    } else {
      setSelected([]);
    }
  };

  const mintWeenieWarrior = async () => {
    try {
      if (library) {
        const weenieWarriorContract = new ethers.Contract(
          WEENIE_ADDRESS,
          weenieWarriorABI,
          library.getSigner()
        );
        setContractLoading(true);
        const estimatedGasLimit =
          await weenieWarriorContract.estimateGas.createWeenieWarriors(
            selected,
            1
          );
        const tx = await weenieWarriorContract.createWeenieWarriors(
          selected,
          1,
          {
            gasLimit: ethers.utils.hexlify(
              Math.floor(estimatedGasLimit.toNumber() * 1.2)
            ),
          }
        );
        await tx.wait();
        setContractLoading(false);
        setComplete(true);
      }
    } catch (e) {
      console.log(e);
      alert(e);
      setContractLoading(false);
    }
  };

  return (
    <>
      <Container>
        <TextContainer>
          <SubTitle>Create your</SubTitle>
          <Title>Weenie Warriors</Title>
          <Paragraph>
            Connect your wallet to see your Glizzys below, Select which 2
            Glizzys you would like to breed, Click “Breed” to mint your Weenie
            Warrior NFT.
          </Paragraph>
          <SubParagraph>Cost to Breed: 1000 $Mustard</SubParagraph>
        </TextContainer>
        <BreedingContainer>
          <BreedBoxContainerOne>
            <BreedBox>
              {selected[0] ? (
                <BreedGlizzyImage
                  src={
                    imageMapping[selected[0]] ||
                    "https://via.placeholder.com/150"
                  }
                />
              ) : (
                "?"
              )}
            </BreedBox>
            <Filler>+</Filler>
            <BreedBox>
              {selected[1] ? (
                <BreedGlizzyImage
                  src={
                    imageMapping[selected[1]] ||
                    "https://via.placeholder.com/150"
                  }
                />
              ) : (
                "?"
              )}
            </BreedBox>
          </BreedBoxContainerOne>
          <BreedBoxContainerTwo>
            <ButtonContainer>
              <ButtonContainerText>Create a Weenie Warrior</ButtonContainerText>
              <Button
                onClick={() => mintWeenieWarrior()}
                disabled={contractLoading || selected.length !== 2}
              >
                {contractLoading ? "Breeding" : "Breed"}
              </Button>
            </ButtonContainer>
            <BreedBox size={1}>
              {complete ? (
                <a
                  href="https://opensea.io/account"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  View
                </a>
              ) : (
                "?"
              )}
            </BreedBox>
          </BreedBoxContainerTwo>
        </BreedingContainer>
        <BreedingBackground src={breedingBackground} />
        <BreedingImageSmallBackground src={breedingGlizzys} />
        <MustardBottleOne src={mustard} />
        <MustardBottleTwo src={mustard} />
      </Container>
      <AssetsContainer>
        <AssetsTitle>My Glizzys</AssetsTitle>
        <SubParagraph>Select {glizzys.length} Glizzys to breed</SubParagraph>
        {loading && <SubParagraph>Loading...</SubParagraph>}
        <ImagesContainer>
          {glizzys.map((glizzyInfo) => (
            <AssetContainer
              onClick={() => setOrRemoveSelected(glizzyInfo.id)}
              selected={selected.includes(glizzyInfo.id)}
            >
              <GlizzyImage src={glizzyInfo.src} loading="lazy" />
              <GlizzyTitle>{glizzyInfo.name}</GlizzyTitle>
            </AssetContainer>
          ))}
        </ImagesContainer>
      </AssetsContainer>
    </>
  );
};

export default BreedingPage;
