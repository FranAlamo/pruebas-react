import { useState } from "react";

function ListaElementos({ elementos }) {
  const [elementoSeleccionado, setElementoSeleccionado] = useState(null);
  const handleClick = (elemento) => {
    setElementoSeleccionado(elemento);
  };
  return (
    <>
      <ul>
        {elementos.map((elemento) => (
          <li key={elemento.id} onClick={() => handleClick(elemento)}>
            {elemento.titulo}
          </li>
        ))}
      </ul>
      {elementoSeleccionado && (
        <div>
          <h2>{elementoSeleccionado.titulo}</h2>
          <p>{elementoSeleccionado.contenido}</p>
          <p>{elementoSeleccionado.image}</p>
        </div>
      )}
    </>
  );
}
export default ListaElementos;
