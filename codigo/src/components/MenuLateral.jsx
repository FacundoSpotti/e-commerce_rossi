import { NavLink } from "react-router";

function MenuLateral({ abierto, onCerrar, usuarioActivo }) {
  const handleClickLink = () => onCerrar();

  return (
    <>
      <div
        className={`menu-backdrop ${abierto ? "abierto" : ""}`}
        onClick={onCerrar}
        aria-hidden="true"
      />
      <aside
        className={`menu-lateral ${abierto ? "abierto" : ""}`}
        aria-hidden={!abierto}
      >
        <div className="menu-lateral-top">
          <button
            type="button"
            className="menu-lateral-cerrar"
            onClick={onCerrar}
            aria-label="Cerrar menú"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
              <line x1="5" y1="5" x2="19" y2="19" />
              <line x1="19" y1="5" x2="5" y2="19" />
            </svg>
            Cerrar
          </button>
        </div>

        <nav className="menu-lateral-nav">
          <NavLink to="/" end onClick={handleClickLink}>
            Home
          </NavLink>
          <NavLink to="/catalogo" onClick={handleClickLink}>
            Catálogo
          </NavLink>
          <NavLink to="/catalogo?cat=Mochilas" onClick={handleClickLink}>
            Mochilas
          </NavLink>
          <NavLink
            to="/catalogo?cat=Bolsos+grandes"
            onClick={handleClickLink}
          >
            Bolsos grandes
          </NavLink>
          <NavLink
            to="/catalogo?cat=Bolsos+chicos"
            onClick={handleClickLink}
          >
            Bolsos chicos
          </NavLink>
          <NavLink to="/#taller" onClick={handleClickLink}>
            Nuestro taller
          </NavLink>
          <NavLink to="/contacto" onClick={handleClickLink}>
            Contacto
          </NavLink>
        </nav>

        <div className="menu-lateral-pie">
          <NavLink to="/perfil" onClick={handleClickLink}>
            {usuarioActivo ? "Mi cuenta" : "Ingresar"}
          </NavLink>
          <NavLink to="/carrito" onClick={handleClickLink}>
            Carrito
          </NavLink>
        </div>
      </aside>
    </>
  );
}

export default MenuLateral;
