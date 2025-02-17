import React from "react";

const Details = [
  {
    id: 1,
    name: "Tokyo",
    slug: "Tokyo City",
    rating: 5,
    image: "Tokyo.jpg",
    description:
      "Experience unparalleled comfort and precision with our ergonomic mouse pad...",
    image: "/photo2.jpg",
  },
];
const TourDetails = () => {
  return (
    <div>
    <div class="bg-gray-100 p-6 border border-gray-300 rounded-lg shadow-md h-56 w-44">
   {Details.map((item, i) => {
    return <div key="id " className="text-white  ">
        {/* <img  className=
         "absolute h-44 w-44" src={item.image}/> */}
       <h2 className=" text-black  ">{item.name}</h2> 
       <p className=" text-black ">{item.rating}</p>
    
    </div>;
  })}
    </div>



  </div>
     
  );
};

export default TourDetails;

  
