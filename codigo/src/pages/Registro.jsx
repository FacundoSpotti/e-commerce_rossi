import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { Link, useNavigate } from "react-router";

const schema = Joi.object({
  nombre: Joi.string().trim().min(1).required().messages({
    "string.empty": "El nombre es obligatorio.",
    "any.required": "El nombre es obligatorio.",
  }),
  email: Joi.string()
    .trim()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.empty": "El email es obligatorio.",
      "string.email": "Ingresá un email válido.",
      "any.required": "El email es obligatorio.",
    }),
  password: Joi.string().min(8).required().messages({
    "string.empty": "La contraseña es obligatoria.",
    "string.min": "La contraseña debe tener al menos 8 caracteres.",
    "any.required": "La contraseña es obligatoria.",
  }),
  confirmar: Joi.any().valid(Joi.ref("password")).required().messages({
    "any.only": "Las contraseñas no coinciden.",
    "any.required": "Confirmá la contraseña.",
  }),
});

function Registro({ onIngresar }) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(schema),
    defaultValues: { nombre: "", email: "", password: "", confirmar: "" },
  });

  const onSubmit = (datos) => {
    onIngresar(datos.email, datos.nombre);
    navigate("/perfil");
  };

  return (
    <div className="container form-pagina">
      <div className="form-card">
        <h1 className="pagina-titulo">Crear cuenta</h1>
        <p className="pagina-subtitulo">Sumate a la comunidad ROSSI.</p>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="form-grupo">
            <label htmlFor="nombre">Nombre</label>
            <input
              id="nombre"
              type="text"
              placeholder="Tu nombre completo"
              className={errors.nombre ? "error" : ""}
              {...register("nombre")}
            />
            {errors.nombre && (
              <span className="form-error">{errors.nombre.message}</span>
            )}
          </div>

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

          <div className="form-grupo">
            <label htmlFor="confirmar">Confirmar contraseña</label>
            <input
              id="confirmar"
              type="password"
              placeholder="········"
              className={errors.confirmar ? "error" : ""}
              {...register("confirmar")}
            />
            {errors.confirmar && (
              <span className="form-error">{errors.confirmar.message}</span>
            )}
          </div>

          <button type="submit" className="btn btn-block">
            Registrarse
          </button>
        </form>

        <p className="form-secundario">
          ¿Ya tenés cuenta? <Link to="/login"><b>Iniciar sesión</b></Link>
        </p>
      </div>
    </div>
  );
}

export default Registro;
