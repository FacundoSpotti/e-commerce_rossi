import { Link, useNavigate } from "react-router";
import ItemCarrito from "../components/ItemCarrito";
import ResumenPedido from "../components/ResumenPedido";

function Carrito({ carrito, onSumar, onRestar, onEliminar }) {
  const navigate = useNavigate();

  if (carrito.length === 0) { //si el carrito esta vacio, muestra un mensaje de que esta vacio
    return (
      <div className="container carrito-vacio">
        <p className="sobrelinea">Carrito</p>
        <h2>Tu carrito está vacío</h2>
        <p>Cuando una pieza te encuentre, la vas a ver acá.</p>
        <Link to="/catalogo" className="btn">
          Explorar la colección
        </Link>
      </div>
    );
  }

  return (
    <div className="container pagina">
      <p className="sobrelinea">Carrito</p>
      <h1 className="pagina-titulo">Revisá tu selección</h1>
      <p className="pagina-subtitulo">
        Antes de avanzar, confirmá cada pieza y ajustá lo que necesites con
        calma.
      </p>

      <div className="carrito-layout">
        <div className="carrito-items">
          {carrito.map((item) => (
            <ItemCarrito
              key={item.id}
              item={item}
              onSumar={onSumar}
              onRestar={onRestar}
              onEliminar={onEliminar}
            />
          ))}
        </div>
        <ResumenPedido
          carrito={carrito}
          etiquetaBoton="Finalizar compra"
          onAccion={() => navigate("/finalizar-compra")}
        />
      </div>

      <div style={{ marginTop: "32px", textAlign: "center" }}>
        <Link to="/catalogo" className="btn btn-outline">
          Seguir comprando
        </Link>
      </div>
    </div>
  );
}

export default Carrito;
