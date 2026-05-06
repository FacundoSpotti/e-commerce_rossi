import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ carrito, usuarioActivo }) {
  return (
    <>
      <Header carrito={carrito} usuarioActivo={usuarioActivo} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
