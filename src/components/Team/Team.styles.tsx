import styled from "styled-components";
import breakPoints from "../../constants/breakpoints";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: radial-gradient(#058689, #035557);
  padding: 2rem 0;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20%;
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-top: 0;
  text-shadow: 0.25rem 0.25rem black;
`;

export const SubTitle = styled.h3`
  width: 30%;
  @media ${breakPoints.phoneOnly} {
    font-size: 0.75rem;
    width: 80%;
  }
`;

export const TeamContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 70%;
  justify-content: space-between;
`;
