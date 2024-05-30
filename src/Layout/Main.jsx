
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Marquee from "react-fast-marquee";

const Main = () => {
  return (
    <div>
      <div className="max-w-7xl mx-5 lg:mx-auto">
        <Marquee pauseOnHover={true} speed={100} className="flex items-center bg-sky-400">
        Join the fight against hunger. Give generously, donate food. Provide sustenance to those in need, every bit matters. Nourish lives, inspire hope. Together, we can create a brighter future for all.
        </Marquee>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
