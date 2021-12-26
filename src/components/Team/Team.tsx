import TeamMember from "../TeamMember/TeamMember";
import { Container, SubTitle, TeamContainer, Title } from "./Team.styles";

import yotDog from "../../assets/yotdog.png";
import jimmyDog from "../../assets/jimmy.png";
import tylerDog from "../../assets/tyler.png";

const Team = () => {
  return (
    <Container id="team">
      <SubTitle>Meet the Glizzy Gang Team</SubTitle>
      <Title>Glizzy Frens</Title>

      <TeamContainer>
        <TeamMember
          title="Glizzy Mastermind"
          twitter="@Yotdoghere"
          description="Yotdog, Founder and Artist"
          img={yotDog}
          twitterLink="https://twitter.com/Yotdoghere"
        />
        <TeamMember
          title="Glizzy Enthusiast"
          twitter="@0xchrxme"
          description="Jimmydog, Community Manager and Marketing"
          img={jimmyDog}
          twitterLink="https://twitter.com/0xchrxme"
        />
        <TeamMember
          title="Glizzy Enthusiast"
          twitter="@totallynotrelyt"
          description="Tylerdog, Community Manager and Marketing"
          img={tylerDog}
          twitterLink="https://twitter.com/totallynotrelyt"
        />
      </TeamContainer>
    </Container>
  );
};

export default Team;
