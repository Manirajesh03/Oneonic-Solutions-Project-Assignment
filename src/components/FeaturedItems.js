import React from "react";
import Button from "./Button";

const FeaturedItems = () => {
  return (
    <div className="f-items">
      <div className="d-flex flex-row m-4 justify-content-between feature">
        <h1 className="">Featured Items </h1>
        <button className="my-btn-3">See More Products</button>
      </div>

      <ul className="nav my-nav m-3 mb-5">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            New Products
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">
            Flower
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            D8 Vape
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            D10 Vape
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            THC-O
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Pets
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FeaturedItems;
