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
  background: radial-gradient(#058689, #035557);
  overflow-x: hidden;
`;

export const Title = styled.h1`
  font-family: "Knewave-Regular";
  text-shadow: 0.5rem 0.5rem black;
  font-size: 8.5rem;
  margin-top: 0;
  margin-bottom: 3rem;
  @media ${breakPoints.phoneOnly} {
    font-size: 4rem;
  }
`;

export const SubTitle = styled.h3`
  width: 30%;
  margin-top: 0;
  margin-bottom: 3rem;
  @media ${breakPoints.phoneOnly} {
    width: 80%;
  }
`;

export const MintButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 9rem;
  height: 2.5rem;
  background-color: #f7d83c;
  border-radius: 0.5rem;
  color: black;
  font-weight: 700;
  font-family: "Rubik-Bold";
  transition: 0.2s;
  box-shadow: 0 4px 12px rgb(0, 0, 0, 0.32);

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const LeftDog = styled.img`
  position: absolute;
  left: -5rem;
  bottom: 0;
  width: 22rem;

  @media ${breakPoints.tabletPortraitUp} {
    width: 18rem;
    left: -2rem;
  }

  @media ${breakPoints.phoneOnly} {
    width: 9rem;
    left: -2rem;
  }
`;

export const RightDog = styled.img`
  position: absolute;
  right: -5rem;
  bottom: 0;
  width: 22rem;

  @media ${breakPoints.tabletPortraitUp} {
    width: 18rem;
    right: -2rem;
  }

  @media ${breakPoints.phoneOnly} {
    width: 9rem;
    right: -2rem;
  }
`;
