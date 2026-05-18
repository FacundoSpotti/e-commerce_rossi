import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Catalogo from "./pages/Catalogo";
import DetalleProducto from "./pages/DetalleProducto";
import Carrito from "./pages/Carrito";
import FinalizarCompra from "./pages/FinalizarCompra";
import CompraConfirmada from "./pages/CompraConfirmada";
import Perfil from "./pages/Perfil";
import Contacto from "./pages/Contacto";
import NoEncontrado from "./pages/NoEncontrado";

import { usuario as usuarioFijo } from "./data/usuario";

function App() {
  const [carrito, setCarrito] = useState([]);
  const [usuarioActivo, setUsuarioActivo] = useState(null);
  const [comprasUsuario, setComprasUsuario] = useState([]);
  const [queryBusqueda, setQueryBusqueda] = useState("");

  const agregarAlCarrito = (producto) => {
    setCarrito((actual) => {
      const colorSeleccionado = producto.colorSeleccionado || producto.swatches[0];
      const cartId = `${producto.id}-${colorSeleccionado}`;
      const existente = actual.find((it) => (it.cartId || `${it.id}-${it.colorSeleccionado || it.swatches[0]}`) === cartId);
      if (existente) {
        return actual.map((it) =>
          (it.cartId || `${it.id}-${it.colorSeleccionado || it.swatches[0]}`) === cartId ? { ...it, cantidad: it.cantidad + 1 } : it
        );
      }
      return [
        ...actual,
        {
          id: producto.id,
          cartId,
          nombre: producto.nombre,
          precio: producto.precio,
          imagen: producto.imagen,
          descriptor: producto.descriptor,
          swatches: producto.swatches,
          colorSeleccionado,
          cantidad: 1,
        },
      ];
    });
  };

  const sumarItem = (idOrCartId) => {
    setCarrito((actual) =>
      actual.map((it) =>
        (it.cartId === idOrCartId || it.id === idOrCartId) ? { ...it, cantidad: it.cantidad + 1 } : it
      )
    );
  };

  const restarItem = (idOrCartId) => {
    setCarrito((actual) =>
      actual
        .map((it) =>
          (it.cartId === idOrCartId || it.id === idOrCartId) ? { ...it, cantidad: it.cantidad - 1 } : it
        )
        .filter((it) => it.cantidad > 0)
    );
  };

  const eliminarItem = (idOrCartId) => {
    setCarrito((actual) => actual.filter((it) => it.cartId !== idOrCartId && it.id !== idOrCartId));
  };

  const ingresarUsuario = (email, nombre) => {
    setUsuarioActivo({
      nombre: nombre || usuarioFijo.nombre,
      email: email || usuarioFijo.email,
      direccion: usuarioFijo.direccion,
    });
  };

  const confirmarCompra = (datos) => {
    const numero = `R-${Math.floor(1100 + Math.random() * 900)}`;
    const subtotal = carrito.reduce(
      (acc, it) => acc + it.precio * it.cantidad,
      0
    );
    const nuevaCompra = {
      numero,
      fecha: new Date().toLocaleDateString("es-UY"),
      estado: "En preparación",
      items: carrito.map((it) => ({
        id: it.id,
        nombre: it.nombre,
        precio: it.precio,
        cantidad: it.cantidad,
      })),
      total: subtotal + 250,
    };
    setComprasUsuario((actual) => [nuevaCompra, ...actual]);
    setCarrito([]);
    if (!usuarioActivo) {
      setUsuarioActivo({
        nombre: datos.nombre,
        email: datos.email,
        direccion: datos.direccion,
      });
    }
    return numero;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <Layout
              carrito={carrito}
              usuarioActivo={usuarioActivo}
              queryBusqueda={queryBusqueda}
              onCambiarBusqueda={setQueryBusqueda}
            />
          }
        >
          <Route path="/" element={<Home onAgregar={agregarAlCarrito} />} />
          <Route
            path="/catalogo"
            element={
              <Catalogo
                onAgregar={agregarAlCarrito}
                queryBusqueda={queryBusqueda}
              />
            }
          />
          <Route
            path="/producto/:id"
            element={<DetalleProducto onAgregar={agregarAlCarrito} />}
          />
          <Route
            path="/carrito"
            element={
              <Carrito
                carrito={carrito}
                onSumar={sumarItem}
                onRestar={restarItem}
                onEliminar={eliminarItem}
              />
            }
          />
          <Route
            path="/finalizar-compra"
            element={
              <FinalizarCompra
                carrito={carrito}
                onConfirmarCompra={confirmarCompra}
              />
            }
          />
          <Route
            path="/compra-confirmada"
            element={<CompraConfirmada />}
          />
          <Route path="/login" element={<Login onIngresar={ingresarUsuario} />} />
          <Route
            path="/registro"
            element={<Registro onIngresar={ingresarUsuario} />}
          />
          <Route
            path="/perfil"
            element={
              <Perfil
                usuarioActivo={usuarioActivo}
                comprasUsuario={comprasUsuario}
                onAgregar={agregarAlCarrito}
              />
            }
          />
          <Route path="/contacto" element={<Contacto />} />
        </Route>
        <Route path="*" element={<NoEncontrado />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
