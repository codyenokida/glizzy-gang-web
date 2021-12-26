import styled from "styled-components";
import breakPoints from "../../constants/breakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 16rem;
  padding: 2rem 0 1rem 0;
`;

export const Title = styled.div`
  margin-bottom: 2rem;
`;

export const ImageContainer = styled.div`
  border: 0.25rem solid white;
  border-radius: 50%;
  width: 13.5rem;
  height: 13.5rem;

  @media ${breakPoints.phoneOnly} {
    width: 10.5rem;
    height: 10.5rem;
  }
`;

export const ProfileImage = styled.img`
  width: 13.5rem;
  height: 13.5rem;

  @media ${breakPoints.phoneOnly} {
    width: 10.5rem;
    height: 10.5rem;
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
