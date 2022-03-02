import styled from "styled-components";
import breakPoints from "../../constants/breakpoints";

export const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(180deg, #51607e, #35354a);
  padding: 6rem 0 4rem;

  @media ${breakPoints.phoneOnly} {
    flex-direction: column;
    padding: 5rem 0px;
  }
`;

export const SoldOutCart = styled.img`
  width: 21rem;
  margin-right: 2rem;

  @media ${breakPoints.tabletPortraitUp} {
    width: 16rem;
  }

  @media ${breakPoints.phoneOnly} {
    width: 10rem;
    margin-right: 0;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;

  @media ${breakPoints.phoneOnly} {
    text-align: center;
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: 5rem;
  margin-top: 0;
  margin-bottom: 1.5rem;
  font-family: "Knewave-Regular";
  font-weight: 400;

  @media ${breakPoints.phoneOnly} {
    font-size: 2.5rem;
    padding: 0 0.5rem;
  }
`;

export const SubTitle = styled.h3`
  font-size: 1.25rem;

  @media ${breakPoints.phoneOnly} {
    font-size: 1rem;
    padding: 0 0.5rem;
  }
`;

export const MintButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

type ButtonProps = {
  disabled?: boolean;
};

export const Button = styled.div<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 9rem;
  height: 2.5rem;
  background-color: #202020;
  border-radius: 0.5rem;
  font-weight: 700;
  transition: 0.2s;
  color: white;

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

  ${(props) => (props.disabled ? "pointer-events: none; opacity: 0.3;" : "")}
`;

export const HotDog = styled.img`
  position: absolute;
  top: 0;
  right: 50%;
  transform: translate(50%, -50%);
  width: 5.25rem;
  z-index: 100;

  @media ${breakPoints.phoneOnly} {
    width: 3.5rem;
  }
`;
