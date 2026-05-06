import { Link, NavLink } from "react-router";
import Logo from "./Logo";

function Header({ carrito, usuarioActivo }) {
  const cantidad = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  const navClass = ({ isActive }) => (isActive ? "activo" : "");

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/">
          <Logo />
        </Link>

        <nav className="header-nav">
          <NavLink to="/" end className={navClass}>
            Home
          </NavLink>
          <NavLink to="/catalogo" className={navClass}>
            Catálogo
          </NavLink>
          <NavLink to="/perfil" className={navClass}>
            Perfil
          </NavLink>
          <NavLink to="/contacto" className={navClass}>
            Contacto
          </NavLink>
        </nav>

        <div className="header-acciones">
          {usuarioActivo ? (
            <Link to="/perfil" className="ingresar-link">
              Hola, {usuarioActivo.nombre.split(" ")[0]}
            </Link>
          ) : (
            <Link to="/login" className="ingresar-link">
              Ingresar
            </Link>
          )}
          <Link to="/carrito" className="carrito-icono" aria-label="Ver carrito">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {cantidad > 0 && <span className="carrito-badge">{cantidad}</span>}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
