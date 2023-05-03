import React from "react";
import Button from "./Button";
import image from "../Assets/Images/nature.png";

const Search = () => {
  return (
    <>
      <img src={image} alt="" className="my-img" />
      <div className=" d-flex flex-column justify-content-center align-items-center nature">
        <h1 className="my-head">Search and browse through all our products.</h1>
        {/* <input
          type="text"
          placeholder="Search All Products"
          className="my-input"
        /> */}
        <div className="input-group mb-3 my-input">
          <input
            type="text"
            className="form-control"
            placeholder="Search All Products"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button">
              Search
            </button>
          </div>
        </div>
        <div className="btn-fin">
          <button className="btn-final">Delta 8</button>
          <button className="btn-final">Delta 9</button>
          <button className="btn-final">Delta 10</button>
          <button className="btn-final">Edibles</button>
          <button className="btn-final">Pets</button>
          <button className="btn-final">Vapes</button>
          <button className="btn-final">Flowers</button>
        </div>
      </div>
    </>
  );
};

export default Search;
