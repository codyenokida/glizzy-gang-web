import styled from "styled-components";
import breakPoints from "../../constants/breakpoints";

const NavigationBar = styled.nav`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 0;
`;

const LinkContainer = styled.ul`
  display: flex;
  list-style-type: none;
  overflow: hidden;
  @media ${breakPoints.phoneOnly} {
    display: none;
  }
`;

const Link = styled.li`
  padding: 0 1rem;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 2rem;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direciton: row;
  margin-right: 2rem;
`;

const SocialsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  @media ${breakPoints.phoneOnly} {
    display: none;
  }
`;

const SocialLink = styled.div`
  padding: 0 1rem;
  width: 2rem;
  height: 2rem;
`;

const WalletButton = styled.div`
  background-color: #f7d83c;
  border-radius: 0.25rem;
  color: black;
  padding: 1rem;
  font-weight: 700;
  @media ${breakPoints.phoneOnly} {
    display: none;
  }
`;

const OpenSea = styled.div`
  width: 2rem;
  height: 2rem;
  background-image: url("images/opensea-logo.png");
  background-position: left center;
  background-size: 2rem 2rem;
  background-repeat: no-repeat;
`;

export {
  NavigationBar,
  LeftContainer,
  RightContainer,
  LinkContainer,
  Link,
  SocialsContainer,
  SocialLink,
  WalletButton,
  OpenSea,
};
