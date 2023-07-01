import React from "react";
import "./App.css";
import ListaElementos from "./Components/one.jsx";
import LibroMatarAUnRuiseñor from "./img/mataraunruiseñor.jpg";
import ElMundoDeSofia from "./img/elmundodesofia.jpg";
import Siddartha from "./img/siddartha.jpeg";
function App() {
  const elementos = [
    {
      id: 1,
      titulo: "Matar a un ruiseñor",
      contenido:
        "Cuenta la historia del abogado antirracista Atticus Finch, al que le es asignado un caso de extrema gravedad y controversia: la defensa de Tom Robinson, un hombre negro acusado de violar a una joven blanca. El argumento está narrado desde la perspectiva de su hija, Scout Finch.",
      image: LibroMatarAUnRuiseñor,
    },
    {
      id: 2,
      titulo: "El mundo de Sofía",
      contenido:
        "El mundo de Sofía (1991) es una novela escrita por Jostein Gaarder. Esta obra trata de responder a preguntas trascendentales como: ¿Quiénes somos? ¿Por qué estamos aquí? ¿Existe el libre albedrío o estamos determinados por el destino?",
      image: ElMundoDeSofia,
    },
    {
      id: 3,
      titulo: "Siddartha",
      contenido:
        "Esta novela, ambientada en la India tradicional, relata la vida de Siddhartha, un hombre para quien el camino de la verdad pasa por la renuncia y la comprensión de la unidad que subyace en todo lo existente. En sus páginas, el autor ofrece todas las opciones espirituales del hombre.",
      image: Siddartha,
    },
  ];

  return (
    <div>
      <h1 className="title-general">¡Haz click en cada libro!</h1>
      <ListaElementos elementos={elementos} />
    </div>
  );
}

export default App;
