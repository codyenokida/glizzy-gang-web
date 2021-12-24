import {
  ClaimButton,
  ClaimDog,
  Container,
  GlizzyCart,
  Paragraph,
  TextContainer,
  Title,
} from "./ClaimPage.styles";

import glizzyCart from "../../assets/glizzyCart.png";
import claimDog from "../../assets/claimGlizzy.png";

const ClaimPage = () => {
  return (
    <Container id="about">
      <GlizzyCart src={glizzyCart} />
      <TextContainer>
        <Title>$MUSTARD</Title>
        <Paragraph>
          <strong>$MUSTARD</strong> is the Glizzy Gangs utility token, and will
          be the main token used in the Glizzy ecosystem. It will generate
          passive yield without having the need to stake, and able to claim at
          any time.
        </Paragraph>
        <Paragraph>
          <strong>What's to come?</strong>
          <br />
          You will be able to burn your $MUSTARD for Weenie Warriors, and if you
          have a trait you don't like, for a trait exchange!
        </Paragraph>
        <ClaimButton>Claim $MUSTARD</ClaimButton>
        <ClaimDog src={claimDog} />
      </TextContainer>
    </Container>
  );
};

export default ClaimPage;
