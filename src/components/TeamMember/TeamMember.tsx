import {
  Container,
  Description,
  ImageContainer,
  ProfileImage,
  Title,
  TwitterHandle,
} from "./TeamMember.styles";

const TeamMember = ({
  title,
  twitter,
  img,
  description,
  twitterLink,
  name,
}: any) => {
  return (
    <Container>
      <Title>{title}</Title>
      <ImageContainer>
        <ProfileImage src={img} />
      </ImageContainer>
      <TwitterHandle onClick={() => window.open(twitterLink, "_blank")}>
        {twitter}
      </TwitterHandle>
      <Description>{name},</Description>
      <Description>{description}</Description>
    </Container>
  );
};

export default TeamMember;
