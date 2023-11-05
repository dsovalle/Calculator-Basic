import React from "react";
import "../App.css";

function BotonClear(props) {
  return (
    <div className="boton-clear" onClick={props.manejarClear}>
      {props.children}
    </div>
  );
}

export default BotonClear;
