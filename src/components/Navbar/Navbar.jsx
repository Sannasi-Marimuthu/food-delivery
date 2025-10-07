import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { TbMenu2, TbMenu3 } from "react-icons/tb";
import { Link } from "react-router-dom";

const Navbar = () => {
   let [showMenu,setShowMenu] = useState(false);
   let [isScrolled,setIsScrolled] = useState(false)


   useEffect (()=>{

    let handleScroll = ()=>{
       setIsScrolled(window.scrollY>10)
    }
    window.addEventListener("scroll",handleScroll)
    return()=>window.removeEventListener("scroll",handleScroll)
   },[])

   let toggleMenu = ()=>{
    setShowMenu(!showMenu)
   }
  return (
      <header className={`bg-white fixed top-0 left-0 right-0 z-50  ${isScrolled ? 'drop-shadow-[0_4px_25px_rgba(0,0,0,0.08)]':'' }`}>
      <nav className="max-w-[1400px] md:h-[14vh] h-[12vh]   mx-auto px-10 flex items-center  justify-between">
        {/* logo */}
        <Link  to="/" className="text-3xl font-bold">
          F<span className="text-orange-500 uppercase ">oo</span>dy
        </Link>

        {/* Deskto Menu */}
        <ul className="md:flex items-center gap-x-15 hidden">
          <li>
            <Link to="/" className="font-semibold tracking-wider text-orange-500">
              Home
            </Link>
          </li>
          <li>
            <Link
           to="/about"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/categorys"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
               Catogerys
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Contact us
            </Link>
          </li>
        </ul>
        {/* Nav Action */}
        <div className="md:flex items-center p-1 border-2 border-orange-500 rounded-full auto hidden">
          <input
            type="text"
            placeholder="Search.."
            id="text"
            autoComplete="off"
            className="flex-1 h-[5vh] focus:outline-none ps-2"
          />
          <button className="bg-gradient-to-b from-orange-400 to-orange-500 w-10 h-10 flex justify-center items-center rounded-full text-white text-xl">
            <IoSearch />
          </button>
        </div>
        <div className="flex items-center gap-5">
          <a href="#" className="text-zinc-800 text-2xl">
            <FaHeart />
          </a>
          <a href="#" className="text-zinc-800 text-2xl">
            <HiMiniShoppingBag />
          </a>

          {/* Hamburger */}
          <a
            href="#"
            className="text-zinc-800 text-3xl md:hidden"
            onClick={toggleMenu}
          >
            {showMenu ? <TbMenu3 /> : <TbMenu2 /> }
           
          </a>
        </div>
        {/* Mobile Menu */}
               <ul className={`flex flex-col items-center  gap-y-12 p-8 bg-orange-500/20 backdrop-blur-xl rounded-xl shadow-xl   gap-x-15 md:hidden absolute top-30 -left-full transform -translate-x-1/2  transition-all duration-500 ${showMenu ? 'left-1/2':""}`}>
          <li>
            <a href="" className="font-semibold tracking-wider text-orange-500">
              Home
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
             
               Catogerys
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Products
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Contect us
            </a>
          </li>
          <li className="flex items-center p-1 border-2 border-orange-500 rounded-full auto md:hidden">
          <input
            type="text"
            placeholder="Search.."
            id="text"
            autoComplete="off"
            className="flex-1 h-[5vh] focus:outline-none ps-2"
          />
          <button className="bg-gradient-to-b from-orange-400 to-orange-500 w-10 h-10 flex justify-center items-center rounded-full text-white text-xl">
            <IoSearch />
          </button>
        </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
