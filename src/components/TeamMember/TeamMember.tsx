import {
  Container,
  Description,
  ImageContainer,
  ProfileImage,
  Title,
  TwitterHandle,
} from "./TeamMember.styles";

const TeamMember = ({ title, twitter, img, description }: any) => {
  return (
    <Container>
      <Title>{title}</Title>
      <ImageContainer>
        <ProfileImage src={img} />
      </ImageContainer>
      <TwitterHandle>{twitter}</TwitterHandle>
      <Description>{description}</Description>
    </Container>
  );
};

export default TeamMember;
