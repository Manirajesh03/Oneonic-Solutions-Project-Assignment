import React from "react";
import image from "../Assets/Images/image1.png";
import image2 from "../Assets/Images/Ellipse2.png";

const HeroBanner2 = () => {
  return (
    <div className="my-hero hero2 ">
      <div className="row featurette mt-5">
        <div className="col-md-5 ">
          <img src={image2} />
          <img
            className="featurette-image img-fluid mx-auto hero-box2"
            data-src="holder.js/500x500/auto"
            alt="500x500"
            styles="width: 316.92px; height: 448.28px;"
            src={image}
          />
        </div>
        <div className="col-md-7 d-flex flex-column justify-content-center align-items-center div1">
          <h1 className="featurette-heading my-h1">
            We are leaders of the industry
          </h1>
          <p className="my-para2">
            Sapien ac cursus scelerisque non non posuere praesent ultricies.
            Quam pharetra elementum dolor dolor, volutpat maecenas pellentesque
            nulla. Eget placerat vitae, suspendisse lectus. At massa in quis
            tempor integer nec nullam. Facilisis nec et, morbi enim consequat.
            Nunc a eu facilisis vel nulla nunc cras viverra quis orci elit
            vulputate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner2;
