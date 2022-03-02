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
  position: relative;
  width: 110%;
  height: 8rem;
  background-color: #455066;
  border-radius: 50% 50% 0 0 / 100% 100% 0 0;
  border-bottom: 0;
  left: -5%;

  @media ${breakPoints.phoneOnly} {
    width: 120%;
    height: 5rem;
    position: relative;
    left: -10%;
  }
`;

type MustardProps = {
  size: number;
};

const Mustard = styled.img<MustardProps>`
  position: absolute;
  width: ${(props) =>
    props.size === 2 ? "5.25rem" : props.size === 3 ? "12rem" : "2.5rem"};
  top: 0;
  right: 50%;
  transform: translate(50%, -50%);

  @media ${breakPoints.tabletPortraitUp} {
    width: ${(props) =>
      props.size === 2 ? "5.25rem" : props.size === 3 ? "10rem" : "2.5rem"};
  }

  @media ${breakPoints.phoneOnly} {
    width: ${(props) =>
      props.size === 2 ? "3.5rem" : props.size === 3 ? "8rem" : "2.5rem"};
  }
`;

const Divider = ({ src, size }: { src: string; size: number }) => (
  <Container>
    <SubContainer />
    <Mustard src={src} size={size} />
  </Container>
);

export default Divider;
