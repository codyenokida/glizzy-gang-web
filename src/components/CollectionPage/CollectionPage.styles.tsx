import styled from "styled-components";
import breakPoints from "../../constants/breakpoints";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #35354a;
  padding: 4rem 0 8rem;

  @media ${breakPoints.phoneOnly} {
    padding: 1rem 0px 5rem;
  }
`;

export const Title = styled.h1`
  font-size: 5rem;
  font-family: "Knewave-Regular";
  margin-top: 0;
  font-weight: 400;

  @media ${breakPoints.phoneOnly} {
    font-size: 2.5rem;
    padding: 0 0.5rem;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 59.375rem;
  padding: 0 16%;

  @media ${breakPoints.tabletPortraitUp} {
    padding: 0 10%;
  }

  @media ${breakPoints.phoneOnly} {
    padding: 0 5%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-basis: 100%;
  text-align: left;

  @media ${breakPoints.phoneOnly} {
    text-align: center;
    margin-top: 1rem;
  }
`;

export const Description = styled.div``;

export const ImageContainer = styled.img`
  width: 22rem;
  height: 18rem;
  margin-right: 4rem;

  @media ${breakPoints.tabletPortraitUp} {
    width: 16rem;
    height: 13rem;
    position: relative;
    top: 3rem;
  }

  @media ${breakPoints.phoneOnly} {
    width: 12rem;
    height: 10rem;
    marign-right: 0;
    margin: 1rem 0;
  }
`;

export const OpenSea = styled.div`
  width: 2rem;
  height: 2rem;
  background-image: url("images/opensea-logo.png");
  background-position: left center;
  background-size: 2rem 2rem;
  background-repeat: no-repeat;
`;

export const SocialsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: flex-start;
  padding: 2rem 1rem 0 0;

  @media ${breakPoints.phoneOnly} {
    justify-content: center;
    align-items: center;
    padding: 2rem 0 0 0;
  }
`;

export const SocialLink = styled.div`
  width: 2rem;
  height: 2rem;
  padding: 0 1rem 0 0;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;
