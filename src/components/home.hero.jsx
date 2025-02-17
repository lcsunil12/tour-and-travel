import React from "react";

const HomeHero = () => {
  return (
    <div className="flex items-center justify-around mt-10">
      <div >
        <h3 className=" ">
          Traveling opens the<br></br> door to create{" "}
          <span className="text-orange-400 ">memories...</span>
        </h3>
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates<br></br>
          mollitia sint at facilis ab dolorem tempora dicta incidunt? Deleniti<br></br>
          qui eveniet magnam expedita quisquam tempora non voluptas quam quas<br></br>
          mollitia.
        </p>
      </div>
      <div className="  max-h-full w-96 ">
        <img src="/photo4.jpg"/>
       

      </div>
    </div>
  );
};

export default HomeHero;
