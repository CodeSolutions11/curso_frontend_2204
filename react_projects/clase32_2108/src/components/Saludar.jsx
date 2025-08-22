// TODO: Componente de React
//TODO: Todos lo componentes pueden recibir props (parametros)
import "../styles/saludar.css";
import React from "react";

const Saludar = ({ name, email }) => {
    
  const handleClick = () => {
    alert(`Hola ${name}!!`);
  };
  const handleClick2 = (e) => {
    console.log(e.target.textContent)
    alert(`Bye ${name}!!`);
  };

  return (
    <div className="container">
      <h1 className="title">Hola a {name}</h1>
      <p>correo: {email}</p>
      <button onClick={handleClick}>Ver mas</button>
      <div
        onClick={handleClick2}
      >
        ejecutar algo
      </div>
    </div>
  );
};

export default Saludar;
