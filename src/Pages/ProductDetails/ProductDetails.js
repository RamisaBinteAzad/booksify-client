import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import bannerImage from "../../assets/images/allBooks/categories.jpg";
import BookingModal from "./BookingModal";
import Product from "./Product";

const ProductDetails = () => {
 
  const products = useLoaderData();
    const [productData, setProductData] = useState(null);
    
  return (
    <section>
      <div
        className="hero h-64"
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <h1 className="text-5xl text-gray-300 font-bold">
            {products[0].categoryName}
          </h1>
        </div>
      </div>
      <div className="mx-auto container px-7 ">
        <div className="grid gap-9 grid-cols-1 px-3 lg:m-10 my-10 md:grid-cols-2 lg:grid-cols-2">
          {products.map((product) => (
            <Product
              key={product._id}
              product={product}
              setProductData={setProductData}
            ></Product>
          ))}
        </div>
      </div>
      {productData && (
        <BookingModal
          productData={productData}
          setProductData={setProductData}
        ></BookingModal>
      )}
    </section>
  );
};

export default ProductDetails;
