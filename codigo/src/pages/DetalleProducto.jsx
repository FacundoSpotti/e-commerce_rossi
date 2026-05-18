import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router";
import { productos } from "../data/productos";

const COLOR_NAMES = {
  "#0e0e0e": "Negro",
  "#3a2418": "Caoba",
  "#cdb89a": "Beige",
  "#5a3220": "Marrón",
  "#1f1410": "Vino",
  "#d4c5a5": "Arena",
  "#f4ede2": "Crema",
};

function DetalleProducto({ onAgregar }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const producto = productos.find((p) => String(p.id) === String(id));

  const [colorSeleccionado, setColorSeleccionado] = useState(null);

  useEffect(() => {
    if (producto) {
      setColorSeleccionado(producto.swatches[0]);
    }
  }, [producto]);

  if (!producto) {
    return (
      <div className="container pagina centrado">
        <h1 className="pagina-titulo">Producto no encontrado</h1>
        <p className="pagina-subtitulo">
          La pieza que buscás no está en la colección.
        </p>
        <Link to="/catalogo" className="btn">
          Volver al catálogo
        </Link>
      </div>
    );
  }

  const sinStock = producto.disponibilidad === "Sin stock";
  const mensajeWa = encodeURIComponent(
    `Hola Rossi, quería consultar por la ${producto.nombre}.`
  );

  const colorActual = colorSeleccionado || producto.swatches[0];

  const handleAgregar = () => {
    onAgregar({ ...producto, colorSeleccionado: colorActual });
    navigate("/carrito");
  };

  return (
    <div className="container detalle">
      <div className="detalle-imagen">
        <img src={producto.imagen} alt={producto.nombre} />
      </div>
      <div className="detalle-info">
        <p className="sobrelinea">{producto.categoria}</p>
        <h1>{producto.nombre}</h1>
        <p className="detalle-precio">
          ${producto.precio.toLocaleString("es-UY")}
        </p>
        <p className={`detalle-disponibilidad ${sinStock ? "sin-stock" : ""}`}>
          {producto.disponibilidad}
        </p>
        <p className="detalle-descripcion">{producto.descripcion}</p>

        <div className="detalle-bloque" style={{ borderBottom: "1px solid var(--gris-borde)", paddingBottom: "24px" }}>
          <h3>Seleccionar color</h3>
          <p style={{ fontSize: "13px", color: "var(--gris-texto)", marginBottom: "12px" }}>
            Variantes disponibles para esta pieza:
          </p>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {producto.swatches.map((color) => {
              const nombreColor = COLOR_NAMES[color.toLowerCase()] || "Color";
              const activo = color === colorActual;
              return (
                <button
                  key={color}
                  type="button"
                  className={`chip ${activo ? "activo" : ""}`}
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
                  onClick={() => setColorSeleccionado(color)}
                >
                  <span className="swatch" style={{ background: color, width: "12px", height: "12px", border: activo ? "1px solid #fff" : "1px solid var(--gris-borde)" }} />
                  {nombreColor}
                </button>
              );
            })}
          </div>
        </div>

        <div className="detalle-bloque">
          <h3>Materiales</h3>
          <p>{producto.materiales}</p>
        </div>
        <div className="detalle-bloque">
          <h3>Medidas</h3>
          <p>{producto.medidas}</p>
        </div>
        <div className="detalle-bloque">
          <h3>Qué entra</h3>
          <p>{producto.queEntra}</p>
        </div>
        <div className="detalle-bloque">
          <h3>Cuidado del cuero</h3>
          <p>{producto.cuidado}</p>
        </div>

        <div className="detalle-acciones">
          <button
            type="button"
            className="btn"
            onClick={handleAgregar}
            disabled={sinStock}
          >
            {sinStock ? "Sin stock" : "Agregar al carrito"}
          </button>
          <a
            className="whatsapp-link"
            href={`https://wa.me/59896585422?text=${mensajeWa}`}
            target="_blank"
            rel="noreferrer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.5 3.5A11 11 0 0 0 3.7 17.4L2 22l4.7-1.6a11 11 0 0 0 13.8-16.9ZM12 20.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.1-2.8 1 .9-2.7-.2-.3a8.2 8.2 0 1 1 6.6 3.3Zm4.5-6c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.7.9-.3.2-.5 0a6.7 6.7 0 0 1-2-1.3 7.5 7.5 0 0 1-1.4-1.7c-.1-.3 0-.4.1-.5l.4-.4a1.5 1.5 0 0 0 .2-.4.4.4 0 0 0 0-.4l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.4a.8.8 0 0 0-.6.3 2.5 2.5 0 0 0-.8 1.9c0 1.1.8 2.2 1 2.4s1.6 2.5 4 3.5a13.5 13.5 0 0 0 1.3.5 3.2 3.2 0 0 0 1.5.1 2.4 2.4 0 0 0 1.6-1.1 2 2 0 0 0 .1-1.1c0-.1-.2-.2-.4-.3Z" />
            </svg>
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export default DetalleProducto;
