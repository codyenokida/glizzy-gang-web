import styled from "styled-components";
import breakPoints from "../../constants/breakpoints";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: radial-gradient(#04a5f5, #055ca8);
  text-align: center;

  @media ${breakPoints.phoneOnly} {
    padding: 2rem 0 0 0;
  }
`;

type ApproveButtonProps = {
  loading: boolean;
};

export const ApproveButton = styled.div<ApproveButtonProps>`
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
  z-index: 100;

  opacity: ${(props) => (props.loading ? "0.2" : "1")};
  pointer-events: ${(props) => (props.loading ? "none" : "default")};

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

export const Title = styled.h1`
  font-size: 5rem;
  text-shadow: 0.5rem 0.5rem black;
  font-family: "Knewave-Regular";
  margin-top: 5rem;
  margin-bottom: 1.5rem;

  @media ${breakPoints.tabletLandscapeUp} {
    font-size: 3.5rem;
    padding: 0 0.5rem;
    margin-top: 3rem;
  }

  @media ${breakPoints.tabletPortraitUp} {
    font-size: 3.5rem;
    padding: 0 0.5rem;
    margin-top: 0rem;
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
    bottom: -2rem;
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
    bottom: -2rem;
  }
`;
