import React from "react";
import Heading from "../Heading/Heading";
import Breakfastcat from "../../assets/breakfast.png";
import Lunchcat from "../../assets/lunch.png";
import Dinnercat from "../../assets/dinner.png";
import { Link } from "react-router-dom";

const Category = () => {
  let renderCards = category.map((card) => {
    return (
      //Card
      <div className="flex-1 basis-[300px]" key={card.id}>
        {/*  Card  Image */}
        <div className="w-full h-[30vh] relative">
          <img src={card.image} alt="card image" className="mx-auto" />
        </div>

        {/*  Card Content */}
        <div className="bg-zinc-100 pt-17 p-8 rounded-xl md:-mt-10 mt-10">
          <h3 className="text-zinc-800 text-3xl font-bold">{card.title}</h3>
          <p className="text-zinc-600  mt-3 mb-9">{card.description}</p>
          <Link
            to={card.path}
            className="bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer"
          >
            See All
          </Link>
        </div>
      </div>
    );
  });

  return (
    <div className="  max-w-[1400px] mx-auto p-10 py-20" id="category">
      <Heading highlight="Food" heading="Categorys" />

      {/* Category Card */}
      <div className="flex  flex-wrap gap-10 mt-15">{renderCards}</div>
    </div>
  );
};

export default Category;

let category = [
  {
    id: "1",
    title: "Breakfast",
    description:
      "Start your day right with crispy bacon, scrambled eggs, grilled tomatoes, baked beans, and toasted sourdough. ",
    image: Breakfastcat,
    path: "/breakfast",
  },
  {
    id: "2",
    title: "Lunch",
    description:
      "Juicy grilled chicken served over warm jasmine rice, paired with sautéed veggies, fresh herbs, and a tangy garlic yogurt sauce.  ",
    image: Lunchcat,
    path: "/lunch",
  },
  {
    id: "3",
    title: "Dinner",
    description:
      "Oven-roasted salmon fillet with a crispy herb crust, served with garlic mashed potatoes, sautéed green beans, and a lemon butter drizzle. ",
    image: Dinnercat,
    path: "/dinner",
  },
];
