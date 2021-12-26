import styled from "styled-components";

const GlizzyLogo = styled.div`
  width: 3rem;
  height: 3rem;
  background-image: url("images/glizzy-logo.png");
  background-position: left center;
  background-size: 3rem 3rem;
  background-repeat: no-repeat;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export default GlizzyLogo;
