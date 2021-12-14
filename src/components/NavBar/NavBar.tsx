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

var truncateRegex = /^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/;
const truncateEthAddress = function (address: string) {
  var match = address.match(truncateRegex);
  if (!match) return address;
  return match[1] + "\u2026" + match[2];
};

const NavBar = ({ onClick, walletAddress, executeAboutScroll }: any) => {
  return (
    <NavigationBar>
      <LeftContainer>
        <GlizzyLogo />
        <LinkContainer>
          <Link>Mint</Link>
          <Link onClick={executeAboutScroll}>About</Link>
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
        <WalletButton onClick={() => onClick(true)}>
          {walletAddress ? truncateEthAddress(walletAddress) : "Connect Wallet"}
        </WalletButton>
      </RightContainer>
    </NavigationBar>
  );
};

export default NavBar;
