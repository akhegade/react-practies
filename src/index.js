import React from "react";
import ReactDOM from "react-dom";

const fName = "Anil";
const lName = "Hegde";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      Hello {`${fName} ${lName}`}
    </h1>
    <ul>
      <li>BMW</li>
      <li>FERRARI</li>
      <li>RANGROVER</li>
    </ul>
  </div>,
  document.getElementById("root")
);
