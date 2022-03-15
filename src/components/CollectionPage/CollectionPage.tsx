import { FaDiscord, FaTwitter } from "react-icons/fa";
import {
  Container,
  Description,
  ImageContainer,
  OpenSea,
  SocialLink,
  SocialsContainer,
  SubContainer,
  TextContainer,
  Title,
} from "./CollectionPage.styles";

import collectionImage from "../../assets/glizzy-collection.png";

const CollectionPage = () => {
  return (
    <Container id="about">
      <Title>The Glizzy Gang Collection</Title>
      <SubContainer>
        <ImageContainer src={collectionImage} />
        <TextContainer>
          <Description>
            Glizzy Gang is a collection of 5555 Glizzys.
            <br />
            <br />
            Some may call it a hotdog, some may call it a frankfurter, but here,
            we call them glizzys. These Glizzys have been hand-crafted and
            randomly generated from over 250 traits with tons of possible
            combinations.
            <br />
            <br />
            Your Glizzy will be unique to you and only to you, and that isn't
            all. Each Glizzy also generates 5 $Mustard per day, the Glizzyverse
            utility token. No Staking. No fuss.
          </Description>
          <SocialsContainer>
            <SocialLink>
              <FaDiscord
                size={32}
                onClick={() =>
                  window.open("https://discord.com/invite/Qg6kVazDjr", "_blank")
                }
              />
            </SocialLink>
            <SocialLink>
              <FaTwitter
                size={32}
                onClick={() =>
                  window.open("https://twitter.com/NFTGlizzy", "_blank")
                }
              />
            </SocialLink>
            <SocialLink>
              <OpenSea
                onClick={() =>
                  window.open(
                    "https://opensea.io/collection/glizzygang-v2",
                    "_blank"
                  )
                }
              />
            </SocialLink>
          </SocialsContainer>
        </TextContainer>
      </SubContainer>
    </Container>
  );
};

export default CollectionPage;
