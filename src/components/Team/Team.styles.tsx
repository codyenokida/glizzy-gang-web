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
  padding: 0px 0px 6rem;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20%;
`;

export const Title = styled.h1`
  font-size: 5rem;
  margin-top: 0;
  font-family: "Knewave-Regular";
  font-weight: 400;

  @media ${breakPoints.phoneOnly} {
    font-size: 2.5rem;
    padding: 0 0.5rem;
  }
`;

export const SubTitle = styled.h3`
  width: 30%;
  margin-top: 0;
  margin-bottom: 0;
  @media ${breakPoints.phoneOnly} {
    font-size: 1.15rem;
    font-weight: 700;
    width: 80%;
    z-index: 4;
  }
`;

export const TeamContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 65rem;

  @media ${breakPoints.tabletPortraitUp} {
    justify-content: center;
    width: 90%;
  }
`;
