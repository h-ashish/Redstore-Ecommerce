import React from "react";
import bgimage from "../assets/bgimage.jpg";
import Products from "./Products";

function Home() {
  return (
    <div className="hero mt-5">
      <div className="card bg-dark text-white border-0">
        <img
          src={bgimage}
          className="card-img"
          alt="Background image"
          height="550px"
        />
        <div className="card-img-overlay">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0 mt-3">
              NEW SEASON ARRIVALS
            </h5>
            <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
}

export default Home;
