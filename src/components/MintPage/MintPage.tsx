import {
  Button,
  Container,
  LeftDog,
  RightDog,
  MintButtonContainer,
  SubTitle,
  Title,
} from "./MintPage.styles";

import leftDog from "../../assets/mintGlizzyOne.png";
import rightDog from "../../assets/mintGlizzyTwo.png";

const MintPage = () => {
  return (
    <Container id="mint">
      <Title>Sold Out!</Title>
      <SubTitle>Glizzys available on secondary via OpenSea link</SubTitle>
      <MintButtonContainer>
        <Button
          onClick={() =>
            window.open("https://opensea.io/collection/glizzygang-v2", "_blank")
          }
        >
          OpenSea
        </Button>
      </MintButtonContainer>
      <LeftDog src={leftDog} />
      <RightDog src={rightDog} />
    </Container>
  );
};

export default MintPage;
