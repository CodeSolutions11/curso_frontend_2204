import React, { useState } from "react";

const ActualizarCampo = () => {
  const [usuario, setUsuario] = useState({
    nombre: "Jesus",
    apellido: "Moreno",
    correo: "",
  });

  const actualizarCampo = (campo, valor) => {
    setUsuario({
      ...usuario,
      [campo]: valor,
    });
  };


  return (
    <div>
      <h2>Perfil de usuario</h2>

      <div>
        <label>Nombre: </label>
        <input
          type="text"
          value={usuario.nombre}
          onChange={(e) => actualizarCampo("nombre", e.target.value)}
        />
      </div>
      <div>
        <label>Apellido: </label>
        <input
          value={usuario.apellido}
          type="text"
          onChange={(e) => actualizarCampo("apellido", e.target.value)}
        />
      </div>
      <div>
        <label>Correo: </label>
        <input
          value={usuario.correo}
          type="email"
          onChange={(e) => actualizarCampo("correo", e.target.value)}
        />
      </div>

      <div>
        <h3>Vista Previa</h3>
        <p>
          <strong>Nombre: </strong> {usuario.nombre || "no especificado"}
        </p>
        <p>
          <strong>Apellido: </strong> {usuario.apellido || "no especificado"}
        </p>
        <p>
          <strong>Correo: </strong> {usuario.correo || "no especificado"}
        </p>
      </div>
    </div>
  );
};

export default ActualizarCampo;
