import styled from "styled-components";
import breakPoints from "../../constants/breakpoints";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 75vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  background: #35354a;
  padding: 8rem 0 4rem 0;

  @media ${breakPoints.tabletLandscapeUp} {
    flex-direction: column;
    height: 100vh;
  }

  @media ${breakPoints.tabletPortraitUp} {
    flex-direction: column;
    height: auto;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;

  @media ${breakPoints.tabletLandscapeUp} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media ${breakPoints.tabletPortraitUp} {
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: 5rem;
  font-family: "Knewave-Regular";
  color: #ffffff;
  margin-top: 0;
  margin-bottom: 3.5rem;
  font-weight: 400;

  @media ${breakPoints.tabletLandscapeUp} {
    font-size: 3.5rem;
    padding: 0 0.5rem;
  }

  @media ${breakPoints.tabletPortraitUp} {
    font-size: 3.5rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    padding: 0 0.5rem;
  }
`;

export const Paragraph = styled.p`
  text-align: left;
  width: 50%;
  padding: 0 25%;

  @media ${breakPoints.tabletLandscapeUp} {
    width: 80%;
    padding: 0 10%;
  }

  @media ${breakPoints.tabletPortraitUp} {
    width: 80%;
    padding: 0 10%;
  }
`;

export const ClaimButton = styled.div`
  margin-top: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 9.25rem;
  height: 2.5rem;
  background-color: #f7d83c;
  border-radius: 0.5rem;
  font-weight: 700;
  transition: 0.2s;
  color: black;
  font-family: "Outfit-Bold";
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
  cursor: pointer;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
  transition: 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const MustardBackground = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  content: url("images/mustard-background.png");

  @media ${breakPoints.phoneOnly} {
    content: url("images/mustard-background-mobile.png");
  }
`;
