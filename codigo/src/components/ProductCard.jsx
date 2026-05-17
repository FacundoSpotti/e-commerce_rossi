import { useState } from "react";
import { Link } from "react-router";

function ProductCard({ producto, onAgregar }) {
  const [pulse, setPulse] = useState(false);

  const sinStock = producto.disponibilidad === "Sin stock";

  const badgeClase = {
    OFERTA: "badge-oferta",
    NUEVO: "badge-nuevo",
    "SOLD OUT": "badge-soldout",
  };

  const handleAgregar = (e) => {
    e.preventDefault();
    if (sinStock) return;
    onAgregar(producto);
    setPulse(true);
    setTimeout(() => setPulse(false), 600);
  };

  return (
    <article className="producto-card">
      <Link to={`/producto/${producto.id}`} className="producto-card-imagen">
        <img src={producto.imagen} alt={producto.nombre} />
        <span className="producto-card-categoria">{producto.categoria}</span>
        <button
          type="button"
          className={`producto-card-add ${pulse ? "pulse" : ""}`}
          onClick={handleAgregar}
          aria-label={`Agregar ${producto.nombre} al carrito`}
          disabled={sinStock}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
            <path d="M3 6h18" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
        </button>
        {producto.badge && (
          <span className={`producto-card-badge ${badgeClase[producto.badge] || ""}`}>
            {producto.badge}
          </span>
        )}
      </Link>
      <div className="producto-card-info">
        <Link to={`/producto/${producto.id}`} className="producto-card-nombre">
          {producto.nombre}
        </Link>
        <span className="producto-card-descriptor">{producto.descriptor}</span>
        <div className="producto-card-bottom">
          <span className="producto-card-precio">${producto.precio.toLocaleString("es-UY")}</span>
          <span className="producto-card-swatches">
            {producto.swatches.map((color, i) => (
              <span key={i} className="swatch" style={{ background: color }} />
            ))}
          </span>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
