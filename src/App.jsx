import { useState } from "react";
import "./App.css";
import Boton from "./components/Boton";
import Pantalla from "./components/Pantalla";
import BotonClear from "./components/BotonClear";
import { evaluate } from "mathjs";

function App() {

  let [input, setInput] = useState("");
  let [valor, setValor] = useState("e");

  const agregarInput = (valor) => {
    setInput(input + valor);
  };

  const calcular = () => {
    if (input && valor !== "") {
      setInput(evaluate(input));
    } else if (input === "" && valor === "") {
      setValor("e");
    }
  };

  const raiz = () => {
    if(input){
      setInput(evaluate(`sqrt(${input})`));
      setValor("");
    } 

  };

  return (
    <div className="App">
      <div className="contenedor-calculadora">

        <Pantalla input={input} />

        <div className="fila">
        <button className="boton-contenedor"></button>
        <button className="boton-contenedor"></button>
        <Boton manejarClic={raiz}>√</Boton>
        <BotonClear manejarClear={function () {
              setInput("");
              setValor("e");
            }}>C</BotonClear>
        </div>

        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>

        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>

        <div className="fila">
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={calcular}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
      </div>
    </div>
  );
}

export default App;
