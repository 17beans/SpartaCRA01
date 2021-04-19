/* eslint-disable */
import React from "react";

const From = ({ children }) => {
  const FormStyle = {
    padding: 10,
    margin: "auto",
    width: 230,
    height: 280,
    border: "4px solid orange",
  };
  return (
    <div className="App" style={FormStyle}>
      {children}
    </div>
  );
};

export default From;
