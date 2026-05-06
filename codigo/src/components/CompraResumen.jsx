function CompraResumen({ compra, onVerDetalle }) {
  const claseEstado = {
    Entregado: "estado-entregado",
    "En preparación": "estado-preparacion",
    "En camino": "estado-camino",
  };

  return (
    <div className="perfil-pedido">
      <span>#{compra.numero}</span>
      <span>{compra.fecha}</span>
      <span className={`estado-badge ${claseEstado[compra.estado] || ""}`}>
        {compra.estado}
      </span>
      <span>${compra.total.toLocaleString("es-UY")}</span>
      <button type="button" onClick={() => onVerDetalle(compra.numero)}>
        Ver detalle →
      </button>
    </div>
  );
}

export default CompraResumen;
