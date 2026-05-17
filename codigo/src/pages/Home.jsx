import { Link } from "react-router";
import ProductCard from "../components/ProductCard";
import MapaPlaceholder from "../components/MapaPlaceholder";
import { productos } from "../data/productos";
import tallerImg from "../assets/taller.jpg";
import catGrandes from "../assets/categorias/grandes.jpg";
import catMedianos from "../assets/categorias/medianos.jpg";
import catChicos from "../assets/categorias/chicos.jpg";
import catMochilas from "../assets/categorias/mochilas.jpg";
import { useScrollReveal } from "../hooks/useScrollReveal";

const categoriasGrid = [
  { nombre: "Bolsos medianos", imagen: catMedianos, ruta: "/catalogo?cat=Bolsos+medianos" },
  { nombre: "Mochilas", imagen: catMochilas, ruta: "/catalogo?cat=Mochilas" },
  { nombre: "Bolsos grandes", imagen: catGrandes, ruta: "/catalogo?cat=Bolsos+grandes" },
  { nombre: "Bolsos chicos", imagen: catChicos, ruta: "/catalogo?cat=Bolsos+chicos" },
];

function Home({ onAgregar }) {
  const destacados = productos.slice(0, 4);
  const [heroRef, heroVisible] = useScrollReveal();
  const [bandaRef, bandaVisible] = useScrollReveal();
  const [seccionRef, seccionVisible] = useScrollReveal();
  const [tallerRef, tallerVisible] = useScrollReveal();

  return (
    <>
      <section className="hero">
        <div
          ref={heroRef}
          className={`hero-texto reveal ${heroVisible ? "reveal-in" : ""}`}
        >
          <p className="sobrelinea">Cuero uruguayo hecho a mano</p>
          <h1>Hecho a mano</h1>
          <p className="hero-bajada">
            En Uruguay, con cuero seleccionado y terminaciones cuidadas. Piezas
            artesanales que acompañan la vida real con belleza, orden y duración.
          </p>
          <div className="hero-ctas">
            <Link to="/catalogo" className="btn">
              Ver colección
            </Link>
            <Link to="/#taller" className="link-subrayado">
              Conocé el taller
            </Link>
          </div>
        </div>
      </section>

      <section className="banda">
        <div className="banda-foto" style={{ backgroundImage: `url(${tallerImg})` }} />
        <div
          ref={bandaRef}
          className={`banda-texto reveal ${bandaVisible ? "reveal-in" : ""}`}
        >
          <p className="banda-cita">
            “Piezas artesanales creadas por Verónica Rossi para acompañar la
            vida real con belleza, orden y duración.”
          </p>
          <div className="banda-ctas">
            <Link to="/#taller" className="link-blanco">
              Conocé el taller
            </Link>
            <Link to="/catalogo" className="btn">
              Ver colección
            </Link>
          </div>
        </div>
      </section>

      <div className="container">
        <h2
          ref={seccionRef}
          className={`seccion-titulo reveal ${seccionVisible ? "reveal-in" : ""}`}
        >
          Selección destacada
        </h2>
        <p className="seccion-bajada">
          Modelos elegidos por su carácter, su practicidad y la forma en que
          acompañan todos los días.
        </p>
        <div className="grid-productos">
          {destacados.map((p) => (
            <ProductCard key={p.id} producto={p} onAgregar={onAgregar} />
          ))}
        </div>
      </div>

      <div className="grid-categorias">
        {categoriasGrid.map((cat) => (
          <Link key={cat.nombre} to={cat.ruta} className="categoria-card">
            <div
              className="categoria-card-foto"
              style={{ backgroundImage: `url(${cat.imagen})` }}
            />
            <div className="categoria-card-overlay" />
            <span className="categoria-card-titulo">{cat.nombre}</span>
          </Link>
        ))}
      </div>

      <div className="container">
        <section
          id="taller"
          ref={tallerRef}
          className={`institucional reveal ${tallerVisible ? "reveal-in" : ""}`}
        >
          <p className="sobrelinea">Nuestro taller</p>
          <h2>Diez años haciendo piezas con tiempo, oficio y precisión</h2>
          <p>
            ROSSI es el taller de Verónica Rossi, una artesana uruguaya que
            entiende el diseño desde la vida cotidiana. Cada cartera se realiza
            con materia prima nacional, una mirada casual del diseño y una
            atención minuciosa por cada terminación.
          </p>
        </section>

        <MapaPlaceholder />
      </div>
    </>
  );
}

export default Home;
