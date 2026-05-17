import MapaPlaceholder from "../components/MapaPlaceholder";
import { useScrollReveal } from "../hooks/useScrollReveal";

function Contacto() {
  const [cabeceraRef, cabeceraVisible] = useScrollReveal();
  const [datosRef, datosVisible] = useScrollReveal();

  return (
    <div className="container pagina centrado">
      <div
        ref={cabeceraRef}
        className={`reveal ${cabeceraVisible ? "reveal-in" : ""}`}
      >
        <p className="sobrelinea">Contacto</p>
        <h1 className="pagina-titulo">Hablamos con calma</h1>
        <p className="pagina-subtitulo">
          Para consultas sobre piezas, pedidos a medida o coordinar una visita al
          taller, escribinos por WhatsApp o correo. Respondemos en horario de
          taller, con la misma atención con la que trabajamos cada cuero.
        </p>
      </div>

      <div
        ref={datosRef}
        className={`contacto-datos reveal ${datosVisible ? "reveal-in" : ""}`}
      >
        <div className="contacto-dato">
          <p className="sobrelinea">WhatsApp</p>
          <p className="contacto-valor">598 96 585 422</p>
        </div>
        <div className="contacto-dato">
          <p className="sobrelinea">Correo</p>
          <p className="contacto-valor">a.rossi@adinet.com.uy</p>
        </div>
      </div>

      <MapaPlaceholder />
    </div>
  );
}

export default Contacto;
