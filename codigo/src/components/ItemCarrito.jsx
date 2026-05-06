function ItemCarrito({ item, onSumar, onRestar, onEliminar }) {
  return (
    <div className="item-carrito">
      <div className="item-carrito-img">
        <img src={item.imagen} alt={item.nombre} />
      </div>
      <div className="item-carrito-info">
        <h3>{item.nombre}</h3>
        <p className="item-carrito-descriptor">{item.descriptor}</p>
        <span className="producto-card-swatches">
          {item.swatches.map((color, i) => (
            <span key={i} className="swatch" style={{ background: color }} />
          ))}
        </span>
        <div className="item-carrito-controles">
          <button
            type="button"
            onClick={() => onRestar(item.id)}
            aria-label="Quitar uno"
          >
            −
          </button>
          <span>{item.cantidad}</span>
          <button
            type="button"
            onClick={() => onSumar(item.id)}
            aria-label="Sumar uno"
          >
            +
          </button>
        </div>
      </div>
      <span className="item-carrito-precio">
        ${(item.precio * item.cantidad).toLocaleString("es-UY")}
      </span>
      <button
        type="button"
        className="item-carrito-eliminar"
        onClick={() => onEliminar(item.id)}
        aria-label={`Eliminar ${item.nombre}`}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <line x1="6" y1="6" x2="18" y2="18" />
          <line x1="18" y1="6" x2="6" y2="18" />
        </svg>
      </button>
    </div>
  );
}

export default ItemCarrito;
