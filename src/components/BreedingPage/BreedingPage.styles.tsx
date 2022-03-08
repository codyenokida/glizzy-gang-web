import styled from "styled-components";
import breakPoints from "../../constants/breakpoints";

export const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  background: transparent linear-gradient(180deg, #35354a 0%, #7f99ac 100%) 0%
    0% no-repeat padding-box;
  padding: 8rem 0px 3rem;
  overflow-y: hidden;

  @media ${breakPoints.tabletLandscapeUp} {
    flex-direction: column;
    height: 40vh;
  }

  @media ${breakPoints.tabletPortraitUp} {
    height: auto;
    padding: 6rem 0px 3rem;
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
  margin-bottom: 0.5rem;
  font-weight: 300;

  @media ${breakPoints.tabletLandscapeUp} {
    font-size: 3.5rem;
    padding: 0 0.5rem;
  }

  @media ${breakPoints.tabletPortraitUp} {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    padding: 0 0.5rem;
  }
`;

export const SubTitle = styled.p`
  margin-bottom: 0;
  font-weight: 700;
`;

export const Paragraph = styled.p`
  text-align: center;
  width: 50%;
  padding: 0 25%;
  max-width: 39.375rem;

  @media ${breakPoints.tabletLandscapeUp} {
    width: 80%;
    padding: 0 10%;
  }

  @media ${breakPoints.tabletPortraitUp} {
    width: 90%;
    padding: 0 5%;
  }
`;

export const SubParagraph = styled.p`
  text-align: center;
  font-family: "Outfit-Light";

  margin-bottom: 2rem;

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

export const BreedingBackground = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  z-index: 10;

  @media ${breakPoints.phoneOnly} {
    content: url("images/breedingBackground-mobile.png");
  }
`;

export const BreedingImageSmallBackground = styled.img`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 4.5%);
  width: 14rem;
  z-index: 11;
  overflow-y: hidden;

  @media ${breakPoints.tabletLandscapeUp} {
    bottom: 2px;
  }

  @media ${breakPoints.phoneOnly} {
    width: 8rem;
  }
`;

export const MustardBottleOne = styled.img`
  position: absolute;
  bottom: 3%;
  left: 30%;
  transform: translate(-50%, 50%);
  width: 2rem;
  z-index: 11;

  @media ${breakPoints.phoneOnly} {
    width: 1.5rem;
    left: 20%;
    bottom: 2%;
  }
`;

export const MustardBottleTwo = styled.img`
  position: absolute;
  bottom: 3%;
  left: 70%;
  transform: translate(-50%, 50%) scaleX(-1);
  width: 2rem;
  z-index: 11;

  @media ${breakPoints.phoneOnly} {
    width: 1.5rem;
    left: 80%;
    bottom: 2%;
  }
`;

export const BreedingContainer = styled.div`
  z-index: 11;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 10rem;

  @media ${breakPoints.tabletPortraitUp} {
    flex-direction: column;
  }
`;

type BreedBoxType = {
  size?: number;
};

export const BreedBox = styled.div<BreedBoxType>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 13.75rem;
  height: 13.75rem;
  font-size: 5rem;
  font-family: "Knewave-Regular";
  border: 0.5rem #35354a solid;
  border-radius: 1.25rem;
  background-color: #d4e0d6;
  color: #202020;

  @media ${breakPoints.tabletLandscapeUp} {
    width: 11.75rem;
    height: 11.75rem;
  }

  @media ${breakPoints.tabletPortraitUp} {
    width: ${(props) => (props.size ? "15rem" : "8.5rem")};
    height: ${(props) => (props.size ? "15rem" : "8.5rem")};
    font-size: ${(props) => (props.size ? "8rem" : "3rem")};
  }
`;

export const BreedBoxContainerOne = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BreedBoxContainerTwo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  @media ${breakPoints.tabletPortraitUp} {
    flex-direction: column;
  }
`;

export const Filler = styled.div`
  font-size: 5rem;
  text-align: center;
  margin: 0 2rem;

  @media ${breakPoints.tabletPortraitUp} {
    font-size: 2rem;
    margin: 0 1rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin: 0 2rem;
  width: 7rem;

  @media ${breakPoints.tabletPortraitUp} {
    margin-bottom: 2rem;
  }
`;

export const ButtonContainerText = styled.p`
  font-family: "Outfit-Light";
`;

export const Button = styled.button`
  font-family: "Outfit-Bold";
  background-color: #202020;
  padding: 0.75rem 2rem;
  color: white;
  border: none;
  border-radius: 0.5rem;

  cursor: pointer;
  transition: 0.15s;

  &:hover {
    opacity: 0.8;
  }
`;

export const AssetsContainer = styled.div`
  text-align: center;
  background-color: #35354a;
  padding: 3rem 20% 5rem 20%;

  @media ${breakPoints.tabletLandscapeUp} {
  }

  @media ${breakPoints.tabletPortraitUp} {
    padding: 3rem 2% 5rem 2%;
  }
`;

export const AssetsTitle = styled.h3`
  font-size: 3rem;
  font-family: "Knewave-Regular";
  margin: 0;
`;

export const ImagesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media ${breakPoints.tabletPortraitUp} {
    flex-wrap: wrap;
  }
`;

type AssetContainerProps = {
  selected: boolean;
};

export const AssetContainer = styled.div<AssetContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 10rem;
  padding: 0.75rem;
  background-color: #566c83;
  border-radius: 1.25rem;
  margin: 1rem;
  cursor: pointer;
  border: ${(props) =>
    props.selected ? "0.125rem solid white" : "0.125rem solid transparent"};

  @media ${breakPoints.tabletLandscapeUp} {
  }

  @media ${breakPoints.tabletPortraitUp} {
    width: 8rem;
    margin: 0.5rem;
  }
`;

export const BreedGlizzyImage = styled.img`
  width: 13.75rem;
  height: 13.75rem;
  border-radius: 0.75rem;

  @media ${breakPoints.tabletLandscapeUp} {
    width: 11.75rem;
    height: 11.75rem;
  }

  @media ${breakPoints.tabletPortraitUp} {
    width: 8.5rem;
    height: 8.5rem;
    font-size: 3rem;
  }
`;

export const GlizzyImage = styled.img`
  width: 10rem;
  border-radius: 1.25rem;

  @media ${breakPoints.tabletLandscapeUp} {
  }

  @media ${breakPoints.tabletPortraitUp} {
    width: 7.5rem;
  }
`;

export const GlizzyTitle = styled.p`
  margin: 0.75rem 0 0 0;
`;
