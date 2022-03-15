import styled from "styled-components";
import hotdog from "../../../../assets/bulletPoint.png";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Bullet = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1rem;
`;

const SubContainer = styled.div`
  text-align: left;
`;

const Title = styled.p`
  font-weight: 700;
  padding: 0;
  margin: 0;
`;

const Description = styled.p``;

const BulletPoint = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <Container>
    <Bullet src={hotdog} />
    <SubContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </SubContainer>
  </Container>
);

export default BulletPoint;
