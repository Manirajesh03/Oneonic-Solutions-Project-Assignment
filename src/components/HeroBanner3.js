import React from "react";
import image from "../Assets/Images/jar.png";
import image2 from "../Assets/Images/Ellipse2.png";
import Button from "./Button";

const HeroBanner3 = () => {
  return (
    <div className="my-hero hero3 ">
      <div className="row featurette mt-5">
        <div className="col-md-5 ">
          <img src={image2} />
          <img
            className="featurette-image img-fluid mx-auto hero-box2 jar"
            data-src="holder.js/500x500/auto"
            alt="500x500"
            styles="width: 316.92px; height: 448.28px;"
            src={image}
          />
        </div>
        <div className="col-md-7 d-flex flex-column justify-content-center align-items-center div1">
          <h1 className="featurette-heading my-h1-final">
            Delta Life's Mixed Fruit Delta 9 Gummies
          </h1>
          <p className="my-para2-final">
            We’re huge fans of this new gummy and think it was well worth the
            wait! 25mg per gummy, made in the USA. Mixed fruit flavor.
          </p>
          <button className="my-btn-2">See More</button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner3;
