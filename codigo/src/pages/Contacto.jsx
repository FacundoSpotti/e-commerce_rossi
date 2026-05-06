import MapaPlaceholder from "../components/MapaPlaceholder";

function Contacto() {
  return (
    <div className="container pagina centrado">
      <p className="sobrelinea">Contacto</p>
      <h1 className="pagina-titulo">Hablamos con calma</h1>
      <p className="pagina-subtitulo">
        Para consultas sobre piezas, pedidos a medida o coordinar una visita al
        taller, escribinos por WhatsApp o correo. Respondemos en horario de
        taller, con la misma atención con la que trabajamos cada cuero.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 32,
          maxWidth: 720,
          margin: "0 auto 30px",
          textAlign: "left",
        }}
      >
        <div>
          <p className="sobrelinea" style={{ marginBottom: 6 }}>
            WhatsApp
          </p>
          <p>+598 99 999 999</p>
        </div>
        <div>
          <p className="sobrelinea" style={{ marginBottom: 6 }}>
            Correo
          </p>
          <p>hola@rossi.com.uy</p>
        </div>
      </div>

      <MapaPlaceholder />
    </div>
  );
}

export default Contacto;
