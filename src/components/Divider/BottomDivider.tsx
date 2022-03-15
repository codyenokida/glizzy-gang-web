import styled from "styled-components";
import breakPoints from "../../constants/breakpoints";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 8rem;
  background-color: #35354a;

  @media ${breakPoints.phoneOnly} {
    height: 5rem;
  }
`;

const SubContainer = styled.div`
  width: 110%;
  height: 8rem;
  position: relative;
  left: -5%;
  background-color: #455066;
  border-radius: 0px 0px 50% 50% / 0px 0px 100% 100%;
  border-bottom: 0;

  @media ${breakPoints.phoneOnly} {
    width: 120%;
    height: 5rem;
    position: relative;
    left: -10%;
    border-radius: 0px 0px 50% 50% / 0px 0px 100% 100%;
  }
`;

const TopImage = styled.img`
  position: absolute;
  width: 13.75rem;
  bottom: -0.25rem;
  right: 50%;
  transform: translate(50%, 0);

  @media ${breakPoints.tabletPortraitUp} {
    width: 10rem;
    bottom: -2px;
  }

  @media ${breakPoints.phoneOnly} {
    width: 6rem;
  }
`;

const BottomDivider = ({ src }: { src: string }) => (
  <Container>
    <SubContainer></SubContainer>
    <TopImage src={src} />
  </Container>
);

export default BottomDivider;
