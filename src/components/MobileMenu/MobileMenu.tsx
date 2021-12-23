import {
  Anchor,
  Container,
  ContentContainer,
  List,
  ListContainer,
  LogoContainer,
  SocialLink,
  SocialsContainer,
  XContainer,
} from "./MobileMenu.styles";
import { FaDiscord, FaTwitter } from "react-icons/fa";

import { ImCross } from "react-icons/im";
import GlizzyLogo from "../Logo/GlizzyLogo";
import { OpenSea } from "../CollectionPage/CollectionPage.styles";

const MobileMenu = ({ isOpen, setIsOpen }: any) => {
  return (
    <Container isOpen={isOpen}>
      <XContainer>
        <ImCross size={24} onClick={() => setIsOpen(false)} />
      </XContainer>
      <ContentContainer>
        <LogoContainer>
          <GlizzyLogo />
        </LogoContainer>
        <ListContainer>
          <List>
            <Anchor href="#mint" onClick={() => setIsOpen(false)}>
              Mint
            </Anchor>
          </List>
          <List>
            <Anchor href="#about" onClick={() => setIsOpen(false)}>
              About
            </Anchor>
          </List>
          <List>
            <Anchor href="#roadmap" onClick={() => setIsOpen(false)}>
              Roadmap
            </Anchor>
          </List>
          <List>
            <Anchor href="#team" onClick={() => setIsOpen(false)}>
              Team
            </Anchor>
          </List>
        </ListContainer>
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
      </ContentContainer>

      {/* <ZiggyButt src={ziggyButt} /> */}
    </Container>
  );
};

export default MobileMenu;
