import { useForm } from "react-hook-form"
import { useNavigate, Link } from "react-router"

const Registro = () => {
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm()

    const onSubmit = (data) => {
        console.log("Datos registro", data)
        //API
        navigate("/home")
    }

    return(
        <div className="pantalla">
            <h1>Registro</h1>

            <form classname="form" onSubmit={handleSubmit(onSubmit)}>
                <input type="nombre" placeholder="Nombre"
                {...register("nombre", {
                    required: "el nombre es obligatorio",
                })}
                />
                {errors.nombre && <p className="error"> {errors.nombre.message} </p>}


                <input type="email" placeholder="Email"
                {...register("email", {
                    required: "email es obligatorio",
                })}
                />
                {errors.email && <p className="error"> {errors.email.message} </p>}

                <input type="password" placeholder="password"
                {...register("password", {
                    required: "la password es obligatoria",
                })}
                />
                {errors.password && <p className="error"> {errors.password.message} </p>}

                <button type="submit">Registrarme</button>
            </form>

            <p><Link to="/login">Volver al Login</Link></p>
        </div>
    )
}

export default Registro