import GlizzyLogo from "../Logo/GlizzyLogo";
import { FaDiscord, FaTwitter } from "react-icons/fa";

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
} from "./NavBar.styles";

const NavBar = () => {
  return (
    <NavigationBar>
      <LeftContainer>
        <GlizzyLogo />
        <LinkContainer>
          <Link>Mint</Link>
          <Link>About</Link>
          <Link>Roadmap</Link>
          <Link>Team</Link>
        </LinkContainer>
      </LeftContainer>
      <RightContainer>
        <SocialsContainer>
          <SocialLink>
            <FaDiscord size={32} />
          </SocialLink>
          <SocialLink>
            <FaTwitter size={32} />
          </SocialLink>
          <SocialLink>
            <OpenSea />
          </SocialLink>
        </SocialsContainer>
        <WalletButton>Connect Wallet</WalletButton>
      </RightContainer>
    </NavigationBar>
  );
};

export default NavBar;
