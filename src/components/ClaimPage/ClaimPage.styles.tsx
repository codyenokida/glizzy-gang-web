import styled from "styled-components";
import breakPoints from "../../constants/breakpoints";

export const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  background: radial-gradient(#04a5f5, #055ca8);
  padding: 8rem 0 4rem 0;

  @media ${breakPoints.tabletPortraitUp} {
    flex-direction: column;
  }
`;

export const GlizzyCart = styled.img`
  width: 30rem;
  height: 29.7rem;
  margin: 0 4rem 0 2rem;

  @media ${breakPoints.tabletPortraitUp} {
    flex-direction: column;
    width: 20rem;
    height: 19.7rem;
    margin: 0;
  }
`;

export const TextContainer = styled.div`
  text-align: left;
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
  text-shadow: 0.5rem 0.5rem black;
  font-family: "Knewave-Regular";
  color: #ffec00;
  margin-top: 0;
  margin-bottom: 3.5rem;
  @media ${breakPoints.tabletPortraitUp} {
    font-size: 3.5rem;
    padding: 0 0.5rem;
  }
`;

export const Paragraph = styled.p`
  width: 37rem;
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
  box-shadow: 0 4px 12px rgb(0, 0, 0, 0.32);
  color: black;
  font-family: "Rubik-Bold";
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

export const ClaimDog = styled.img`
  position: absolute;
  right: 0;
  bottom: -2rem;
  width: 13rem;
  height: 29.2rem;

  @media ${breakPoints.tabletPortraitUp} {
    display: none;
  }
`;
