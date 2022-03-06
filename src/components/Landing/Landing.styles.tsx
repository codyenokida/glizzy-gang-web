import styled from "styled-components";
import breakPoints from "../../constants/breakpoints";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(180deg, #35354a, #90cde8);
  overflow-x: hidden;
`;

export const Title = styled.h1`
  font-family: "Knewave-Regular";
  font-size: 8.5rem;
  margin-top: 0;
  margin-bottom: 3rem;
  font-weight: 400;

  @media ${breakPoints.phoneOnly} {
    font-size: 3.75rem;
    margin-bottom: 2rem;
  }
`;

export const SubTitle = styled.h3`
  width: 30%;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 3rem;
  @media ${breakPoints.phoneOnly} {
    width: 60%;
    margin-bottom: 2rem;
  }
`;

export const MintButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 9rem;
  height: 2.5rem;
  background-color: #202020;
  border-radius: 0.5rem;
  color: white;
  font-weight: 700;
  font-family: "Outfit-Bold";
  transition: 0.2s;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const LeftDog = styled.img`
  position: absolute;
  left: 5rem;
  bottom: 0;
  width: 16.5rem;

  @media ${breakPoints.tabletPortraitUp} {
    width: 16rem;
    left: -2rem;
  }

  @media ${breakPoints.phoneOnly} {
    width: 9rem;
    left: -2rem;
  }
`;

export const RightDog = styled.img`
  position: absolute;
  right: 5rem;
  bottom: 0;
  width: 16.5rem;

  @media ${breakPoints.tabletPortraitUp} {
    width: 16rem;
    right: -2rem;
  }

  @media ${breakPoints.phoneOnly} {
    width: 9rem;
    right: -2rem;
  }
`;

export const CloudOne = styled.img`
  position: absolute;
  width: 14rem;
  top: 5rem;
  right: 20rem;

  @media ${breakPoints.tabletPortraitUp} {
    display: none;
  }

  @media ${breakPoints.phoneOnly} {
    display: block;
    width: 10rem;
    top: 5.5rem;
    right: 18rem;
  }
`;

export const CloudTwo = styled.img`
  position: absolute;
  width: 20rem;
  top: 10rem;
  left: -7rem;

  @media ${breakPoints.tabletPortraitUp} {
    top: 8rem;
    width: 17rem;
  }

  @media ${breakPoints.phoneOnly} {
    display: none;
  }
`;

export const CloudThree = styled.img`
  position: absolute;
  width: 10rem;
  top: 22rem;
  right: 1rem;

  @media ${breakPoints.tabletPortraitUp} {
    top: 34rem;
    right: -2rem;
  }
  @media ${breakPoints.phoneOnly} {
    width: 5rem;
    top: 25rem;
    right: -2rem;
  }
`;
