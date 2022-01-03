import {
  Container,
  Title,
  SubTitle,
  MintButton,
  LeftDog,
  RightDog,
} from "./Landing.styles";

import leftDog from "../../assets/leftDog.png";
import rightDog from "../../assets/rightDog.png";

const Landing = () => {
  return (
    <Container>
      <Title>Glizzy Gang</Title>
      <SubTitle>
        A collectable NFT project of the best damn hotdogs you've ever seen.
      </SubTitle>
      <MintButton>
        <a href="#mint" style={{ textDecoration: "none", color: "black" }}>
          Mint a Glizzy
        </a>
      </MintButton>
      <LeftDog src={leftDog} />
      <RightDog src={rightDog} />
    </Container>
  );
};

export default Landing;
