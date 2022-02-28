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
  background: #35354a;
  padding: 4rem 0 4rem 0;

  @media ${breakPoints.phoneOnly} {
    padding: 4rem 0 10rem 0;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
  @media ${breakPoints.phoneOnly} {
    padding: 0 5%;
    justify-content: center;
  }
`;

export const Title = styled.h1`
  font-size: 5rem;
  font-family: "Knewave-Regular";
  margin: 0;
  font-weight: 400;

  @media ${breakPoints.phoneOnly} {
    font-size: 3.5rem;
    padding: 0 0.5rem;
  }
`;

export const SubTitle = styled.h3``;

export const CollabImage = styled.img`
  width: 18.75rem;
  margin: 2rem 0;
`;
