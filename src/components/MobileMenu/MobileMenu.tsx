import {
  Anchor,
  Container,
  ContentContainer,
  Link,
  ListContainer,
  LogoContainer,
  SocialLink,
  SocialsContainer,
  StyledRouterLink,
  XContainer,
} from "./MobileMenu.styles";
import { FaDiscord, FaTwitter } from "react-icons/fa";

import { ImCross } from "react-icons/im";
import GlizzyLogo from "../Logo/GlizzyLogo";
import { OpenSea } from "../CollectionPage/CollectionPage.styles";
import { useLocation } from "react-router-dom";

const MobileMenu = ({ isOpen, setIsOpen }: any) => {
  const location = useLocation();

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
          <Link>
            {location.pathname !== "/" ? (
              <StyledRouterLink to="/" onClick={() => setIsOpen(false)}>
                Mint
              </StyledRouterLink>
            ) : (
              <Anchor href="#mint" onClick={() => setIsOpen(false)}>
                Mint
              </Anchor>
            )}
          </Link>
          <Link>
            {location.pathname !== "/" ? (
              <StyledRouterLink to="/" onClick={() => setIsOpen(false)}>
                About
              </StyledRouterLink>
            ) : (
              <Anchor href="#about" onClick={() => setIsOpen(false)}>
                About
              </Anchor>
            )}
          </Link>
          <Link>
            {location.pathname !== "/" ? (
              <StyledRouterLink to="/" onClick={() => setIsOpen(false)}>
                Roadmap
              </StyledRouterLink>
            ) : (
              <Anchor href="#roadmap" onClick={() => setIsOpen(false)}>
                Roadmap
              </Anchor>
            )}
          </Link>
          <Link>
            {location.pathname !== "/" ? (
              <StyledRouterLink to="/" onClick={() => setIsOpen(false)}>
                Team
              </StyledRouterLink>
            ) : (
              <Anchor href="#team" onClick={() => setIsOpen(false)}>
                Team
              </Anchor>
            )}
          </Link>
          <Link>
            <StyledRouterLink to="/claim" onClick={() => setIsOpen(false)}>
              $MUSTARD
            </StyledRouterLink>
          </Link>
          <Link>
            <StyledRouterLink to="/breeding" onClick={() => setIsOpen(false)}>
              Weenie Warriors
            </StyledRouterLink>
          </Link>
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
                  "https://opensea.io/collection/glizzygang-v2",
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
