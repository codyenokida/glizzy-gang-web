import styled from "styled-components";
import breakPoints from "../../constants/breakpoints";

export const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(30deg, #202020, #4c4c4c);
  padding: 4rem 0;

  @media ${breakPoints.phoneOnly} {
    padding: 4rem 0 10rem 0;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20%;
  @media ${breakPoints.phoneOnly} {
    padding: 0 5%;
  }
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

export const SubTitle = styled.h3`
  width: 30%;
`;

export const MintButton = styled.div`
  background-color: #f7d83c;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  color: black;
  font-weight: 700;
`;

export const LeftDog = styled.img`
  position: absolute;
  left: -4rem;
  bottom: 0;
  width: 20rem;
  height: 23.2rem;

  @media ${breakPoints.tabletPortraitUp} {
    left: -2rem;
    bottom: 0;
    width: 10rem;
    height: 11.6rem;
  }

  @media ${breakPoints.phoneOnly} {
    left: -2rem;
    bottom: 0;
    width: 10rem;
    height: 11.6rem;
  }
`;

export const RightDog = styled.img`
  position: absolute;
  right: -4rem;
  bottom: 0;
  width: 20rem;
  height: 23.2rem;

  @media ${breakPoints.tabletPortraitUp} {
    right: -2rem;
    bottom: 0;
    width: 10rem;
    height: 11.6rem;
  }

  @media ${breakPoints.phoneOnly} {
    right: -2rem;
    bottom: 0;
    width: 10rem;
    height: 11.6rem;
  }
`;
