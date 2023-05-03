import React from "react";
import image from "../Assets/Images/card-img.png";

const Card = () => {
  return (
    <div className=" my-card card-final">
      <div className="card">
        <img
          src={image}
          className="card-img-top"
          alt="card-img"
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <div className="card-body">
          <h5
            className="card-title"
            style={{
              color: "#8CC63F",
              fontWeight: "600",
              fontFamily: "Sora",
              fontSize: "16px",
              textAlign: "center",
            }}
          >
            PETS
          </h5>
          <p className="card-text" style={{ textAlign: "center" }}>
            CBD Pet Treats Jerky Sticks 200mg
          </p>
          <p
            className="card-text"
            style={{
              fontWeight: "700",
              fontFamily: "Sora",
              fontSize: "26px",
              textAlign: "center",
            }}
          >
            $29.99
            <span
              style={{
                fontWeight: "300",
                textDecoration: "line-through",
                fontSize: "18px",
              }}
            >
              $59.99
            </span>
          </p>
        </div>
      </div>

      {/* <div className="col"> */}
      <div className="card">
        <img
          src={image}
          className="card-img-top"
          alt="card-img"
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <div className="card-body">
          <h5
            className="card-title"
            style={{
              color: "#8CC63F",
              fontWeight: "600",
              fontFamily: "Sora",
              fontSize: "16px",
              textAlign: "center",
            }}
          >
            PETS
          </h5>
          <p className="card-text" style={{ textAlign: "center" }}>
            CBD Pet Treats Jerky Sticks 200mg
          </p>
          <p
            className="card-text"
            style={{
              fontWeight: "700",
              fontFamily: "Sora",
              fontSize: "26px",
              textAlign: "center",
            }}
          >
            $29.99
            <span
              style={{
                fontWeight: "300",
                textDecoration: "line-through",
                fontSize: "18px",
              }}
            >
              $59.99
            </span>
          </p>
        </div>
        {/* </div> */}
      </div>
      {/* <div className="col"> */}
      <div className="card">
        <img
          src={image}
          className="card-img-top"
          alt="card-img"
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <div className="card-body">
          <h5
            className="card-title"
            style={{
              color: "#8CC63F",
              fontWeight: "600",
              fontFamily: "Sora",
              fontSize: "16px",
              textAlign: "center",
            }}
          >
            PETS
          </h5>
          <p className="card-text" style={{ textAlign: "center" }}>
            CBD Pet Treats Jerky Sticks 200mg
          </p>
          <p
            className="card-text"
            style={{
              fontWeight: "700",
              fontFamily: "Sora",
              fontSize: "26px",
              textAlign: "center",
            }}
          >
            $29.99
            <span
              style={{
                fontWeight: "300",
                textDecoration: "line-through",
                fontSize: "18px",
              }}
            >
              $59.99
            </span>
          </p>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Card;
