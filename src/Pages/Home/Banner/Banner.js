import React from "react";
import { Link } from "react-router-dom";
import slide1 from "../../../assets/images/slide1.webp";
import slide2 from "../../../assets/images/slide2.webp";
import slide3 from "../../../assets/images/slide3.webp";
import slide4 from "../../../assets/images/slide4.jpg";
import slide5 from "../../../assets/images/slide5.png";
import BannerItems from "./BannerItems";
const bannerData = [
  {
    image: slide1,
    prev: 5,
    _id: 1,
    next: 2,
  },
  {
    image: slide2,
    prev: 1,
    _id: 2,
    next: 3,
  },
  {
    image: slide3,
    prev: 2,
    _id: 3,
    next: 4,
  },
  {
    image: slide4,
    prev: 3,
    _id: 4,
    next: 5,
  },
  {
    image: slide5,
    prev: 4,
    _id: 5,
    next: 1,
  },
  
]; 
 console.log(bannerData);

const Banner = () => {
  return (
    <div className="carousel w-full">
      {bannerData.map((slide) => (
        <BannerItems key={slide._id} slide={slide}></BannerItems>
      ))}
    </div>
    
  );
};

export default Banner;
