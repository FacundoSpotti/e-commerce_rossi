const ProductCard = ({ producto }) => {
    return (
        <div className="card">
            <img src={producto.imagen} />
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
            <p>${producto.precio}</p>

            <button onClick={() => alert("Producto agregado")}>
                Agregar
            </button>

        </div>
    )
}

export default ProductCard