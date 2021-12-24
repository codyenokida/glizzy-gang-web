import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

type ContainerProps = {
  isOpen: boolean;
};

export const Container = styled.div<ContainerProps>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: ${(props) => (props.isOpen ? 0 : "-100vw")};
  overflow: hidden;
  background-color: black;
  color: white;
  margin: 0;
  z-index: 1001;
  transition: left 0.3s ease-out;
`;

export const XContainer = styled.div`
  width: 100%;
  color: white;
  margin: 2rem;
  position: absolute;
`;

export const ListContainer = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Rubik-Bold";
  margin-top: 2rem;
`;

export const Link = styled.li`
  margin: 1rem 0;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Anchor = styled.a`
  text-decoration: none;
  color: white;
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;

export const SocialsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
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

export const StyledRouterLink = styled(RouterLink)`
  text-decoration: none;
  color: white;
`;
