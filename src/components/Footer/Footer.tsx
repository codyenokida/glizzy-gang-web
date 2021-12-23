import { FaDiscord, FaTwitter } from "react-icons/fa";
import {
  BrandingContainer,
  Container,
  LeftContainer,
  OpenSea,
  RightContainer,
  SocialLink,
  SocialsContainer,
  GlizzyLogoBlack,
  Title,
  Copyright,
} from "./Footer.styles";

const Footer = () => {
  return (
    <Container>
      <LeftContainer>
        <BrandingContainer>
          <GlizzyLogoBlack />
          <Title>Glizzy Gang</Title>
        </BrandingContainer>
        <Copyright>© 2021 GLIZZY GANG ALL RIGHTS RESERVED.</Copyright>
      </LeftContainer>
      <RightContainer>
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
                  "https://opensea.io/collection/nftglizzygang",
                  "_blank"
                )
              }
            />
          </SocialLink>
        </SocialsContainer>
      </RightContainer>
    </Container>
  );
};

export default Footer;
