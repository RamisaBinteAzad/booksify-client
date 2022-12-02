import React from "react";
import BookingModal from "./BookingModal";

const Product = ({ product, setProductData }) => {
  const {
    _id,
    price,
    categoryName,
    description,
    yearsOfUse,
    location,
    originalprice,
    productName,
    slot,
    productCondition,
    resaleprice,
    sellerName,
    sellerEmail,
    phoneNumber,
    purchaseYear,
    postedDate,
    image,
  } = product;
  return (
    <div className="py-6">
      <div className="flex   bg-white  shadow-xl w-full h-full  rounded-lg overflow-hidden">
        <div className=" w-1/3 bg-cover rounded-lg">
          <img className="  h-full" src={image} alt="img" />
        </div>

        <div className=""></div>
        <div className="w-2/3 p-4">
          {/* <div className="flex items-center"> */}
          <h2
            tabIndex="0"
            className="focus:outline-none text-md text-primary font-semibold"
          >
            {productName}
          </h2>

          <p
            title={description}
            tabIndex="0"
            className="focus:outline-none text-xs text-gray-600 mt-2"
          >
            {description.slice(0, 95) + "..."}{" "}
          </p>
          <div className="flex mt-4">
            <div>
              <p
                tabIndex="0"
                className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1"
              >
                {yearsOfUse} years used
              </p>
            </div>
            <div className="pl-2">
              <p
                tabIndex="0"
                className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1"
              >
                Condition:{productCondition}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between py-4">
            <div>
              <h2
                tabIndex="0"
                className="focus:outline-none text-indigo-700 w-24  text-xs mt-2 font-semibold"
              >
                {sellerName}
                <p className="text-gray-700 focus:outline-none text-xs">
                  Seller
                </p>
              </h2>
              <p
                tabIndex="0"
                className="focus:outline-none text-xs text-gray-800"
              >
                Location:{location}
              </p>
            </div>

            <h2
              tabIndex="0"
              className="focus:outline-none text-indigo-700 w-28 text-xs font-semibold"
            >
              Posted On:{postedDate}
            </h2>
          </div>

          <div className="flex item-center justify-between mt-3">
            <div className="flex item-center   w-20 justify-between">
              <h1 className="  font-bold text-xl mr-2 text-indigo-700 ">
                {resaleprice}
              </h1>
              <h1 className="text-gray-700 font-bold text-lg line-through">
                {originalprice}
              </h1>
            </div>
            <label
              htmlFor="booking-modal"
              className=" hover:bg-orange-600   border-0 btn bg-gradient-to-r from-blue-500 to-slate-600   text-white text-xs font-serif uppercase rounded"
              onClick={() => setProductData(product)}
            >
              Book Now
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
