import {
  Button,
  Container,
  MintButtonContainer,
  SubTitle,
  Title,
  HotDog,
  SoldOutCart,
  ContentContainer,
} from "./MintPage.styles";

import hotDog from "../../assets/hotdog.png";
import soldOutCart from "../../assets/soldOut.png";

const MintPage = () => {
  return (
    <Container id="mint">
      <SoldOutCart src={soldOutCart} />
      <ContentContainer>
        <Title>Sold Out!</Title>
        <SubTitle>Glizzys Available on Secondary via OpenSea</SubTitle>
        <MintButtonContainer>
          <Button
            onClick={() =>
              window.open(
                "https://opensea.io/collection/glizzygang-v2",
                "_blank"
              )
            }
          >
            OpenSea
          </Button>
        </MintButtonContainer>
      </ContentContainer>
      <HotDog src={hotDog} />
    </Container>
  );
};

export default MintPage;
