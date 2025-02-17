import React from "react";
import Header from "./components/header.page";
import HomePage from "./pages/home.page";
import TourDetails from "./pages/tour.page";
// import Register from "./pages/register.page"

const App = () => {
  return (
    <div>
      <Header />
      <HomePage />
      {/* <Register /> */}
      <TourDetails/>
    </div>
  );
};

export default App;
