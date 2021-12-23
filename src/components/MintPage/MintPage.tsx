import { useState } from "react";
import {
  Button,
  Container,
  MintButton,
  MintButtonContainer,
  Minus,
  Num,
  Plus,
  SubTitle,
  Title,
} from "./MintPage.styles";

const MintPage = () => {
  const [mintNum, setMintNum] = useState(1);

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
              setMintNum(mintNum === 4 ? 4 : mintNum + 1);
            }}
          >
            +
          </Plus>
        </MintButton>
        <Button onClick={() => void 0} disabled={true}>
          MINT
        </Button>
      </MintButtonContainer>
    </Container>
  );
};

export default MintPage;
