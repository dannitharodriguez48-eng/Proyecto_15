// Muestra la pregunta o la respuesta según el estado "mostrarRespuesta"
function Flashcard({ tarjeta, mostrarRespuesta }) {
  return (
    <div className="tarjeta" aria-live="polite">
      {mostrarRespuesta ? (
        <p className="tarjeta-respuesta">{tarjeta.respuesta}</p>
      ) : (
        <h2 className="tarjeta-pregunta">{tarjeta.pregunta}</h2>
      )}
    </div>
  );
}

export default Flashcard;
