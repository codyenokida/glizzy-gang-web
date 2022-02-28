import styled from "styled-components";

type NavigationBarProps = {
  dark?: boolean;
};

const GlizzyLogo = styled.div<NavigationBarProps>`
  width: 3rem;
  height: 3rem;
  background-image: ${(props) =>
    props.dark
      ? 'url("images/glizzy-logo-black.png")'
      : 'url("images/glizzy-logo.png")'};
  background-position: left center;
  background-size: 3rem 3rem;
  background-repeat: no-repeat;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export default GlizzyLogo;
