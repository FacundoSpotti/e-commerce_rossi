//mapa
import {

  MapContainer,
  TileLayer,
  Marker, 
  Popup

} from "react-leaflet"

import "leaflet"
import L from "leaflet";
import "leaflet/dist/leaflet.css"

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function MapaPlaceholder() {
  return (
    <section className="mapa-bloque">
      <div>
        <p className="sobrelinea">Visitanos</p>
        <h2>Atención con cita previa</h2>
        <p>
          El taller se encuentra en Montevideo, Uruguay. Por respeto al espacio de
          trabajo de Verónica, las visitas se coordinan con cita previa por
          WhatsApp o correo.
        </p>
    </div>
    <MapContainer
      center={[-34.889791212111895, -56.18002935401105]}
      zoom={13}
      style={{
        height: "50vh",
        width: "100%",
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.stadiamaps.com/">Stadia Maps</a> 
        &copy; <a href="https://www.stamen.com/">Stamen Design</a> 
        &copy; OpenStreetMap contributors'
        url="https://tiles.stadiamaps.com/tiles/stamen_toner_lite/{z}/{x}/{y}{r}.png"
      />

        <Marker
          position={[-34.889791212111895, -56.18002935401105]}
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
