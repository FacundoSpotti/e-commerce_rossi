import ProductCard from "./ProductCard"
import { Link } from "react-router"

const productos = [
    {
        id: 1,
        nombre: "Hamburguesa",
        descripcion: "Hamburguesa completa con queso",
        precio: 350,
        imagen: "https://via.placeholder.com/150",
    },
    {
        id: 2,
        nombre: "Pizza",
        descripcion: "Pizza muzarella familiar",
        precio: 500,
        imagen: "https://via.placeholder.com/150",
    },
    {
        id: 3,
        nombre: "Papas fritas",
        descripcion: "Porción grande de papas",
        precio: 220,
        imagen: "https://via.placeholder.com/150",
    },
]

const Home = () => {
return (
    <div className="pantalla">
        <h1>Home</h1>
        <p>Bienvenido a la tienda</p>

        <div className="cards">
            {productos.map((producto) => {
                <ProductCard key={producto.id} producto={producto} />
            })}
        </div>

        <div className="mapa-placeholder">
            <h3>Espacio para el mapa</h3>
        </div>

        <Link to="/carrito">
        <button>ir al carrito</button>
        </Link>
    </div>
)
}

export default Home