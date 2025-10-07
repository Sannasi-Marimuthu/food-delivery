import React from "react";
import Button from "../Button/Button";
import Discountbanner from "../../assets/Discount.png";

const Discount = () => {
  return (
    <section
      className=" bg-zinc-100 bg-right bg-no-repeat bg-contain "
      style={{ backgroundImage: `url(${Discountbanner}` }}
    >
      <div className="md:bg-transparent bg-zinc-100 flex md:flex-row flex-col py-10 max-w-[1400px] mx-auto px-10">
        <span className="md:text-9xl text-5xl text-orange-500 font-bold transform md:-rotate-90 h-fit md:self-center">
          10%
        </span>
        <div className="max-w-[700px]">
          <h3 className="md:text-7xl text-4xl text-zinc-800 font-bold mt-2">
            First Order Discount!
          </h3>
          <p className="text-zinc-600 my-6">
            Welcome Offer: Enjoy 10% off your first order as a token of our
            appreciation. Offer valid for new users only. Discount applied at
            checkout.
          </p>
          <Button content="Get a Discount" />
        </div>
      </div>
    </section>
  );
};

export default Discount;
