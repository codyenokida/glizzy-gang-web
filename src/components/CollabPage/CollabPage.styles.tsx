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
  padding: 6rem 0px 8rem;

  @media ${breakPoints.tabletPortraitUp} {
    padding: 4rem 0px 6rem;
  }

  @media ${breakPoints.phoneOnly} {
    padding: 4rem 0px 5rem;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
  max-width: 68.75rem;

  @media ${breakPoints.tabletPortraitUp} {
    padding: 0px 7%;
  }

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
    font-size: 2.5rem;
    padding: 0 0.5rem;
  }
`;

export const SubTitle = styled.h3``;

export const CollabImage = styled.img`
  width: 18.75rem;
  margin: 2rem 0;

  @media ${breakPoints.phoneOnly} {
    width: 15.5rem;
    margin: 1.5rem 0px;
  }
`;
