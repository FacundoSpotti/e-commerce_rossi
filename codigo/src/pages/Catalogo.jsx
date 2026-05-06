import { useSearchParams } from "react-router";
import ProductCard from "../components/ProductCard";
import FiltroCategorias from "../components/FiltroCategorias";
import { productos } from "../data/productos";

function Catalogo({ onAgregar }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoriaActiva = searchParams.get("cat") || "todas";

  const cambiarCategoria = (cat) => {
    if (cat === "todas") {
      setSearchParams({});
    } else {
      setSearchParams({ cat });
    }
  };

  const filtrados =
    categoriaActiva === "todas"
      ? productos
      : productos.filter((p) => p.categoria === categoriaActiva);

  return (
    <>
      <section className="catalogo-cabecera">
        <p className="sobrelinea">Colección Rossi</p>
        <h1>Colección 2026</h1>
        <p className="subtitulo-grande">Piezas pensadas para durar</p>
        <p>
          Explorá carteras artesanales de cuero uruguayo hechas para acompañar
          la vida cotidiana con forma, funcionalidad y detalle.
        </p>
      </section>

      <div className="container">
        <FiltroCategorias
          activa={categoriaActiva}
          onCambiar={cambiarCategoria}
        />

        <div className="grid-productos">
          {filtrados.map((p) => (
            <ProductCard key={p.id} producto={p} onAgregar={onAgregar} />
          ))}
        </div>

        {filtrados.length === 0 && (
          <p style={{ textAlign: "center", color: "var(--gris-texto)", padding: "60px 0" }}>
            No hay productos en esta categoría todavía.
          </p>
        )}
      </div>
    </>
  );
}

export default Catalogo;
