import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Heading from "../Heading/Heading";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Avater1 from "../../assets/avater6.jpg";
 
import "swiper/css";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa6";

const Review = () => {
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading highlight="Customer" heading="Review" />

        <div className="flex justify-end mt-5 py-5 gap-3">
          <button className="custom-prev text-2xl text-zinc-800 rounded-lg w-11 h-11 bg-zinc-100 flex justify-center items-center  hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer">
            <IoIosArrowBack />
          </button>
          <button className="custom-next   text-2xl  text-zinc-800 rounded-lg w-11 h-11 bg-zinc-100 flex justify-center items-center hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer ">
            <IoIosArrowForward />
          </button>
        </div>
        <Swiper
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {review.map((item) => {
            return (
              <SwiperSlide className="bg-zinc-100 rounded-xl p-8">
                <div className="flex gap-5 items-center">
                  <div className="w-16 h-16 rounded-full bg-red-300 outline-2 outline-orange-500 outline-offset-4 overflow-hidden  ">
                    <img src={item.image} className="w-full h-full " />
                  </div>
                  <div>
                    <h5 className="text-xl font-bold">{item.name}</h5>
                    <p className="text-zinc-600">{item.profession}</p>
                    <span className="flex text-yellow-400 mt-2 text-xl gap-1">
                      {Array.from({ length: item.rating }, (_, index) => (
                        <FaStar />
                      ))}
                    </span>
                  </div>
                </div>
                <div className="mt-10">
                  <p className="text-zinc-600">{item.para}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Review;

let review = [
  {
    id: 1,
    name: "Emily johnson",
    profession: "Food Blogger",
    rating: 3,
    para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, ipsum.",
    image: Avater1,
  },
  {
    id: 2,
    name: "David Smith",
    profession: "Chef",
    rating: 4,
    para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, ipsum.",
    image: Avater1,
  },
  {
    id: 3,
    name: "Alya Zahra ",
    profession: "Modal",
    rating: 5,
    para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, ipsum.",
    image: Avater1,
  },
  {
    id: 4,
    name: "Carlos Mendes ",
    profession: "Fitnes Coach ",
    rating: 5,
    para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, ipsum.",
    image: Avater1,
  },
  {
    id: 5,
    name: "Natcha Phongchai ",
    profession: "Nutritionist ",
    rating: 6,
    para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, ipsum.",
    image: Avater1,
  },
];
