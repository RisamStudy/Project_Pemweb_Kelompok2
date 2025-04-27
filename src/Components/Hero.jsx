import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../assets/Hero1.jpg";
import banner2 from "../assets/Hero2.jpg";
import banner3 from "../assets/Hero3.jpg";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container -mt-12 overflow-hidden">
      <Slider {...settings}>
        <div className="">
          <div
            className="h-[650px] lg:h-[800px] relative"
            style={{
              backgroundImage: `url(${banner1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="relative max-w-7xl mx-auto">
              <div className="flex h-[650px] justify-center items-center lg:pt-0 pt-20">
                <div className="flex flex-col space-y-8 justify-center items-center text-center px-5 md:px-0">
                  <h1 className="text-white font-bold text-4xl lg:text-6xl">
                    Discover Your Next Adventure
                  </h1>
                  <p className="text-white lg:text-lg lg:w-[700px">
                    Explore breath destinations, create unforgettable memories
                    and embark on the journey of a lifetime.
                  </p>
                  <button className="bg-red-500 px-3 py-2 text-white rounded-md font-semibold">
                    Start Exploring
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div
            className="h-[650px] lg:h-[800px] relative"
            style={{
              backgroundImage: `url(${banner2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="relative max-w-7xl mx-auto">
              <div className="flex h-[650px] justify-center items-center lg:pt-0 pt-20">
                <div className="flex flex-col space-y-8 justify-center items-center text-center px-5 md:px-0">
                  <h1 className="text-white font-bold text-4xl lg:text-6xl">
                    Discover Your Next Adventure
                  </h1>
                  <p className="text-white lg:text-lg lg:w-[700px">
                    Explore breath destinations, create unforgettable memories
                    and embark on the journey of a lifetime.
                  </p>
                  <button className="bg-red-500 px-3 py-2 text-white rounded-md font-semibold">
                    Start Exploring
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div
            className="h-[650px] lg:h-[800px] relative"
            style={{
              backgroundImage: `url(${banner3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="relative max-w-7xl mx-auto">
              <div className="flex h-[650px] justify-center items-center lg:pt-0 pt-20">
                <div className="flex flex-col space-y-8 justify-center items-center text-center px-5 md:px-0">
                  <h1 className="text-white font-bold text-4xl lg:text-6xl">
                    Discover Your Next Adventure
                  </h1>
                  <p className="text-white lg:text-lg lg:w-[700px">
                    Explore breath destinations, create unforgettable memories
                    and embark on the journey of a lifetime.
                  </p>
                  <button className="bg-red-500 px-3 py-2 text-white rounded-md font-semibold">
                    Start Exploring
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
