import { useState } from "react";
import "../Styles/Form.css";

function FormularioContacto() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [errores, setErrores] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();

    const errores = {};
    if (!nombre.trim()) {
      errores.nombre = "El nombre es requerido";
    }
    if (!correo.trim()) {
      errores.correo = "El correo electrónico es requerido";
    } else if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(correo)) {
      errores.correo = "El correo electrónico no es válido";
    }
    if (!mensaje.trim()) {
      errores.mensaje = "El mensaje es requerido";
    }
    setErrores(errores);

    if (Object.keys(errores).length === 0) {
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="info-book">
        ¿Quieres recibir información sobre el libro? <br />
        Déjanos tu contacto y te enviaremos detalles
      </div>
      <label>
        Nombre:
        <input
          type="text"
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
        />
      </label>
      {errores.nombre && <p className="errores">{errores.nombre}</p>}
      <label>
        Correo :
        <input
          type="email"
          value={correo}
          onChange={(event) => setCorreo(event.target.value)}
        />
      </label>
      {errores.correo && <p className="errores">{errores.correo}</p>}

      <button type="submit">Enviar</button>
    </form>
  );
}
export default FormularioContacto;
