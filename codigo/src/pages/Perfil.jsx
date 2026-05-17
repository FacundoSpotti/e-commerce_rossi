import { useState } from "react";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { Link } from "react-router";
import CompraResumen from "../components/CompraResumen";
import ProductCard from "../components/ProductCard";
import { compras as comprasIniciales, favoritos as favoritosIds } from "../data/compras";
import { productos } from "../data/productos";
import { usuario as usuarioFijo } from "../data/usuario";
import { useScrollReveal } from "../hooks/useScrollReveal";

const schema = Joi.object({
  nombre: Joi.string().trim().min(2).required().messages({
    "string.empty": "El nombre es obligatorio.",
    "string.min": "Mínimo 2 caracteres.",
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
  direccion: Joi.string().trim().min(3).required().messages({
    "string.empty": "La dirección es obligatoria.",
    "string.min": "Mínimo 3 caracteres.",
    "any.required": "La dirección es obligatoria.",
  }),
});

function Perfil({ usuarioActivo, comprasUsuario, onAgregar }) {
  const [detalleAbierto, setDetalleAbierto] = useState(null);
  const [editando, setEditando] = useState(false);
  const [datos, setDatos] = useState(usuarioActivo || usuarioFijo);
  const [fotoUrl, setFotoUrl] = useState(null);

  const compras = [...(comprasUsuario || []), ...comprasIniciales];

  const favoritos = favoritosIds
    .map((id) => productos.find((p) => p.id === id))
    .filter(Boolean);

  const [cabeceraRef, cabeceraVisible] = useScrollReveal();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(schema),
    defaultValues: datos,
  });

  const verDetalle = (numero) => {
    setDetalleAbierto((actual) => (actual === numero ? null : numero));
  };

  const handleFoto = (e) => {
    const archivo = e.target.files && e.target.files[0];
    if (archivo) {
      setFotoUrl(URL.createObjectURL(archivo));
    }
  };

  const abrirEdicion = () => {
    reset(datos);
    setEditando(true);
  };

  const onSubmit = (valores) => {
    setDatos(valores);
    setEditando(false);
  };

  return (
    <div className="container pagina">
      <section
        ref={cabeceraRef}
        className={`reveal ${cabeceraVisible ? "reveal-in" : ""}`}
      >
        <p className="sobrelinea">Mi cuenta</p>
        <h1 className="pagina-titulo">Mi perfil</h1>
        <p className="pagina-subtitulo">
          Todo lo importante, en un solo lugar. Desde acá podés seguir tus
          pedidos, revisar tus datos y volver a ver las piezas que guardaste.
        </p>
      </section>

      <section className="perfil-seccion">
        <div className="perfil-seccion-cabecera">
          <h2>Información personal</h2>
          {!editando && (
            <button
              type="button"
              className="perfil-link-boton"
              onClick={abrirEdicion}
            >
              Editar
            </button>
          )}
        </div>

        <div className="perfil-bloque-personal">
          <div className="perfil-foto-wrapper">
            <div className="perfil-foto">
              {fotoUrl ? (
                <img src={fotoUrl} alt="Foto de perfil" />
              ) : (
                <svg viewBox="0 0 64 64" aria-hidden="true">
                  <circle cx="32" cy="24" r="11" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M12 56c2-10 10-16 20-16s18 6 20 16" fill="none" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              )}
            </div>
            <label className="perfil-foto-cambiar">
              <input
                type="file"
                accept="image/*"
                onChange={handleFoto}
                hidden
              />
              Cambiar foto
            </label>
          </div>

          {!editando ? (
            <div className="perfil-info">
              <div className="perfil-info-bloque">
                <p className="perfil-info-label">Nombre</p>
                <p className="perfil-info-valor">{datos.nombre}</p>
              </div>
              <div className="perfil-info-bloque">
                <p className="perfil-info-label">Email</p>
                <p className="perfil-info-valor">{datos.email}</p>
              </div>
              <div className="perfil-info-bloque">
                <p className="perfil-info-label">Dirección</p>
                <p className="perfil-info-valor">{datos.direccion}</p>
              </div>
            </div>
          ) : (
            <form
              className="perfil-edit-form"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <div className="form-grupo">
                <label htmlFor="p-nombre">Nombre</label>
                <input
                  id="p-nombre"
                  type="text"
                  className={errors.nombre ? "error" : ""}
                  {...register("nombre")}
                />
                {errors.nombre && (
                  <span className="form-error">{errors.nombre.message}</span>
                )}
              </div>
              <div className="form-grupo">
                <label htmlFor="p-email">Email</label>
                <input
                  id="p-email"
                  type="email"
                  className={errors.email ? "error" : ""}
                  {...register("email")}
                />
                {errors.email && (
                  <span className="form-error">{errors.email.message}</span>
                )}
              </div>
              <div className="form-grupo">
                <label htmlFor="p-direccion">Dirección</label>
                <input
                  id="p-direccion"
                  type="text"
                  className={errors.direccion ? "error" : ""}
                  {...register("direccion")}
                />
                {errors.direccion && (
                  <span className="form-error">{errors.direccion.message}</span>
                )}
              </div>
              <div className="perfil-edit-acciones">
                <button type="submit" className="btn">
                  Guardar cambios
                </button>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => setEditando(false)}
                >
                  Cancelar
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      <section className="perfil-seccion">
        <div className="perfil-seccion-cabecera">
          <h2>Mis pedidos</h2>
        </div>
        {compras.length === 0 ? (
          <p className="perfil-sin-pedidos">
            Todavía no tenés pedidos. Cuando una pieza te encuentre, la vas a
            ver acá.
          </p>
        ) : (
          compras.map((compra) => (
            <div key={compra.numero}>
              <CompraResumen compra={compra} onVerDetalle={verDetalle} />
              {detalleAbierto === compra.numero && (
                <div className="perfil-pedido-detalle">
                  <p className="perfil-pedido-detalle-titulo">
                    Detalle del pedido
                  </p>
                  {compra.items.map((it) => (
                    <div key={it.id} className="perfil-pedido-detalle-item">
                      <span>
                        {it.nombre} × {it.cantidad}
                      </span>
                      <span>
                        ${(it.precio * it.cantidad).toLocaleString("es-UY")}
                      </span>
                    </div>
                  ))}
                  <div className="perfil-pedido-detalle-total">
                    <span>Total</span>
                    <span>${compra.total.toLocaleString("es-UY")}</span>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </section>

      <section className="perfil-seccion">
        <div className="perfil-seccion-cabecera">
          <h2>Favoritos</h2>
          <Link to="/catalogo">Ver catálogo</Link>
        </div>
        <div className="perfil-favoritos">
          {favoritos.map((p) => (
            <ProductCard key={p.id} producto={p} onAgregar={onAgregar} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Perfil;
