import styled from "styled-components";
import breakPoints from "../../constants/breakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 2.5rem;
  font-family: "Knewave-Regular";
  margin: 0 1.5rem;

  @media ${breakPoints.phoneOnly} {
    font-size: 1.5rem;
  }
`;

export const Weiner = styled.div`
  width: 2rem;
  height: 2rem;
  background-image: url("images/small-glizzy.png");
  background-position: left center;
  background-size: 2rem 2rem;
  background-repeat: no-repeat;
`;

export const Weiner180 = styled(Weiner)`
  transform: scaleX(-1);
`;

export const SubContainer = styled.div`
  display: flex;
  flex-diretion: row;
  align-items: center;
  justify-content: center;
`;

export const LeftImage = styled.img`
  width: 9rem;
  margin-right: 3rem;

  @media ${breakPoints.tabletPortraitUp} {
    display: none;
  }

  @media ${breakPoints.phoneOnly} {
    display: none;
  }
`;

export const RightImage = styled.img`
  width: 9rem;
  margin-left: 3rem;

  @media ${breakPoints.tabletPortraitUp} {
    display: none;
  }
  
  @media ${breakPoints.phoneOnly} {
    display: none;
  }
`;

export const InfoContainer = styled.div``;
