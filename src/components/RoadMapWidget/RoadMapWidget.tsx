import { Container, InfoContainer, LeftImage, RightImage, SubContainer, Title } from "./RoadMapWidget.styles";

const RoadMapWidget = ({ phase, left, right, children }: any) => {
  return (
    <Container>
      <Title>{phase}</Title>
      <br />
      <SubContainer>
        <LeftImage src={left} />
        <InfoContainer>{children}</InfoContainer>
        <RightImage src={right} />
      </SubContainer>
    </Container>
  );
};

export default RoadMapWidget;
