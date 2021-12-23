import styled from "styled-components";
import breakPoints from "../../constants/breakpoints";

export const Container = styled.div`
position: relative
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
  font-size: 6rem;
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
  background-color: #f7d83c;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  color: black;
  font-weight: 700;
  transition: 0.2s;
  box-shadow: 2px 2px 2px 1px rgb(0, 0, 0, 0.5);

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const LeftDog = styled.img`
  position: absolute;
  left: 0rem;
  bottom: 0;
  width: 20rem;

  @media ${breakPoints.phoneOnly} {
    width: 7.5rem;
    left: 0rem;
  }
`;

export const RightDog = styled.img`
  position: absolute;
  right: 0rem;
  bottom: 0;
  width: 20rem;

  @media ${breakPoints.tabletPortraitUp} {
    width: 18rem;
    right: 0rem;
  }

  @media ${breakPoints.phoneOnly} {
    width: 7.5rem;
    right: 0rem;
  }
`;
