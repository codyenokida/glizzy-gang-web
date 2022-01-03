import GlizzyLogo from "../Logo/GlizzyLogo";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import {
  NavigationBar,
  LeftContainer,
  LinkContainer,
  Link,
  RightContainer,
  SocialLink,
  SocialsContainer,
  WalletButton,
  OpenSea,
  HamburgerMenuContainer,
  Anchor,
  StyledRouterLink,
} from "./NavBar.styles";
import MobileMenu from "../MobileMenu/MobileMenu";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

var truncateRegex = /^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/;
const truncateEthAddress = function (address: string) {
  var match = address.match(truncateRegex);
  if (!match) return address;
  return match[1] + "\u2026" + match[2];
};

const NavBar = ({ onClick, walletAddress }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <NavigationBar>
        <LeftContainer>
          <GlizzyLogo
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
          />
          <LinkContainer>
            <Link>
              {location.pathname !== "/" ? (
                <StyledRouterLink to="/">Mint</StyledRouterLink>
              ) : (
                <Anchor href="#mint">Mint</Anchor>
              )}
            </Link>
            <Link>
              {location.pathname !== "/" ? (
                <StyledRouterLink to="/">About</StyledRouterLink>
              ) : (
                <Anchor href="#about">About</Anchor>
              )}
            </Link>
            <Link>
              {location.pathname !== "/" ? (
                <StyledRouterLink to="/">Roadmap</StyledRouterLink>
              ) : (
                <Anchor href="#roadmap">Roadmap</Anchor>
              )}
            </Link>
            <Link>
              {location.pathname !== "/" ? (
                <StyledRouterLink to="/">Team</StyledRouterLink>
              ) : (
                <Anchor href="#team">Team</Anchor>
              )}
            </Link>
            <Link>
              <StyledRouterLink to="/claim">$MUSTARD</StyledRouterLink>
            </Link>
          </LinkContainer>
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
                    "https://opensea.io/collection/glizzygang-v2",
                    "_blank"
                  )
                }
              />
            </SocialLink>
          </SocialsContainer>
          <WalletButton onClick={() => onClick(true)}>
            {walletAddress
              ? truncateEthAddress(walletAddress)
              : "Connect Wallet"}
          </WalletButton>
          <HamburgerMenuContainer>
            <GiHamburgerMenu size={24} onClick={() => setIsOpen(true)} />
          </HamburgerMenuContainer>
        </RightContainer>
      </NavigationBar>
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default NavBar;
