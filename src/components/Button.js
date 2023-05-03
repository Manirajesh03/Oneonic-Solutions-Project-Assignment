import React from "react";
import "./components.css";

const Button = (props) => {
  return (
    <div>
      <button className="btn btn-success my-btn">{props.name}</button>
    </div>
  );
};

export default Button;
