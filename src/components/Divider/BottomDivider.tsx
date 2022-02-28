import styled from "styled-components";
import breakPoints from "../../constants/breakpoints";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 7.5rem;
  background-color: #35354a;
`;

const SubContainer = styled.div`
  width: 100%;
  height: 7.5rem;
  background-color: #455066;
  border-radius: 0 0 50% 50% / 0 0 125% 125%;
  border-bottom: 0;
`;

const TopImage = styled.img`
  position: absolute;
  width: 13.75rem;
  bottom: 0;
  right: 50%;
  transform: translate(50%, 0);

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
