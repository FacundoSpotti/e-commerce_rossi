const ENVIO = 250;

function ResumenPedido({ carrito, etiquetaBoton = "Finalizar compra", onAccion }) {
  const subtotal = carrito.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );
  const total = subtotal + ENVIO;

  return (
    <aside className="resumen">
      <h3>Resumen</h3>
      <div className="resumen-fila">
        <span>Subtotal</span>
        <span>${subtotal.toLocaleString("es-UY")}</span>
      </div>
      <div className="resumen-fila">
        <span>Envío</span>
        <span>${ENVIO}</span>
      </div>
      <div className="resumen-total">
        <span>Total</span>
        <span>${total.toLocaleString("es-UY")}</span>
      </div>
      <button
        type="button"
        className="btn btn-block"
        onClick={onAccion}
        disabled={carrito.length === 0}
      >
        {etiquetaBoton}
      </button>
    </aside>
  );
}

export default ResumenPedido;
