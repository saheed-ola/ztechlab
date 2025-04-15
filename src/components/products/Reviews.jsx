import React from "react";
import { RiStarFill } from "react-icons/ri";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { reviews } from "../../App";
import TopTitle from "../TopTitle";


const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div className="">
      <TopTitle heading="Reviews" />
      <div className="">
      <Slider {...settings}>
        {reviews.map((r, index) => (
          <div
            key={index}
            className=" bg-white rounded-lg shadow-xl p-4 lgl:p-8 flex flex-col justify-center items-center relative gap-4 lgl:gap-8 "
          >
            <div className="w-full flex items-center justify-center">

            <img
              src={r.picture}
              alt=""
              className="w-[200px] h-[200px] border-[2px] border-yellow-500 rounded-full bg-cover bg-center bg-no-repeat"
            />
            </div>
            <div className="w-full flex flex-col justify-between items-center py-6 border-b-2 border-b-gray-900">
              <h3 className="text-xl text-black lgl:text-2xl font-medium tracking-wide">
                {r.oruko}
              </h3>
              <p className="text-base text-gray-400 mt-3 mx-auto ">
                {r.positon}
              </p>
              <div className="text-yellow-500 flex gap-1">
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
              </div>
            </div>
            <p className="text-black">{r.statement}</p>
          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
};

export default Reviews;
