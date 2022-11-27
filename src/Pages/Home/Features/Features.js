import React from "react";
import logo from "../../../assets/icons/logo2 (4).png";
import cheapPrice from "../../../assets/icons/cheapBook.png";
import delivery from "../../../assets/icons/home-delivery.png";
import easy from "../../../assets/icons/easy.png";
import charges from "../../../assets/icons/cost.png";
import freedelivery from "../../../assets/icons/free-delivery.png";
import support from "../../../assets/icons/24-hours-support.png";
import Feature from "./Feature";

const Features = () => {
  const features = [
    {
      _id: 1,
      featureName: "BEST BOOK PRICES",
      icon: cheapPrice,
      bgClass: "bg-primary",
    },

    {
      _id: 2,
      featureName: "PICKUP AND DELIVERY",
      icon: delivery,
      bgClass: "bg-secondary",
    },
    {
      _id: 3,
      featureName: "EASY TO USE",
      icon: easy,
      bgClass: "bg-success",
    },
    {
      _id: 4,
      featureName: "MINIMUM SHIPPING CHARGES",
      icon: charges,
      bgClass: "bg-info",
    },
    {
      _id: 5,
      featureName: "FREE DELIVERY FOR BOOKS OVER 1000/-",
      icon: freedelivery,
      bgClass: "bg-error",
    },
    {
      _id: 6,
      featureName: "24×7 SUPPORT ",
      icon: support,
      bgClass: "bg-accent",
    },
  ];
  return (
    <div className="mt-24 container mx-auto  ">
      <div className="flex items-center justify-center  ">
        <div className="text-center ">
          <h2 className="text-5xl flex flex-wrap  items-center justify-center   font-semibold text-primary ">
            <img className="" src={logo} alt="" />
            <span className="text-5xl">B</span>ooks
            <span className="text-black">ify</span>
            <span className="text-black mx-3 text-5xl    font-semibold">
              Features
            </span>
          </h2>
        </div>
      </div>

      {/* <div className="grid grid-cols-2 gap-4">
    <div className="bg-blue-300 w-52 h-72 m-8 static rounded-lg ">
        <div className="bg-white w-52 h-72 -m-2 hover:m-0 absolute rounded-lg shadow-lg hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in ">
            <h1 className="m-4 text-2xl font-bold">Wat is Lorem Ipsum?</h1>
            <hr className="m-4 rounded-2xl border-t-2"/>
            <p className="m-4 text-sm">Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak</p>
        </div>
    </div>
    <div className="bg-green-300 w-52 h-72 m-8 static rounded-lg ">
        <div className="bg-white w-52 h-72 hover:-m-2 absolute rounded-lg shadow-lg hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in ">
            <h1 className="m-4 text-2xl font-bold">Wat is Lorem Ipsum?</h1>
            <hr className="m-4 rounded-2xl border-t-2"/>
            <p className="m-4 text-sm">Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak</p>
        </div>
    </div>
    

</div> */}
      <div className="grid    mt-14 gap-6 grid-cols-2 container mx-auto  md:grid-cols-3 lg:grid-cols-6">
        {features.map((feature) => (
          <Feature key={feature._id} feature={feature}></Feature>
        ))}
      </div>
    </div>
  );
};

export default Features;
