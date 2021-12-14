import RoadMapWidget from "../RoadMapWidget/RoadMapWidget";
import { Container, SubContainer, Title } from "./RoadMap.styles";

const RoadMap = () => {
  return (
    <Container>
      <Title>Glizzys on the road</Title>
      <SubContainer>
        <RoadMapWidget title="Pre-Mint Phase">
          - Crowd sourced traits collected by the community
          <br />
          <br />
          - Launch of Glizzy Gang
          <br />
          <br />
          - 10 Legendaries to be randomly minted within the collection
          <br />
          <br />
          - Collection of 5555 Glizzys
          <br />
          <br />
          - Glizzy’d out in the glizzard
          <br />
          <br />
          - !chill
          <br />
          <br />
        </RoadMapWidget>
        <RoadMapWidget title="Post-Mint Phase">
          - $MUSTARD will be active after mint, and will be the main token used
          in the Glizzy ecosystem.
          <br />
          <br />
          - Token will generate passive yield without having the need to stake &
          able to claim at any time.
          <br />
          <br />
          - Glizzy Merch: Rock your Glizzy, loud and proud!
          <br />
          <br />
          - Donation to charities voted on by the community
          <br />
          <br />
        </RoadMapWidget>
        <RoadMapWidget title="Beyond">
          - Voxel Glizzys
          <br />
          <br />
          - Sandbox Land for all Glizzy Owners
          <br />
          <br />
          - Hotdog Cart for unique items and traits in the sandbox.
          <br />
          <br />
          - Airdrops for holders such as potential Glizzy Pets (Glizzy Dogs),
          etc.
          <br />
          <br />
          - Glizzy Vendor: Burn your $MUSTARD for Weenie Warriors and
          potentially something else!?
          <br />
          <br />
          - Have a trait you don’t like? Burn $MUSTARD for a trait exchange!
          <br />
          <br />
        </RoadMapWidget>
      </SubContainer>
    </Container>
  );
};

export default RoadMap;
