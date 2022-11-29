import React from "react";

const Feature = ({ feature }) => {
  const { _id, featureName, icon, bgClass } = feature;
  // console.log(feature);
  return (
    // <div className={`card p-6 static shadow-xl ${bgClass}`}>
    <div>
      
      <div
        className={` ${bgClass} card   lg:w-[174px] mx-auto w-48   h-56 static rounded-lg shadow-lg`}
      >
        <div className="bg-white   lg:w-[172px] w-44  h-56  -m-2 hover:m-0 absolute rounded-lg shadow-lg hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in  mx-auto">
          <figure>
            <img className="mt-5" src={icon} alt="Movie" />
          </figure>
          <div className="card-body ">
            <h2 className="w-32 text-slate-600 font-bold">{featureName}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
