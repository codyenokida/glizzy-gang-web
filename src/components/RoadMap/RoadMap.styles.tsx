import styled from "styled-components";
import breakPoints from "../../constants/breakpoints";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(30deg, #202020, #4c4c4c);
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20%;
  @media ${breakPoints.phoneOnly} {
    padding: 0 5%;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
`;

export const SubTitle = styled.h3`
  width: 30%;
`;

export const MintButton = styled.div`
  background-color: #f7d83c;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  color: black;
  font-weight: 700;
`;
