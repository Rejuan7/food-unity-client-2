import { useRef, useEffect, useState } from "react";
import Carousel from "@itseasy21/react-elastic-carousel";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % 4;
      carouselRef.current.goTo(nextIndex);
      setCurrentIndex(nextIndex);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="mt-8">
      <Carousel
        ref={carouselRef}
        itemsToShow={1}
        pagination={true}
        enableAutoPlay={false}
      >
        <div className="w-full ">
          <img
            className="h-[300px] flex justify-center w-3/4 rounded-xl"
            src="https://i.ibb.co/K7sQ8B4/slide1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-[300px] rounded-xl"
            src="https://i.ibb.co/nQXrnVX/slide5.webp"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-[300px] rounded-xl"
            src="https://i.ibb.co/zQPYMXw/slide3.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-[300px] rounded-xl"
            src="https://i.ibb.co/7grSPmh/slide4.jpg"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
