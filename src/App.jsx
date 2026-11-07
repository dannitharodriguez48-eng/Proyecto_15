import { useState } from "react";
import { flashcards } from "./data/flashcards";
import ProgressBar from "./components/ProgressBar";
import Flashcard from "./components/Flashcard";
import Controls from "./components/Controls";

function App() {
  const [indice, setIndice] = useState(0);
  const [mostrarRespuesta, setMostrarRespuesta] = useState(false);

  const total = flashcards.length;
  const tarjetaActual = flashcards[indice];

  function irSiguiente() {
    if (indice < total - 1) {
      setIndice(indice + 1);
      setMostrarRespuesta(false);
    }
  }

  function irAnterior() {
    if (indice > 0) {
      setIndice(indice - 1);
      setMostrarRespuesta(false);
    }
  }

  function voltear() {
    setMostrarRespuesta(!mostrarRespuesta);
  }

  return (
    <main className="app">
      <h1 className="titulo">Flash Cards</h1>
      <p className="descripcion">Repasa conceptos básicos de desarrollo web.</p>

      <ProgressBar actual={indice + 1} total={total} />

      <section className="contenedor-tarjeta">
        <Flashcard
          tarjeta={tarjetaActual}
          mostrarRespuesta={mostrarRespuesta}
        />
        <Controls
          mostrarRespuesta={mostrarRespuesta}
          onAnterior={irAnterior}
          onSiguiente={irSiguiente}
          onVoltear={voltear}
          esPrimera={indice === 0}
          esUltima={indice === total - 1}
        />
      </section>
    </main>
  );
}

export default App;
