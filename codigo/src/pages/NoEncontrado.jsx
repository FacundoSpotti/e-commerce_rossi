import { Link } from "react-router";

function NoEncontrado() {
  return (
    <div className="container no-encontrado">
      <p className="sobrelinea">Página no encontrada</p>
      <h1>404</h1>
      <p>La pieza que buscás no está en esta colección.</p>
      <Link to="/" className="btn">
        Volver al inicio
      </Link>
    </div>
  );
}

export default NoEncontrado;
