import styled from "styled-components";
import breakPoints from "../../constants/breakpoints";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(150deg, #6e632b, #202020);
  padding: 4rem 0;
`;

export const Title = styled.h1`
  font-size: 5rem;
  text-shadow: 0.5rem 0.5rem black;
  font-family: "Knewave-Regular";
  margin-top: 0;
  @media ${breakPoints.phoneOnly} {
    font-size: 3.5rem;
    padding: 0 0.5rem;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
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
`;

export const Description = styled.div``;

export const ImageContainer = styled.img`
  flex-basis: 100%;
  width: 33rem;
  height: 28rem;
  margin-right: 4rem;

  @media ${breakPoints.phoneOnly} {
    width: 18rem;
    height: 16rem;
    margin-right: 0;
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
