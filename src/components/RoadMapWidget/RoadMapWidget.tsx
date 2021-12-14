import {
  Container,
  Title,
  TitleContainer,
  Weiner,
  Weiner180,
} from "./RoadMapWidget.styles";

const RoadMapWidget = ({ title, children }: any) => {
  return (
    <Container>
      <TitleContainer>
        <Weiner />
        <Title>{title}</Title>
        <Weiner180 />
      </TitleContainer>
      <br />
      {children}
    </Container>
  );
};

export default RoadMapWidget;
