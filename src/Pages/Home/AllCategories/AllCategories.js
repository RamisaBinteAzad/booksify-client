import React, { useEffect, useState } from "react";
import Category from "./Category";


const AllCategories = () => {
    const [categories, setCategories] = useState([]);
      useEffect(() => {
        fetch("categories.json")
          .then((res) => res.json())
          .then((data) => setCategories(data));
      });

  return (
    <div className="mt-24 container-fluid   px-4">
      <div className="text-center">
        <h2 className="text-5xl font-semibold text-primary ">
          Categories
          <span className="text-black mx-3"> List</span>
        </h2>
        <p className="mt-4 mb-8 text-slate-500 font-bold mb-5">
          Provide Different Categories of <br />
          Second Hand Products
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-16 mx-auto container lg:grid-cols-3 gap-6  " >
        {categories.map((category) => (
          <Category key={category._id} category={category}></Category>
        ))}
      </div>
      
    </div>
  );
};

export default AllCategories;