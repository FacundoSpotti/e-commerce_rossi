import { Link, useSearchParams } from "react-router";

function CompraConfirmada() {
  const [params] = useSearchParams();
  const numero = params.get("nro") || "R-1099";

  return (
    <div className="container confirmada">
      <p className="sobrelinea">Compra confirmada</p>
      <h1>Gracias por elegir ROSSI</h1>
      <p style={{ color: "var(--gris-texto)", lineHeight: 1.65 }}>
        Tu pedido fue realizado con éxito. Ahora sigue nuestro trabajo:
        prepararlo con la misma atención con la que hacemos cada pieza.
      </p>

      <div className="confirmada-detalles">
        <div>
          <span>Número de pedido</span>
          <span>#{numero}</span>
        </div>
        <div>
          <span>Estado</span>
          <span>En preparación</span>
        </div>
        <div>
          <span>Confirmación</span>
          <span>Te enviamos un correo a tu casilla</span>
        </div>
      </div>

      <div className="confirmada-acciones">
        <Link to="/catalogo" className="btn btn-outline">
          Seguir comprando
        </Link>
        <Link to="/perfil" className="btn">
          Ver mi pedido
        </Link>
      </div>
    </div>
  );
}

export default CompraConfirmada;
