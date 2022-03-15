import {
  ClaimButton,
  Container,
  MustardBackground,
  Paragraph,
  TextContainer,
  Title,
} from "./ClaimPage.styles";

import mustardBackground from "../../assets/mustard-background.png";

const ClaimPage = () => {
  return (
    <Container>
      <MustardBackground src={mustardBackground} />
      <TextContainer>
        <Title>Mustard</Title>
        <Paragraph>
          <strong>$Mustard</strong> is the Glizzyverse utility token and
          essential for what’s to come! Why?
          <br />
          <br />
          Because 1 $Mustard = 1 $Mustard. Not available to trade or buy, only
          obtainable through holding your Glizzys. Each Glizzy generates 5
          $Mustard per day, passive yield, no staking, and able to claim at any
          time.
          <br />
          <br />
          <strong>What's to come?</strong>
          <br /> You will be able to burn your $Mustard to breed Weenie Warriors
          and soon to mint your Voxel Glizzys!
        </Paragraph>
        <ClaimButton>
          <a
            href="#claim-mustard"
            style={{ textDecoration: "none", color: "black" }}
          >
            What can I claim?
          </a>
        </ClaimButton>
      </TextContainer>
    </Container>
  );
};

export default ClaimPage;
