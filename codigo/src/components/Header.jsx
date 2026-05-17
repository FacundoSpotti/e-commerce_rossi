import { useState } from "react";
import { Link, useNavigate } from "react-router";
import Logo from "./Logo";
import MenuLateral from "./MenuLateral";

function Header({ carrito, usuarioActivo, queryBusqueda, onCambiarBusqueda }) {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [buscarAbierto, setBuscarAbierto] = useState(false);
  const navigate = useNavigate();

  const cantidad = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  const abrirBuscar = () => {
    setBuscarAbierto((v) => !v);
  };

  const handleBuscarSubmit = (e) => {
    e.preventDefault();
    setBuscarAbierto(false);
    navigate("/catalogo");
  };

  const handleBuscarChange = (e) => {
    const valor = e.target.value;
    onCambiarBusqueda(valor);
    if (valor && window.location.pathname !== "/catalogo") {
      navigate("/catalogo");
    }
  };

  return (
    <>
      <header className="header">
        <div className="header-inner">
          <div className="header-izquierda">
            <button
              type="button"
              className="header-trigger"
              onClick={() => setMenuAbierto(true)}
              aria-label="Abrir menú"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
              Menú
            </button>
            <button
              type="button"
              className="header-trigger"
              onClick={abrirBuscar}
              aria-label="Buscar"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                <circle cx="11" cy="11" r="7" />
                <line x1="20" y1="20" x2="16.5" y2="16.5" />
              </svg>
              Buscar
            </button>
          </div>

          <Link to="/" className="header-logo">
            <Logo />
          </Link>

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

        {buscarAbierto && (
          <form className="header-buscar" onSubmit={handleBuscarSubmit}>
            <div className="header-buscar-inner">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                <circle cx="11" cy="11" r="7" />
                <line x1="20" y1="20" x2="16.5" y2="16.5" />
              </svg>
              <input
                type="text"
                placeholder="Buscar piezas, nombres, colección..."
                value={queryBusqueda}
                onChange={handleBuscarChange}
                autoFocus
              />
              <button
                type="button"
                className="header-buscar-cerrar"
                onClick={() => {
                  onCambiarBusqueda("");
                  setBuscarAbierto(false);
                }}
                aria-label="Cerrar búsqueda"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                  <line x1="5" y1="5" x2="19" y2="19" />
                  <line x1="19" y1="5" x2="5" y2="19" />
                </svg>
              </button>
            </div>
          </form>
        )}
      </header>

      <MenuLateral
        abierto={menuAbierto}
        onCerrar={() => setMenuAbierto(false)}
        usuarioActivo={usuarioActivo}
      />
    </>
  );
}

export default Header;
