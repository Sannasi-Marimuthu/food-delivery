import React from "react";
import Banner from "../Banner/Banner";
import BgContact from "../../assets/contact.jpg";
import Button from "../Button/Button"
import { FaArrowRight } from "react-icons/fa6";

const Contact = () => {
  return (
    <section>
      <div className="max-w-[1400px] mx-auto py-20 px-10">
        <Banner title="Contact" bgImage={BgContact} />
        <div className="flex flex-col items-center py-20 gap-3">
          <h6 className="text-orange-400 md:text-2xl">Get in touch</h6>
          <h1 className="text-zinc-800 text-4xl md:text-6xl font-bold"><span className="text-orange-500  ">Hi</span> Say</h1>
          <p className="max-w-[700px] text-center md:text-lg text-zinc-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
            perferendis saepe repellat esse deserunt pariatur corporis
            distinctio molestiae impedit. Unde dolor reiciendis minus, sit
            corrupti quaerat necessitatibus provident ut neque!
          </p>
        </div>
        <div className="max-w-[800px] mx-auto"> 
            <textarea type="text" placeholder="Your Comment" className="border-orange-400 border-2 p-3 h-[300px] w-full focus:outline-none" />
            <div className="py-10  flex  gap-5">
                <input type="text"  placeholder="Name" className="border-orange-400 border-2  p-3 w-full  rounded-md  focus:outline-none  "/>
                <input type="email" placeholder="Email" className="border-orange-400 border-2   p-3  w-full rounded-md focus:outline-none "/>
            </div>
          <Button content="Send"/>
        </div>
      </div>
    </section>
  );
};

export default Contact;
