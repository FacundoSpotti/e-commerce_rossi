import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { Link, useNavigate } from "react-router";

const schema = Joi.object({
  email: Joi.string()
    .trim()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.empty": "El email es obligatorio.",
      "string.email": "Ingresá un email válido.",
      "any.required": "El email es obligatorio.",
    }),
  password: Joi.string().required().messages({
    "string.empty": "La contraseña es obligatoria.",
    "any.required": "La contraseña es obligatoria.",
  }),
});

function Login({ onIngresar }) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(schema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = (datos) => {
    onIngresar(datos.email);
    navigate("/perfil");
  };

  return (
    <div className="container form-pagina">
      <div className="form-card">
        <h1 className="pagina-titulo">Iniciar sesión</h1>
        <p className="pagina-subtitulo">
          Accedé a tu cuenta para ver tus pedidos y favoritos.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="form-grupo">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="tucorreo@ejemplo.com"
              className={errors.email ? "error" : ""}
              {...register("email")}
            />
            {errors.email && (
              <span className="form-error">{errors.email.message}</span>
            )}
          </div>

          <div className="form-grupo">
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              type="password"
              placeholder="········"
              className={errors.password ? "error" : ""}
              {...register("password")}
            />
            {errors.password && (
              <span className="form-error">{errors.password.message}</span>
            )}
          </div>

          <p className="form-link-derecha">¿Olvidaste tu contraseña?</p>

          <button type="submit" className="btn btn-block">
            Ingresar
          </button>
        </form>

        <div className="form-separador">
          <span />
        </div>

        <Link to="/registro" className="btn btn-outline btn-block">
          Crear cuenta
        </Link>
      </div>
    </div>
  );
}

export default Login;
