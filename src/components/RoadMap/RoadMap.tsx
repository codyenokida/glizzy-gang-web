import RoadMapWidget from "../RoadMapWidget/RoadMapWidget";
import { Container, SubContainer, Title, RedactedImage } from "./RoadMap.styles";

import leftDog from "../../assets/leftRMGlizzy.png";
import rightDog from "../../assets/rightRMglizzy.png";
import voxel from "../../assets/voxel.png";
import cart from "../../assets/RMcart.png";
import redacted from "../../assets/redacted.png";
import BulletPoint from "../RoadMapWidget/subcomponent/BulletPoint/BulletPoint";

const phaseOne = [
  {
    title: "Mint",
    description: "5555 Glizzys SOLD OUT.",
  },
  {
    title: "$MUSTARD",
    description:
      "Active after reveal, $Mustard is the main token to be used in the Glizzyverse and is essential to upcoming plans.",
  },
  {
    title: "Charity Donations",
    description:
      "29.4E of charity donations. To be split between 2 charities as voted for by the community",
  },
  {
    title: "Weenie Warriors!",
    description:
      "3333 Weenie Warriors ready to go into a new Weenie Warrior collection. But, they can only be created through our breeding system… 2 Glizzys + burn 1000 $Mustard. Don't worry, the Glizzys stay with you. They don’t get burnt.",
  },
];

const phaseTwo = [
  {
    title: "Voxel Glizzys!",
    description:
      "Voxels. Yup. 3D hotdogs to run around The Sandbox in. Each Glizzy owner will be able to mint a voxel Glizzy, only using $Mustard.",
  },
  {
    title: "Sandbox land",
    description:
      "We will be creating a Glizzy paradise to run games and !chill with your Glizzy for the world to see.",
  },
  {
    title: "The Hotdog Cart",
    description:
      "The Sandbox hotdog cart is the place to shop for all your metaverse needs. Using $Mustard, you will be able to purchase new items and assets for your Glizzy.",
  },
];

const RoadMap = () => {
  return (
    <Container id="roadmap">
      <Title>Glizzys on the road</Title>
      <SubContainer>
        <RoadMapWidget phase="Phase 1" left={leftDog} right={rightDog}>
          {phaseOne.map((items) => {
            return (
              <BulletPoint
                title={items.title}
                description={items.description}
              />
            );
          })}
        </RoadMapWidget>
        <RoadMapWidget phase="Phase 2" left={voxel} right={cart}>
          {phaseTwo.map((items) => {
            return (
              <BulletPoint
                title={items.title}
                description={items.description}
              />
            );
          })}
        </RoadMapWidget>
        <RoadMapWidget phase="Phase 3">
          <RedactedImage src={redacted} />
        </RoadMapWidget>
      </SubContainer>
    </Container>
  );
};

export default RoadMap;
