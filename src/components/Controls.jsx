// Botones: Anterior / Mostrar-Ocultar respuesta / Siguiente
function Controls({
  mostrarRespuesta,
  onAnterior,
  onSiguiente,
  onVoltear,
  esPrimera,
  esUltima,
}) {
  return (
    <div className="controles">
      <button
        className="boton"
        onClick={onAnterior}
        disabled={esPrimera}
      >
        ‹ Anterior
      </button>

      <button className="boton boton-voltear" onClick={onVoltear}>
        {mostrarRespuesta ? "Ocultar respuesta" : "Mostrar respuesta"}
      </button>

      <button
        className="boton"
        onClick={onSiguiente}
        disabled={esUltima}
      >
        Siguiente ›
      </button>
    </div>
  );
}

export default Controls;
