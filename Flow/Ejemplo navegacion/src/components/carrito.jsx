import { useNavigate } from "react-router"

const carrito = [
    {
        id: 1,
        nombre: "Hamburguesa",
        precio: 350,
        cantidad: 2,
    },
    {
        id: 2,
        nombre: "Papas fritas",
        precio: 220,
        cantidad: 1,
    },
]

const Carrito = () => {
    const navigate = useNavigate();

    const total = carrito.reduce((acumulador, producto) => {
        return acumulador + producto.precio * producto.cantidad
    }, 0)

    return (
        <div className="pantalla">
            <h1>Carrito</h1>
            {carrito.map((producto) => {
                <div className="item-carrito" key={producto.id}>
                    <h3>{producto.nombre}</h3>
                    <p>Precio: ${producto.precio}</p>
                    <p>Cantidad: {producto.cantidad}</p>
                    <p>Subtotal: ${producto.precio * producto.cantidad}</p>
                
                <h2>Total: ${total}</h2>
                
                <button onClick={() => navigate("/home")}>Volver</button>

                </div>
            })}
        </div>
    )


}

export default Carrito;
