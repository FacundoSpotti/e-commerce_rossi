const compras = [
    {
        id: 1,
        fecha: "12/05/2026",
        total: 920,
        productos: ["Hamburguesa x2", "Papas fritas x1"],
    },
    {
        id: 2,
        fecha: "15/05/2026",
        total: 500,
        productos: ["Pizza x1"],
    },
]

const Perfil = () => {
    return (
        <div className="pantalla">
            <h1>Perfil</h1>
            <section className="perfil-box">
                <p>Nombre: Juan Perez</p>
                <p>Email: JuanPerez@gmail.com</p>
            </section>

            <h2>historial de compras</h2>

            {compras.map((compra) => {
                <div className="compra" key={compra.id}>
                    <h3>Compra #{compra.id}</h3>
                    <p>Fecha: {compra.fecha}</p>
                    <p>Total: ${compra.total}</p>
                    {compra.productos.map((producto, index) => (
                        <p key={index}>{producto}</p>
                    ))}

                </div>
            })}
        </div>
    )
}

export default Perfil
