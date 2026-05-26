import { useState, useEffect } from "react";
import { Link } from "react-router";
import ProductCard from "../components/ProductCard";
import MapaPlaceholder from "../components/MapaPlaceholder";
import { productos } from "../data/productos";

import filtroMochilas from "../assets/categorias/filtro (2).png";
import filtroGrandes from "../assets/categorias/filtro (3).png";
import filtroChicos from "../assets/categorias/filtro (4).png";
import stock1 from "../assets/stock/stock (1).jpg";
import stock2 from "../assets/stock/stock (2).jpg";
import stock3 from "../assets/stock/stock (3).jpg";
import banda from "../assets/stock/banda.png";

import { useScrollReveal } from "../hooks/useScrollReveal";

const categoriasGrid = [
  { nombre: "Mochilas", imagen: filtroMochilas, ruta: "/catalogo?cat=Mochilas" },
  { nombre: "Bolsos grandes", imagen: filtroGrandes, ruta: "/catalogo?cat=Bolsos+grandes" },
  { nombre: "Bolsos chicos", imagen: filtroChicos, ruta: "/catalogo?cat=Bolsos+chicos" },
];

function Home({ onAgregar }) {
  const destacados = productos.slice(0, 4);
  const [heroRef, heroVisible] = useScrollReveal();
  const [bandaRef, bandaVisible] = useScrollReveal();
  const [seccionRef, seccionVisible] = useScrollReveal();
  const [tallerRef, tallerVisible] = useScrollReveal();

  const [bgIndex, setBgIndex] = useState(0);
  const heroBgs = [stock1, stock2, stock3];

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % heroBgs.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="hero" style={{ position: "relative", overflow: "hidden" }}>
        {heroBgs.map((bg, i) => (
          <div
            key={bg}
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url("${bg}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: i === bgIndex ? 0.5 : 0,
              transition: "opacity 1.5s ease-in-out",
              zIndex: 1,
            }}  
          />
        ))}

        <div
          ref={heroRef}
          className={`hero-texto reveal ${heroVisible ? "reveal-in" : ""}`}
          style={{ position: "relative", zIndex: 2 }}
        >
          <p className="sobrelinea" style={{ color: "var(--crema)" }}>Cuero uruguayo Trabajado a Mano</p>
          <h1 style={{ color: "var(--crema)" }}>Hecho a mano</h1>
          <p className="hero-bajada" style={{ color: "var(--crema)" }}>
            En Uruguay, con cuero seleccionado y terminaciones cuidadas. Piezas
            artesanales que acompañan la vida real con belleza, orden y duración.
          </p>
          <div className="hero-ctas">
            <Link to="/catalogo" className="btn-crema">
              Ver colección
            </Link>
          </div>
        </div>
      </section>

      <section className="banda">
        <div className="banda-foto" style={{ backgroundImage: `url("${banda}")` }} />
        <div
          ref={bandaRef}
          className={`banda-texto reveal ${bandaVisible ? "reveal-in" : ""}`}
        >
          <p className="banda-cita">
            “Piezas artesanales creadas por Verónica Rossi para acompañar la
            vida real con belleza, orden y duración.”
          </p>
          <div className="banda-ctas">
            <Link to="/#taller" className="btn">
              Conocé el taller
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
              style={{ backgroundImage: `url("${cat.imagen}")` }}
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
          style={{paddingBottom: "0px"}}
        >
          <p className="sobrelinea">Nuestro taller</p>
          <h2>Diez años haciendo piezas con tiempo, oficio y precisión</h2>
          <p>
            ROSSI es el taller de Verónica Rossi, una artesana uruguaya que
            entiende el diseño desde la vida cotidiana. Ubicado en el histórico barrio de La Aguada, cada cartera se realiza con materia prima nacional, una mirada casual del diseño y una atención minuciosa por cada terminación. Recibimos visitas con reserva previa para conocer el espacio y las piezas en persona.
          </p>
        </section>

        <MapaPlaceholder />
      </div>
    </>
  );
}

export default Home;
