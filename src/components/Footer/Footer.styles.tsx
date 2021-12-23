import styled from "styled-components";
import breakPoints from "../../constants/breakpoints";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  background: #f7d83c;
  padding: 2rem 0;
  color: black;
`;

export const LeftContainer = styled.div`
  margin-left: 2rem;
  @media ${breakPoints.phoneOnly} {
    margin-left: 1rem;
  }
`;

export const RightContainer = styled.div``;

export const BrandingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 2rem;
  margin: 0;
  margin-left: 1rem;
  @media ${breakPoints.phoneOnly} {
    font-size: 1.25rem;
    margin-left: 0.25;
  }
`;

export const Copyright = styled.div`
  text-align: left;
  margin-top: 0.5rem;
  @media ${breakPoints.phoneOnly} {
    font-size: 0.75rem;
  }
`;

export const OpenSea = styled.div`
  width: 2rem;
  height: 2rem;
  background-image: url("images/opensea-logo-black.png");
  background-position: left center;
  background-size: 2rem 2rem;
  background-repeat: no-repeat;
`;

export const SocialsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: flex-start;
  padding: 1rem 1rem 0 0;
  @media ${breakPoints.phoneOnly} {
    padding: 1rem 0.5rem 0 0;
  }
`;

export const SocialLink = styled.div`
  width: 2rem;
  height: 2rem;
  padding: 0 1rem 0 0;
  cursor: pointer;
  transition: 0.2s;
  @media ${breakPoints.phoneOnly} {
    padding: 0 0.5rem 0 0;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const GlizzyLogoBlack = styled.div`
  width: 3rem;
  height: 3rem;
  background-image: url("images/glizzy-logo-black.png");
  background-position: left center;
  background-size: 3rem 3rem;
  background-repeat: no-repeat;
`;
