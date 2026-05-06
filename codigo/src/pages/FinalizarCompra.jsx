import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { useNavigate } from "react-router";
import ResumenPedido from "../components/ResumenPedido";

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
  direccion: Joi.string().trim().min(1).required().messages({
    "string.empty": "La dirección es obligatoria.",
    "any.required": "La dirección es obligatoria.",
  }),
});

function FinalizarCompra({ carrito, onConfirmarCompra }) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(schema),
    defaultValues: { nombre: "", email: "", direccion: "" },
  });

  const onSubmit = (datos) => {
    const numero = onConfirmarCompra(datos);
    navigate(`/compra-confirmada?nro=${numero}`);
  };

  if (carrito.length === 0) {
    return (
      <div className="container carrito-vacio">
        <p className="sobrelinea">Finalizar compra</p>
        <h2>No hay piezas en tu carrito</h2>
        <p>Antes de finalizar, sumá al menos una pieza desde la colección.</p>
        <button type="button" className="btn" onClick={() => navigate("/catalogo")}>
          Explorar la colección
        </button>
      </div>
    );
  }

  return (
    <div className="container pagina">
      <p className="sobrelinea">Último paso</p>
      <h1 className="pagina-titulo">Revisá y confirmá tu compra</h1>
      <p className="pagina-subtitulo">
        Estás a un paso de completar tu pedido. Verificá tus datos y el resumen
        antes de confirmar.
      </p>

      <div className="finalizar-layout">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="form-grupo">
            <label htmlFor="nombre">Nombre y apellido</label>
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
            <label htmlFor="direccion">Dirección de envío</label>
            <input
              id="direccion"
              type="text"
              placeholder="Calle, número, ciudad"
              className={errors.direccion ? "error" : ""}
              {...register("direccion")}
            />
            {errors.direccion && (
              <span className="form-error">{errors.direccion.message}</span>
            )}
          </div>

          <button type="submit" className="btn" style={{ marginTop: 16 }}>
            Confirmar compra
          </button>
        </form>

        <ResumenPedido carrito={carrito} etiquetaBoton="" onAccion={() => {}} />
      </div>
    </div>
  );
}

export default FinalizarCompra;
