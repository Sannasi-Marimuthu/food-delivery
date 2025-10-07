import React from "react";


const Heading = (props) => {
 return (
    <div className="py-10">
      <div className="w-fit mx-auto ">
        <h1 className="md:text-5xl text-[2rem] font-bold">
          <span className="text-orange-500">{props.highlight}</span>{" "}
          {props.heading}
        </h1>
      </div>
    </div>
  );
};

export default Heading;
