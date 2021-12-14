import { Container, Title, SubTitle, MintButton } from "./Landing.styles";

const Landing = () => {
  return (
    <Container>
      <Title>Glizzy Gang</Title>
      <SubTitle>
        A collectable NFT project of the best damn hotdogs you've ever seen.
      </SubTitle>
      <MintButton>Mint a Glizzy</MintButton>
    </Container>
  );
};

export default Landing;
