import { useState } from "react";
import "../Styles/one.css";
import FormularioContacto from "../Components/Form.jsx";

function ListaElementos({ elementos }) {
  const [elementoSeleccionado, setElementoSeleccionado] = useState(null);
  const handleClick = (elemento) => {
    setElementoSeleccionado(elemento);
  };
  return (
    <>
      <ul className="list">
        {elementos.map((elemento) => (
          <li key={elemento.id} onClick={() => handleClick(elemento)}>
            {elemento.titulo}
          </li>
        ))}
      </ul>
      {elementoSeleccionado && (
        <div className="content-all">
          <h2 className="title-book">{elementoSeleccionado.titulo}</h2>
          <p className="content">{elementoSeleccionado.contenido}</p>
          <img
            src={elementoSeleccionado.image}
            alt={elementoSeleccionado.titulo}
          />
          <FormularioContacto />
        </div>
      )}
    </>
  );
}
export default ListaElementos;
