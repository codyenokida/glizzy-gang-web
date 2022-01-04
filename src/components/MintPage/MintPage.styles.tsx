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
  padding: 5rem 0;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20%;
`;

export const Title = styled.h1`
  font-size: 5rem;
  margin-top: 0;
  text-shadow: 0.5rem 0.5rem black;
  font-family: "Knewave-Regular";

  @media ${breakPoints.phoneOnly} {
    font-size: 3.5rem;
    padding: 0 0.5rem;
  }
`;

export const SubTitle = styled.h3`
  font-size: 1.25rem;
`;

export const MintButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MintButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 10rem;
  border-radius: 0.5rem;
  border: 2px transparent solid;
  font-size: 2.25rem;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`;

export const Minus = styled.div`
  margin: 0 0 0 0.5rem;
  padding: 0 0.5rem;
  border-right: 1px #e5e5e5 solid;
  border-radius: 0.5rem 0 0 0.5rem;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;

  background-color: white;

  &:hover {
    background-color: #f7d83c;
  }
`;

export const Plus = styled.div`
  margin: 0 0.5rem 0 0;
  padding: 0 0.5rem;
  border-left: 1px #e5e5e5 solid;
  border-radius: 0 0.5rem 0.5rem 0;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;

  background-color: white;

  &:hover {
    background-color: #f7d83c;
  }
`;

export const Num = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: white;
  color: black;
`;

type ButtonProps = {
  disabled?: boolean;
};

export const Button = styled.div<ButtonProps>`
  margin-top: 1rem;
  margin-bottom: 5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 9rem;
  height: 2.5rem;
  background-color: #f7d83c;
  border-radius: 0.5rem;
  font-weight: 700;
  transition: 0.2s;
  box-shadow: 0 4px 12px rgb(0, 0, 0, 0.32);
  color: black;

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

export const LeftDog = styled.img`
  position: absolute;
  left: 5rem;
  bottom: -4rem;
  width: 17rem;
  height: 30.5rem;

  @media ${breakPoints.tabletPortraitUp} {
    width: 8rem;
    height: 13.57rem;
    left: 0rem;
    bottom: -2rem;
  }

  @media ${breakPoints.phoneOnly} {
    width: 8rem;
    height: 13.57rem;
    left: 0rem;
    bottom: -2rem;
  }
`;

export const RightDog = styled.img`
  position: absolute;
  right: 5rem;
  bottom: -4rem;
  width: 17rem;
  height: 30.5rem;

  @media ${breakPoints.tabletPortraitUp} {
    width: 8rem;
    height: 13.57rem;
    right: 0rem;
    bottom: -2rem;
  }

  @media ${breakPoints.phoneOnly} {
    width: 8rem;
    height: 13.57rem;
    right: 0rem;
    bottom: -2rem;
  }
`;
