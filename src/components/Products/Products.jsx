import React, { useState } from "react";
import Heading from "../Heading/Heading";
import ProductList from "../ProductList/Productlist";
import Cards from "../Cards/Cards";
import { Link } from "react-router-dom";
const Products = () => {
  let category = ["All", "Breakfast", "Lunch", "Dinner"];

  let [activeTab, setActiveTap] = useState("All");

  let filterItems = activeTab === "All" ? ProductList:ProductList.filter((item)=>item.Category === activeTab)
  let renderCards = filterItems.slice(0,8).map((product) => {
    return (
      <Cards
        image={product.Image}
        title={product.title}
        price={product.price}
      />
    );
  });
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading highlight="Our" heading="Products" />

        {/* Taps */}
        <div className="flex flex-wrap gap-3 justify-center mt-5">
          {category.map((category) => {
            return (
              <button
                key={category}
                className={`  px-5 py-2 md:text-lg text-sm rounded-lg cursor-pointer ${
                  activeTab === category
                    ? "bg-gradient-to-b from-orange-400 to-orange-500 text-white"
                    : "bg-zinc-100"
                }`}
                onClick={() => setActiveTap(category)}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Product Lisiting */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-9 mt-20">{renderCards}</div>

        <div className="mt-15 mx-auto w-fit">
          <Link
            to="/allproducts"
            className="bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
