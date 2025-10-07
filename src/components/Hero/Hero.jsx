import React from "react";
import meals from "../../assets/meals (2).png";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <section>
      <div className="  min-h-screen max-w-[1400px] mx-auto px-10 flex md:flex-row flex-col items-center pt-25 md:pt-35">
        {/* Hero Content */}
        <div className="flex-1">
          <span className="bg-orange-100 text-orange-500 md:text-lg text-sm px-5 py-2 rounded-full">
            Export Best Quality...
          </span>
          <h1 className="md:text-7xl/20 text-3xl font-bold mt-4">
            <span className="text-orange-500">Delicious Meals</span>, Delivered
            to Your Doorstep
          </h1>
          <p className="text-zinc-600 md:text-lg text-md  max-w-[530px] mt-5 mb-10">
            Freshly prepared, chef-crafted dishes made with love and local
            ingredients. Skip the prep — enjoy restaurant-quality meals at home.
          </p>
          <Button content="Shop Now" />
        </div>
        {/* Hero Image */}
        <div className="flex-1 md:pt-0 pt-10">
          <img src={meals} alt="Hero Image" className="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
