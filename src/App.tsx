import "./App.css";
import CollectionPage from "./components/CollectionPage/CollectionPage";
import Divider from "./components/Divider/Divider";
import Footer from "./components/Footer/Footer";
import Landing from "./components/Landing/Landing";
import NavBar from "./components/NavBar/NavBar";
import RoadMap from "./components/RoadMap/RoadMap";
import Team from "./components/Team/Team";

function App() {
  return (
    <>
      <NavBar />
      <Landing />
      <Divider />
      <CollectionPage />
      <Divider />
      <RoadMap />
      <Divider />
      <Team />
      <Divider />
      <Footer />
    </>
  );
}

export default App;
