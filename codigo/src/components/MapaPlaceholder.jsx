//mapa
import {

  MapContainer,
  TileLayer,
  Marker, 
  Popup

} from "react-leaflet"

import "leaflet"
import "leaflet/dist/leaflet.css"

function MapaPlaceholder() {
  return (
    <section className="mapa-bloque">
      <p className="sobrelinea">Visitanos</p>
      <h2>Atención con cita previa</h2>
      <p>
        El taller se encuentra en Montevideo, Uruguay. Por respeto al espacio de
        trabajo de Verónica, las visitas se coordinan con cita previa por
        WhatsApp o correo.
      </p>

    <MapContainer
      center={[-34.889791212111895, -56.18002935401105]}
      zoom={13}
      style={{
        height: "100vh",
        width: "100%",
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

        <Marker
          position={[-34.88, -56.18]}
          opacity={0.5}
          title="Taller de Rossi"
          zIndexOffset={1000}
          riseOnHover={true}
        >

        <Popup>
          <h2>Rossi</h2>
          <p>Tienda de carteras</p>
        </Popup>

        </Marker>

    </MapContainer>

    </section>
  );
  
}

export default MapaPlaceholder;
