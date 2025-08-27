import React, { useState } from "react";

const ContadorBasico = () => {
  const [contador, setContador] = useState(0);
  
  //setContador(contador + 1);
  console.log(contador);


  return (
    <div
      style={{
        border: ".1rem solid black",
        padding: "1rem",
        borderRadius: ".5rem",
        display: "inline-block",
      }}
    >
      <h2>Contador: {contador}</h2>
      <button
        onClick={()=>setContador(contador + 1)}
        style={{
          marginRight: ".5rem",
          padding: ".5rem 1rem",
          cursor: "pointer",
        }}
      >
        Incrementar (+1)
      </button>
      <button
        onClick={()=>setContador(contador - 1)}
        style={{
          marginRight: ".5rem",
          padding: ".5rem 1rem",
          cursor: "pointer",
        }}
      >
        Decrementar (-1)
      </button>
      <button
        onClick={()=>setContador(0)}
        style={{
          marginRight: ".5rem",
          padding: ".5rem 1rem",
          cursor: "pointer",
        }}
      >
        Resetear (0)
      </button>
    </div>
  );
};

export default ContadorBasico;
