import React from "react";

const Demo = (props) => {
  return (
    <div>
      <h2>{props.prop}</h2>
      <p>And the Lucky Number is {props.luckyNum}</p>
    </div>
  );
};
export default Demo;
