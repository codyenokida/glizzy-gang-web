import TeamMember from "../TeamMember/TeamMember";
import { Container, SubTitle, TeamContainer, Title } from "./Team.styles";

import yotDog from "../../assets/team/yotdog.png";
import dots from "../../assets/team/dots.png";
import oprah from "../../assets/team/oprah.png";
import silk from "../../assets/team/silk.png";
import paul from "../../assets/team/paul.png";

import jimmyDog from "../../assets/team/jimmy.png";
import tylerDog from "../../assets/team/tyler.png";

const team = [
  {
    title: "Glizzy Mastermind",
    twitter: "Yotdoghere",
    img: yotDog,
    name: "Yotdog",
    description: "Founder and Artist",
  },
  {
    title: "Glizzard Wizard",
    twitter: "ohDotss",
    img: dots,
    name: "Nathan",
    description: "Glizzy Dev",
  },
  {
    title: "Glizzy Gladiator",
    twitter: "OprahsNFTs",
    img: oprah,
    name: "Oprah",
    description: "Community Manager",
  },
  {
    title: "Glizzy Gladiator",
    twitter: "Sikwitrythym",
    img: silk,
    name: "Swords",
    description: "Community Manager",
  },
  {
    title: "Glizzy Enthusiast",
    twitter: "0xchrxme",
    img: jimmyDog,
    name: "Jimmy",
    description: "Advisor",
  },
  {
    title: "Glizzy Enthusiast",
    twitter: "totallynotrelyt",
    img: tylerDog,
    name: "Tyler",
    description: "Advisor",
  },
  {
    title: "Glizzy Gatekeeper",
    twitter: "PaulyPaulNFT",
    img: paul,
    name: "Pauly",
    description: "Head Mod",
  },
];

const Team = () => {
  return (
    <Container id="team">
      <SubTitle>Meet the Glizzy Gang Team</SubTitle>
      <Title>Glizzy Frens</Title>

      <TeamContainer>
        {team.map((member) => (
          <TeamMember
            title={member.title}
            twitter={`@${member.twitter}`}
            name={member.name}
            description={member.description}
            img={member.img}
            twitterLink={`https://twitter.com/${member.twitter}`}
          />
        ))}
      </TeamContainer>
    </Container>
  );
};

export default Team;
