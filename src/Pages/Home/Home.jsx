
import { Helmet } from "react-helmet-async";
import Donation from "./Donation/Donation";
import FAQ from "./FAQ/FAQ";
import Slider from "./Slider/Slider";
import FeaturedFoods from "./FeaturedFoods/FeaturedFoods";


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Food Unity</title>
      </Helmet>
      <Slider></Slider>
      <FeaturedFoods></FeaturedFoods>
      <Donation></Donation>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
