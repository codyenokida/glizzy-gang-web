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
  border-radius: 50% 50% 0 0 / 100% 100% 0 0;
  border-bottom: 0;
`;

type MustardProps = {
  size: number;
};

const Mustard = styled.img<MustardProps>`
  position: absolute;
  width: ${(props) => (props.size === 2 ? "8rem" : "2.5rem")};
  top: 0;
  right: 50%;
  transform: translate(50%, -50%);

  @media ${breakPoints.phoneOnly} {
    width: ${(props) => (props.size === 2 ? "4rem" : "2.5rem")};
  }
`;

const Divider = ({ src, size }: { src: string; size: number }) => (
  <Container>
    <SubContainer></SubContainer>
    <Mustard src={src} size={size} />
  </Container>
);

export default Divider;
