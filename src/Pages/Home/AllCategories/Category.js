import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
  const { _id, name, img } = category;

  return (
    <div
      className="hero card   h-56  mx-auto  hover:scale-110 transition duration-300 ease-in-out"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="hero-overlay bg-opacity-30 rounded-xl"></div>
      <div className="max-w-md card-body text-white">
        <div className="card-actions justify-end  ">
          <Link to={`/category/${_id}`}>
            <button className=" btn bg-gradient-to-r from-amber-500 to-yellow-300 text-black border-0">
              {name}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;