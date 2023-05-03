import React from "react";
import pic from "../Assets/Images/pic.png";
import ms from "../Assets/Images/Marketing Specialist.png";
import star from "../Assets/Images/Vector.png";
import "./components.css";

const Reviews = () => {
  return (
    <div className="review">
      <h1 className="rh1">Recent Google Reviews</h1>
      <div className="card-group card-last">
        <div className="card">
          <div className="card-pin">
            <div className="card-body">
              <p className="card-text">
                So grateful to have found such a wonderful product, friendly
                staff and affordable prices. This whole experience has benefited
                my life in so many positive...
              </p>
              <p className="card-text d-flex ">
                <div>
                  <img src={pic} alt="" />
                </div>
                <div d-flex flex-column>
                  <div>
                    <img src={ms} alt="" />
                  </div>
                  <div>
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </div>
                </div>
              </p>
              <p></p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-pin">
            <div className="card-body">
              <p className="card-text">
                So grateful to have found such a wonderful product, friendly
                staff and affordable prices. This whole experience has benefited
                my life in so many positive...
              </p>
              <p className="card-text d-flex ">
                <div>
                  <img src={pic} alt="" />
                </div>
                <div d-flex flex-column>
                  <div>
                    <img src={ms} alt="" />
                  </div>
                  <div>
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </div>
                </div>
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-pin">
            <div className="card-body">
              <p className="card-text">
                So grateful to have found such a wonderful product, friendly
                staff and affordable prices. This whole experience has benefited
                my life in so many positive...
              </p>
              <p className="card-text d-flex ">
                <div>
                  <img src={pic} alt="" />
                </div>
                <div d-flex flex-column>
                  <div>
                    <img src={ms} alt="" />
                  </div>
                  <div>
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </div>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
