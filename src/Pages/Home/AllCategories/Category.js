import React from 'react';

const Category = ({ category }) => {
  const { _id, name, img } = category;
  return (
    <div
      className="hero card   h-56 mb-5 mx-auto shadow-lg hover:scale-110 transition duration-300 ease-in-out"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="hero-overlay bg-opacity-30 rounded-xl"></div>
      <div className="max-w-md card-body text-white">
        <div className="card-actions justify-end  ">
          <button className=" btn bg-gradient-to-r from-amber-500 to-yellow-300 text-black border-0">
            {name}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;