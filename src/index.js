import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

/*  

Perceba que o Providers vai ter como filho o nosso App, 
o que possibilita acessarmos o nosso contexto dentro de
qualquer componente ou página dentro de App.
*/
