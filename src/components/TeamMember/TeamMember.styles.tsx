import styled from "styled-components";
import breakPoints from "../../constants/breakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 16rem;
  padding: 2rem 0 1rem 0;
  margin-top: 1rem;

  @media ${breakPoints.tabletPortraitUp} {
    width: 14rem;
  }

  @media ${breakPoints.phoneOnly} {
    width: 10rem;
  }
`;

export const Title = styled.div`
  margin-bottom: 2rem;
`;

export const ImageContainer = styled.div`
  border-radius: 50%;
  width: 10rem;
  height: 10rem;

  @media ${breakPoints.phoneOnly} {
    width: 8rem;
    height: 8rem;
  }
`;

export const ProfileImage = styled.img`
  width: 10rem;
  height: 10rem;

  @media ${breakPoints.phoneOnly} {
    width: 8rem;
    height: 8rem;
  }
`;

export const TwitterHandle = styled.div`
  margin: 1rem 0;
  font-weight: 700;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const Description = styled.div``;
