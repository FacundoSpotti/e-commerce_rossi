import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ carrito, usuarioActivo, queryBusqueda, onCambiarBusqueda }) {
  return (
    <>
      <Header
        carrito={carrito}
        usuarioActivo={usuarioActivo}
        queryBusqueda={queryBusqueda}
        onCambiarBusqueda={onCambiarBusqueda}
      />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
