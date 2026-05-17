import { useSearchParams } from "react-router";
import ProductCard from "../components/ProductCard";
import FiltroCategorias from "../components/FiltroCategorias";
import { productos } from "../data/productos";
import { useScrollReveal } from "../hooks/useScrollReveal";

function Catalogo({ onAgregar, queryBusqueda }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoriaActiva = searchParams.get("cat") || "todas";
  const [cabeceraRef, cabeceraVisible] = useScrollReveal();

  const cambiarCategoria = (cat) => {
    if (cat === "todas") {
      setSearchParams({});
    } else {
      setSearchParams({ cat });
    }
  };

  const query = (queryBusqueda || "").trim().toLowerCase();

  const filtrados = productos
    .filter((p) =>
      categoriaActiva === "todas" ? true : p.categoria === categoriaActiva
    )
    .filter((p) => {
      if (!query) return true;
      return (
        p.nombre.toLowerCase().includes(query) ||
        p.categoria.toLowerCase().includes(query) ||
        (p.descriptor || "").toLowerCase().includes(query)
      );
    });

  return (
    <>
      <section
        ref={cabeceraRef}
        className={`catalogo-cabecera reveal ${cabeceraVisible ? "reveal-in" : ""}`}
      >
        <p className="sobrelinea">Colección Rossi</p>
        <h1>Colección 2026</h1>
        <p className="subtitulo-grande">Piezas pensadas para durar</p>
        <p>
          Explorá carteras artesanales de cuero uruguayo hechas para acompañar
          la vida cotidiana con forma, funcionalidad y detalle.
        </p>
      </section>

      <div className="filtros-bleed">
        <FiltroCategorias
          activa={categoriaActiva}
          onCambiar={cambiarCategoria}
        />
      </div>

      <div className="container">
        {query && (
          <p className="catalogo-info-busqueda">
            Mostrando resultados para "{queryBusqueda}"
          </p>
        )}

        <div className="grid-productos">
          {filtrados.map((p) => (
            <ProductCard key={p.id} producto={p} onAgregar={onAgregar} />
          ))}
        </div>

        {filtrados.length === 0 && (
          <p className="catalogo-sin-resultados">
            No hay productos en esta categoría todavía.
          </p>
        )}
      </div>
    </>
  );
}

export default Catalogo;
