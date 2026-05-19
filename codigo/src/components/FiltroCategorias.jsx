import { categorias } from "../data/categorias";

function FiltroCategorias({ activa, onCambiar }) {
  return (

    <div className="catalogo-filtros"> //se crea el titulo con un icono svg que tiene tres lineas horizontales, una debajo de la otra, simulando un menu de hamburguesa
     
      <span className="catalogo-filtros-label"> 
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="6" y1="12" x2="18" y2="12" />
          <line x1="9" y1="18" x2="15" y2="18" />
        </svg>
        Filtros
      </span>

      <button
        type="button"
        className={`chip ${activa === "todas" ? "activo" : ""}`}
        onClick={() => onCambiar("todas")}
      >
        Todas
      </button>

      {categorias.map((cat) => (

        <button
          key={cat}
          type="button"
          className={`chip ${activa === cat ? "activo" : ""}`}
          onClick={() => onCambiar(cat)}
        >
          {cat}
        </button>

      ))}
    </div>
  );
}

export default FiltroCategorias;
