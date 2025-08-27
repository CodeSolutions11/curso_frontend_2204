import React, { useState } from "react";
import "../styles/SaludoPersonalizado.css";

const SaludoPersonalizado = () => {
  const [nombre, setNombre] = useState("Adrian");
  const [mensaje, setMensaje] = useState("");

  const handleSaludo = () => {
    if (nombre.trim()) {
      setMensaje(`Hola ${nombre}! Bienvenido a React 🚀`);
    } else {
      setMensaje("❌ Por favor, ingresa tu nombre.");
    }
  };

  return (
    <div 
        className="container_saludo"
    >
      <h2>Saludo Personalizado</h2>

      <input
        className="input_nombre"
        type="text"
        placeholder="Ingresar tu nombre"

        value={nombre}
        onChange={(e) => {
            setNombre(e.target.value)
            console.log(e.target.value)
        }}
      />
      <button
        className="btn_saludar"
        onClick={handleSaludo}
      >
        Saludar
      </button>

      {
        mensaje && (
            <p>{mensaje}</p>
        )
      }
    </div>
  );
};

export default SaludoPersonalizado;
