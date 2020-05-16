import React from "react";
import ReactDOM from "react-dom";

const fName = "Anil";
const lName = "Hegde";

ReactDOM.render(
  <h1>Hello {`${fName} ${lName}`}</h1>,
  document.getElementById("root")
);
