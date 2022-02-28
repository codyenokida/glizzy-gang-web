import styled from "styled-components";
import breakPoints from "../../constants/breakpoints";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #455066;
  padding: 2rem 0 4rem 0;
`;

export const Title = styled.h1`
  font-size: 1.25rem;
  font-family: "Outfit-Bold";
  font-weight: 700;
  margin-top: 0;
  @media ${breakPoints.phoneOnly} {
    text-align: center;
  }
`;

export const SubContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 0 16%;

  @media ${breakPoints.tabletPortraitUp} {
    padding: 0 10%;
  }

  @media ${breakPoints.phoneOnly} {
    padding: 0 5%;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 100%;
  text-align: center;
  @media ${breakPoints.phoneOnly} {
    align-items: center;
  }
`;

export const Description = styled.div``;

export const ImageContainer = styled.img`
  width: 15rem;
  height: 15.4rem;
  margin-right: 4rem;
  align-self: flex-end;
  @media ${breakPoints.tabletPortraitUp} {
    margin-right: 2rem;
  }
  @media ${breakPoints.phoneOnly} {
    margin-right: 0;
  }
`;

export const Tooltip = styled.p`
  margin-bottom: 4rem;
  @media ${breakPoints.phoneOnly} {
    margin-top: -3rem;
    z-index: 1;
  }
`;

export const Line = styled.div`
  position: absolute;
  bottom: 0;
  right: 50%;
  transform: translate(50%, 50%);
  width: 100%;
  height: 0.5rem;
  background: white;
  border-radius: 1rem;
`;

export const NumContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const MustardBottle = styled.img`
  width: 2rem;
  margin-right: 2rem;

  @media ${breakPoints.phoneOnly} {
    display: none;
  }
`;

export const MustardBottleFlipped = styled.img`
  width: 2rem;
  margin-left: 2rem;
  transform: scaleX(-1);
  @media ${breakPoints.phoneOnly} {
    display: none;
  }
`;

export const Num = styled.p`
  font-size: 4rem;
  margin: 1rem 0;
  font-family: "Outfit-Bold";
  font-weight: 700;

  @media ${breakPoints.tabletPortraitUp} {
    font-size: 3rem;
  }

  @media ${breakPoints.phoneOnly} {
    font-size: 2rem;
    text-align: center;
  }
`;

type ClaimButtonProps = {
  loading: boolean;
};

export const ClaimButton = styled.div<ClaimButtonProps>`
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
  @media ${breakPoints.phoneOnly} {
    margin-bottom: 2rem;
    margin-top: 2rem;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 60%;

  @media ${breakPoints.phoneOnly} {
    flex-direction: column;
  }
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 25rem;
  margin-top: 4rem;
  font-family: "Outfit-Bold";
  background-color: #35354a;
  border-radius: 0.5rem;
  padding: 1.25rem 0;

  @media ${breakPoints.phoneOnly} {
    width: 20rem;
  }
`;

export const SubTitle = styled.p`
  margin-bottom: 1rem;
  margin-top: 0;
`;

export const Content = styled.p`
  font-size: 2.25rem;
  margin-top: 0;
  margin-bottom: 0;
`;
