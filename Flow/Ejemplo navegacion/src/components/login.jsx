import { useForm } from "react-hook-form"
import { useNavigate, Link } from "react-router"

const Login = () => {
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm()

    const onSubmit = (data) => {
        console.log("Datos login", data)
        //API
        navigate("/home")
    }

    return(
        <div className="pantalla">
            <h1>Login</h1>

            <form classname="form" onSubmit={handleSubmit(onSubmit)}>
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

                <button type="submit">Ingresar</button>
            </form>

            <p>¿No tienes cuenta? <Link to="/registro">Registrate</Link></p>
        </div>
    )
}

export default Login