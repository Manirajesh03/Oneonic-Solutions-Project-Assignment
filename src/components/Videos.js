import React from "react";
import image1 from "../Assets/Images/Rectangle 826.png";
import image2 from "../Assets/Images/Rectangle 827.png";
import image3 from "../Assets/Images/Rectangle 828.png";
import "./components.css";

const Videos = () => {
  return (
    <div>
      <h1 className="vh1">Our Youtube Videos</h1>
      <div class="card-group">
        <div class="card card-final">
          <img
            class="card-img-top my-card-pic"
            src={image1}
            alt="Card image cap"
          />
        </div>
        <div class="card card-final">
          <img
            class="card-img-top my-card-pic"
            src={image2}
            alt="Card image cap"
          />
        </div>
        <div class="card card-final">
          <img
            class="card-img-top my-card-pic"
            src={image3}
            alt="Card image cap"
          />
        </div>
      </div>
    </div>
  );
};

export default Videos;
