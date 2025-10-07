import React from "react";
import Banner from "../Banner/Banner";
import BgAbout from "../../assets/about.jpg"

const About = () => {
  return (
    <section>
      <div className="max-w-[1400px] mx-auto py-20 px-10">
        <Banner title="About Us" bgImage={BgAbout}  />
         <div>
            <img src=""   />
         </div>
      </div>
    </section>
  );
};

export default About;
