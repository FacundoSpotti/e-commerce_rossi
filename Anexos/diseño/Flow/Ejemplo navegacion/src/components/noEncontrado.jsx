import { Link } from "react-router"

const NoEncontrado = () => {
    return(
        <div classname="pantalla">
            <h1>404</h1>
            <p>La pagina no existe</p>

            <Link to="/home">Volver al inicio</Link>
        </div>
    )
}

export default NoEncontrado