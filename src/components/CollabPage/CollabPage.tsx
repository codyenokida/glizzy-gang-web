import { Container, Title, SubTitle, SubContainer, CollabImage } from "./CollabPage.styles";

import kaiju from "../../assets/collab-kaiju.png";
import llama from "../../assets/collab-llama.png";
import furball from "../../assets/collab-furballs.png";
import ethereal from "../../assets/collab-ethereal.png";
import ponzi from "../../assets/collab-ponzi.png";
import pixel from "../../assets/collab-pixels.png";

const collaborations = [kaiju, llama, furball, ethereal, ponzi, pixel];

const CollabPage = () => {
  return (
    <Container id="collaborations">
      <Title>Collabs & Integrations</Title>
      <SubTitle>So far...</SubTitle>
      <SubContainer>
        {collaborations.map((collab) => (
          <CollabImage src={collab} />
        ))}
      </SubContainer>
    </Container>
  );
};

export default CollabPage;
