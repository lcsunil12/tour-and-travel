import React from "react";
import { products } from "../libs/product";



const TourDetails = () => {
  return (
    <div>
    <div class="bg-gray-100 p-6 border border-gray-300 rounded-lg shadow-md h-56 w-44">
   {products.map((item, i) => {
    return <div key="id " className="text-white  ">
         <img  className=
         "absolute h-44 w-44" src={`/${item.photo}`}/> 
       <h2 className=" text-black  ">{item.name}</h2> 
       <p className=" text-black ">{item.rating}</p>
    
    </div>;
  })}
    </div>



  </div>
     
  );
};

export default TourDetails;

  
