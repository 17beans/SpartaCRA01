/* eslint-disable */
import React from "react";

export default function From({ children }) {
  const FormStyle = {
    padding: 10,
    margin: "auto",
    width: 250,
    height: 300,
    border: "4px solid orange",
    borderRadius: 15,
  };
  return (
    <div className="App" style={FormStyle}>
      {children}
    </div>
  );
}
