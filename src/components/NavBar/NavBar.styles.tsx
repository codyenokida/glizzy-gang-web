import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

import breakPoints from "../../constants/breakpoints";

type NavigationBarProps = {
  dark: boolean;
};

export const NavigationBar = styled.nav<NavigationBarProps>`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 0;
  z-index: 1000;
  color: ${(props) => (props.dark ? "#202020" : "white")};
`;

export const LinkContainer = styled.ul`
  display: flex;
  list-style-type: none;
  overflow: hidden;
  font-family: "Outfit-Bold";
  @media ${breakPoints.phoneOnly} {
    display: none;
  }
`;

export const Link = styled.li`
  padding: 0 1rem;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 2rem;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direciton: row;
  align-items: center;
  margin-right: 2rem;
`;

export const SocialsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;

  @media ${breakPoints.tabletPortraitUp} {
    display: none;
  }

  @media ${breakPoints.phoneOnly} {
    display: none;
  }
`;

export const SocialLink = styled.div`
  padding: 0 1rem;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;

export const WalletButton = styled.div<NavigationBarProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 9rem;
  height: 2.5rem;
  background-color: ${(props) => (props.dark ? "#202020" : "#f7d83c")};
  border-radius: 0.5rem;
  color: ${(props) => (props.dark ? "white" : "black")};
  font-weight: 700;
  font-family: "Outfit-Bold";
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.9;
  }
  @media ${breakPoints.phoneOnly} {
    margin-right: 2rem;
  }
`;

export const OpenSea = styled.div<NavigationBarProps>`
  width: 2rem;
  height: 2rem;
  background-image: ${(props) =>
    props.dark
      ? 'url("images/opensea-logo-black.png")'
      : 'url("images/opensea-logo.png")'};
  background-position: left center;
  background-size: 2rem 2rem;
  background-repeat: no-repeat;
`;

export const HamburgerMenuContainer = styled.div`
  display: none;

  @media ${breakPoints.phoneOnly} {
    display: block;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Anchor = styled.a<NavigationBarProps>`
  text-decoration: none;
  color: ${(props) => (props.dark ? "#202020" : "white")};
`;

export const StyledRouterLink = styled(RouterLink)<NavigationBarProps>`
  text-decoration: none;
  color: ${(props) => (props.dark ? "#202020" : "white")};
`;
