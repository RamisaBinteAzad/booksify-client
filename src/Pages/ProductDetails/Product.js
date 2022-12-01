import React from "react";

const Product = ({ product }) => {
  const {
    categoryId,
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
            tabindex="0"
            className="focus:outline-none text-md text-primary font-semibold"
          >
            {productName}
          </h2>

          <p
            title={description}
            tabindex="0"
            class="focus:outline-none text-xs text-gray-600 mt-2"
          >
            {description.slice(0, 95) + "..."}{" "}
          </p>
          <div className="flex mt-4">
            <div>
              <p
                tabindex="0"
                className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1"
              >
                {yearsOfUse} years used
              </p>
            </div>
            <div className="pl-2">
              <p
                tabindex="0"
                className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1"
              >
                Condition:{productCondition}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between py-4">
            <div>
              <h2
                tabindex="0"
                className="focus:outline-none text-indigo-700 w-24  text-xs mt-2 font-semibold"
              >
                {sellerName}
                <p className="text-gray-700 focus:outline-none text-xs">
                  Seller
                </p>
              </h2>
              <p
                tabindex="0"
                className="focus:outline-none text-xs text-gray-800"
              >
                Location:{location}
              </p>
            </div>

            <h2
              tabindex="0"
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
            <button className=" bg-primary  border-0 btn hover:bg-orange-600  text-white text-xs font-bold uppercase rounded">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
