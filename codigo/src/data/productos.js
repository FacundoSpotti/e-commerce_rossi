import bolsoClara from "../assets/productos/bolso-clara.jpg";
import carteraEmilia from "../assets/productos/cartera-emilia.jpg";
import bandoleraJulia from "../assets/productos/bandolera-julia.jpg";
import mochilaVera from "../assets/productos/mochila-vera.jpg";
import toteMartina from "../assets/productos/tote-martina.jpg";
import morralAna from "../assets/productos/morral-ana.jpg";

export const productos = [
  {
    id: 1,
    nombre: "Bolso Clara",
    categoria: "Bolsos grandes",
    precio: 8900,
    descripcion:
      "Bolso amplio de cuero nacional, pensado para acompañar jornadas largas con elegancia y comodidad.",
    descriptor: "Cuero uruguayo · gran capacidad · interior organizado",
    materiales: "Cuero vacuno uruguayo curtido en taller. Forrado interior de algodón crudo.",
    medidas: "38 cm de ancho · 32 cm de alto · 14 cm de profundidad",
    queEntra: "Notebook 13\", agenda, billetera, celular, lentes y llaves.",
    cuidado:
      "Limpiar con paño suave seco. Hidratar cada tres meses con crema neutra. Evitar humedad prolongada y sol directo.",
    disponibilidad: "Disponible",
    badge: "NUEVO",
    imagen: bolsoClara,
    swatches: ["#3a2418", "#0e0e0e", "#cdb89a"],
  },
  {
    id: 2,
    nombre: "Cartera Emilia",
    categoria: "Bolsos medianos",
    precio: 6900,
    descripcion:
      "Cartera de tamaño medio, funcional y sobria, ideal para el uso diario.",
    descriptor: "Cuero uruguayo · correa regulable · bolsillo interno",
    materiales: "Cuero vacuno uruguayo. Correa regulable y bolsillo interior con cierre.",
    medidas: "30 cm de ancho · 24 cm de alto · 11 cm de profundidad",
    queEntra: "Celular, billetera, lentes, llaves y agenda pequeña.",
    cuidado:
      "Limpiar con paño suave. Aplicar crema para cuero cada tres meses. Conservar en lugar seco y aireado.",
    disponibilidad: "Disponible",
    badge: null,
    imagen: carteraEmilia,
    swatches: ["#3a2418", "#0e0e0e", "#cdb89a"],
  },
  {
    id: 3,
    nombre: "Bandolera Julia",
    categoria: "Bolsos chicos",
    precio: 4900,
    descripcion:
      "Pieza liviana y práctica para llevar lo esencial con estilo.",
    descriptor: "Cuero uruguayo · formato compacto · uso liviano",
    materiales: "Cuero vacuno uruguayo. Cierre metálico y forrado interior de algodón.",
    medidas: "22 cm de ancho · 18 cm de alto · 8 cm de profundidad",
    queEntra: "Celular, billetera chica, llaves y lentes.",
    cuidado:
      "Limpiar con paño seco. Mantener alejada de la humedad. Hidratar cada tres meses.",
    disponibilidad: "Disponible",
    badge: "OFERTA",
    imagen: bandoleraJulia,
    swatches: ["#0e0e0e", "#cdb89a", "#f4ede2"],
  },
  {
    id: 4,
    nombre: "Mochila Vera",
    categoria: "Mochilas",
    precio: 7900,
    descripcion:
      "Mochila artesanal de cuero, cómoda, resistente y pensada para moverse todos los días.",
    descriptor: "Cuero uruguayo · manos libres · estructura resistente",
    materiales: "Cuero vacuno uruguayo. Tirantes acolchados y forrado de algodón crudo.",
    medidas: "30 cm de ancho · 38 cm de alto · 14 cm de profundidad",
    queEntra: "Agenda, botella pequeña, billetera, celular, lentes y neceser.",
    cuidado:
      "Limpiar con paño seco. Hidratar cada tres meses. Evitar sobrecargar para preservar la forma.",
    disponibilidad: "Disponible",
    badge: null,
    imagen: mochilaVera,
    swatches: ["#5a3220", "#0e0e0e", "#cdb89a"],
  },
  {
    id: 5,
    nombre: "Tote Martina",
    categoria: "Bolsos grandes",
    precio: 9400,
    descripcion:
      "Bolso de cuero de gran capacidad, con terminaciones cuidadas y diseño atemporal.",
    descriptor: "Cuero uruguayo · amplio · diseño sereno",
    materiales: "Cuero vacuno uruguayo. Asas reforzadas y bolsillo interior con cierre.",
    medidas: "42 cm de ancho · 34 cm de alto · 16 cm de profundidad",
    queEntra: "Notebook 13\", cuaderno, billetera, celular, llaves y neceser.",
    cuidado:
      "Limpiar con paño suave. Hidratar cada tres meses con crema neutra para cuero.",
    disponibilidad: "Sin stock",
    badge: "SOLD OUT",
    imagen: toteMartina,
    swatches: ["#cdb89a", "#3a2418", "#0e0e0e"],
  },
  {
    id: 6,
    nombre: "Morral Ana",
    categoria: "Bolsos medianos",
    precio: 6200,
    descripcion:
      "Morral versátil de cuero nacional, pensado para combinar practicidad y diseño.",
    descriptor: "Cuero uruguayo · cómodo · uso diario",
    materiales: "Cuero vacuno uruguayo. Hebilla metálica y forrado interior.",
    medidas: "26 cm de ancho · 22 cm de alto · 10 cm de profundidad",
    queEntra: "Celular, billetera, libreta pequeña, llaves y lentes.",
    cuidado:
      "Limpiar con paño seco. Aplicar crema neutra cada tres meses.",
    disponibilidad: "Disponible",
    badge: null,
    imagen: morralAna,
    swatches: ["#3a2418", "#0e0e0e", "#cdb89a"],
  },
];
