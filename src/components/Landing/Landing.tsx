import {
  Container,
  Title,
  SubTitle,
  MintButton,
  LeftDog,
  RightDog,
  CloudOne,
  CloudTwo,
  CloudThree,
} from "./Landing.styles";

import leftDog from "../../assets/leftDog.png";
import rightDog from "../../assets/rightDog.png";
import cloudOne from "../../assets/cloudOne.png";
import cloudTwo from "../../assets/cloudTwo.png";

const Landing = () => {
  return (
    <Container>
      <Title>Glizzy Gang</Title>
      <SubTitle>
        A collectable NFT project of the best damn hotdogs you've ever seen.
      </SubTitle>
      <MintButton>
        <a
          href="https://opensea.io/collection/glizzygang-v2"
          style={{ textDecoration: "none", color: "white" }}
        >
          Opensea
        </a>
      </MintButton>
      <LeftDog src={leftDog} />
      <RightDog src={rightDog} />
      <CloudOne src={cloudOne} />
      <CloudTwo src={cloudOne} />
      <CloudThree src={cloudTwo} />
    </Container>
  );
};

export default Landing;
