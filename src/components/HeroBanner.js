import React from "react";
import image from "../Assets/Images/image1.png";
import image2 from "../Assets/Images/Ellipse 1.png";
import Button from "./Button";
import "./components.css";

const HeroBanner = () => {
  return (
    <div className="my-hero ">
      <div className="row featurette mt-5">
        <div className="col-md-7 d-flex flex-column justify-content-center align-items-center div1">
          <h1 className="featurette-heading my-h1">
            Hemp & Modern Lifestyle Products
          </h1>
          <p className="my-para">
            Delta Life Hemp is a premier supplier to consumers of CBD and Hemp
            products in the US. We offer a variety of the best brands and
            product lines to our incredible clients.
          </p>
          <button class="my-btn-2">Shop Now</button>
        </div>

        <div className="col-md-5 ">
          <img src={image2} />
          <img
            className="featurette-image img-fluid mx-auto hero-box"
            data-src="holder.js/500x500/auto"
            alt="500x500"
            styles="width: 316.92px; height: 448.28px;"
            src={image}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
