 import React from 'react';
import { Link } from 'react-router-dom';
 
const BannerItems = ({ slide }) => {
    const { image, prev, next, _id } = slide;
   
    return (
      <div
        id={`slide${_id}`}
        className="carousel-item relative w-full transition duration-10000 ease-in-out md:ease-in   "
      >
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <div className="hero-overlay bg-opacity-75 "></div>
          <div className="hero-content text-center px-auto glass rounded text-neutral-content">
            <div className="max-w-md ">
              <h1 className=" text-7xl text-secondary  font-semibold">
                BUY & SELL
              </h1>
              <h1 className="mb-5 text-6xl text-white  font-semibold">
                Used Books
              </h1>

              <p className="mb-6 text-white w-96 ">
                Booksify is the fastest online marketplace conneting Buyers And
                Sellers. Start buying and selling today! Make shopping{" "}
                <span className="text-secondary font-bold">
                  SIMPLE, SECURE and FAST.{" "}
                </span>
                Discover what you need and sell in our powerful platform.
              </p>
              <button className="btn btn-md border-0 text-white font-thin mr-4 bg-gradient-to-r from-blue-500 to-slate-600">
                Sign Up
              </button>
              <button className="btn btn-outline text-white border font-thin border-white">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          {/* {`#slide${next}`} */}

          <a href={`#slide${prev}`} className="btn btn-circle">
            ❮
          </a>
          <a href={`#slide${next}`} className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    );
};
 
 export default BannerItems;