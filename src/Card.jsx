import React from "react";
import "./Card.css";

const Card = ({ title, content }) => {
  return (
    <div className="card">
      <h1>Note</h1>
      <p>{title}</p>
      <p>{content}</p>
    </div>
  );
};
export default Card;
