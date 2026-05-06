import { NavLink, Outlet } from "react-router";

const Layout = () => {
    return (
        <div>
            <nav className="menu">
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/registro">Registro</NavLink>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/carrito">Carrito</NavLink>
                <NavLink to="/perfil">Perfil</NavLink>
            
            </nav>

            <main className="contenido">
                <Outlet />
            </main>
        </div>
    )
}

export default Layout;