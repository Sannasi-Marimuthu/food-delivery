import React from "react";
import Heading from "../Heading/Heading";
import { FaHeart } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import { FaShieldAlt } from "react-icons/fa";
import { FaSeedling } from "react-icons/fa";
import FoodValue from "../../assets/food-values.png";

const Values = () => {
  let leftValues = value.slice(0, 2).map((item) => {
    return (
      <div className="flex  md:flex-row-reverse items-center gap-7" key={item.id}>
        <div>
          <span className="flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15  rounded-full">
            {item.icon}
          </span>
        </div>
        <div className="md:text-right">
          <h3 className="text-zinc-800 text-3xl font-bold">{item.title}</h3>
          <p className="text-zinc-600 mt-2">{item.para}</p>
        </div>
      </div>
    );
  });
  let rightValues = value.slice(2).map((item) => {
    return (
      <div className="flex items-center  gap-7 " key={item.id}>
        <div>
          <span className="flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15  rounded-full">
            {item.icon}
          </span>
        </div>
        <div>
          <h3 className="text-zinc-800 text-3xl font-bold">{item.title}</h3>
          <p className="text-zinc-600 mt-2">{item.para}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="max-w-[1400px] mx-auto px-10">
      <Heading highlight="Our" heading="Values" />

      <div className="flex md:flex-row flex-col items-center gap-15">
        {/* Left Values */}
        <div className="md:min-h-100  gap-15 flex flex-col justify-between">{leftValues}</div>
        <div className="md:flex w-1/2 hidden">
          <img src={FoodValue} alt="Food image"  />
        </div>
        {/*  Right Values */}
        <div className="md:min-h-100 gap-15 flex flex-col justify-between">{rightValues}</div>
      </div>
    </div>
  );
};

export default Values;

let value = [
  {
    id: 1,
    title: "Trust",
    para: "We are dedicated to providing food that not only delights your palate but also earns your confidence.",
    icon: <FaHeart />,
  },
  {
    id: 2,
    title: "Healthy",
    para: "Our mission is to make healthy eating easy, enjoyable, and sustainable.",
    icon: <MdHealthAndSafety />,
  },
  {
    id: 3,
    title: "Food Safety",
    para: "Our goal is to deliver food that is not only delicious but also safe, clean, and trustworthy.",
    icon: <FaShieldAlt />,
  },
  {
    id: 1,
    title: "100% Organic",
    para: "we are committed to offering 100% certified organic foods that are as good for   the planet",
    icon: <FaSeedling />,
  },
];
