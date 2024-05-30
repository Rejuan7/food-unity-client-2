import { Helmet } from "react-helmet-async";
import Donation from "./Donation/Donation";
import FAQ from "./FAQ/FAQ";
import Slider from "./Slider/Slider";
import FeaturedFoods from "./FeaturedFoods/FeaturedFoods";
import Chat from "./Chat/Chat";



const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Food Unity</title>
      </Helmet>
      <Slider></Slider>
      <Chat></Chat>
      <FeaturedFoods></FeaturedFoods>
      <Donation></Donation>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
