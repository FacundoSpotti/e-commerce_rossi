import { useState } from "react";
import { Link } from "react-router";
import CompraResumen from "../components/CompraResumen";
import ProductCard from "../components/ProductCard";
import { compras as comprasIniciales, favoritos as favoritosIds } from "../data/compras";
import { productos } from "../data/productos";
import { usuario as usuarioFijo } from "../data/usuario";

function Perfil({ usuarioActivo, comprasUsuario, onAgregar }) {
  const [detalleAbierto, setDetalleAbierto] = useState(null);

  const usuario = usuarioActivo || usuarioFijo;
  const compras = [...(comprasUsuario || []), ...comprasIniciales];

  const favoritos = favoritosIds
    .map((id) => productos.find((p) => p.id === id))
    .filter(Boolean);

  const verDetalle = (numero) => {
    setDetalleAbierto((actual) => (actual === numero ? null : numero));
  };

  return (
    <div className="container pagina">
      <p className="sobrelinea">Mi cuenta</p>
      <h1 className="pagina-titulo">Mi perfil</h1>
      <p className="pagina-subtitulo">
        Todo lo importante, en un solo lugar. Desde acá podés seguir tus
        pedidos, revisar tus datos y volver a ver las piezas que guardaste.
      </p>

      <section className="perfil-seccion">
        <div className="perfil-seccion-cabecera">
          <h2>Información personal</h2>
          <a href="#editar">Editar</a>
        </div>
        <div className="perfil-info">
          <div className="perfil-info-bloque">
            <p className="perfil-info-label">Nombre</p>
            <p className="perfil-info-valor">{usuario.nombre}</p>
          </div>
          <div className="perfil-info-bloque">
            <p className="perfil-info-label">Email</p>
            <p className="perfil-info-valor">{usuario.email}</p>
          </div>
          <div className="perfil-info-bloque">
            <p className="perfil-info-label">Dirección</p>
            <p className="perfil-info-valor">{usuario.direccion}</p>
          </div>
        </div>
      </section>

      <section className="perfil-seccion">
        <div className="perfil-seccion-cabecera">
          <h2>Mis pedidos</h2>
        </div>
        {compras.length === 0 ? (
          <p style={{ color: "var(--gris-texto)" }}>
            Todavía no tenés pedidos. Cuando una pieza te encuentre, la vas a
            ver acá.
          </p>
        ) : (
          compras.map((compra) => (
            <div key={compra.numero}>
              <CompraResumen compra={compra} onVerDetalle={verDetalle} />
              {detalleAbierto === compra.numero && (
                <div
                  style={{
                    background: "var(--crema-card)",
                    padding: "20px 24px",
                    border: "1px solid var(--gris-borde)",
                    marginTop: "-1px",
                    marginBottom: "8px",
                  }}
                >
                  <p
                    style={{
                      fontSize: 11,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "var(--gris-texto)",
                      marginBottom: 10,
                    }}
                  >
                    Detalle del pedido
                  </p>
                  {compra.items.map((it) => (
                    <div
                      key={it.id}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "6px 0",
                        fontSize: 14,
                      }}
                    >
                      <span>
                        {it.nombre} × {it.cantidad}
                      </span>
                      <span>
                        ${(it.precio * it.cantidad).toLocaleString("es-UY")}
                      </span>
                    </div>
                  ))}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "12px 0 0",
                      borderTop: "1px solid var(--gris-borde)",
                      marginTop: 8,
                      fontWeight: 600,
                    }}
                  >
                    <span>Total</span>
                    <span>${compra.total.toLocaleString("es-UY")}</span>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </section>

      <section className="perfil-seccion">
        <div className="perfil-seccion-cabecera">
          <h2>Favoritos</h2>
          <Link to="/catalogo">Ver catálogo</Link>
        </div>
        <div className="perfil-favoritos">
          {favoritos.map((p) => (
            <ProductCard key={p.id} producto={p} onAgregar={onAgregar} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Perfil;
