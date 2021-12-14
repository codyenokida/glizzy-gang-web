import styled from "styled-components";
import breakPoints from "../../constants/breakpoints";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: radial-gradient(#058689, #035557);
`;

export const Title = styled.h1`
  font-size: 6rem;
  @media ${breakPoints.phoneOnly} {
    font-size: 4rem;
  }
`;

export const SubTitle = styled.h3`
  width: 30%;
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
`;
