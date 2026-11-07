// Barra de progreso: muestra el porcentaje y "X de Y"
function ProgressBar({ actual, total }) {
  const porcentaje = Math.round((actual / total) * 100);

  return (
    <div className="progreso">
      <div
        className="progreso-pista"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={porcentaje}
        aria-label="Progreso de las tarjetas"
      >
        <div className="progreso-relleno" style={{ width: `${porcentaje}%` }} />
      </div>
      <span className="progreso-porcentaje">{porcentaje}%</span>
      <span className="progreso-conteo">
        {actual} de {total}
      </span>
    </div>
  );
}

export default ProgressBar;
