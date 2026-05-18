import p1 from "../assets/productos/product (1).png";
import p2 from "../assets/productos/product (2).png";
import p3 from "../assets/productos/product (3).png";
import p4 from "../assets/productos/product (4).png";
import p5 from "../assets/productos/product (5).png";
import p7 from "../assets/productos/product (7).png";
import p8 from "../assets/productos/product (8).png";
import p9 from "../assets/productos/product (9).png";
import p10 from "../assets/productos/product (10).png";
import p11 from "../assets/productos/product (11).png";
import p12 from "../assets/productos/product (12).png";
import p13 from "../assets/productos/product (13).png";
import p14 from "../assets/productos/product (14).png";
import pia1 from "../assets/productos/product_ia (1).png";
import pia5 from "../assets/productos/product_ia (5).png";
import pia6 from "../assets/productos/product_ia (6).png";
import pia7 from "../assets/productos/product_ia (7).png";
import pia8 from "../assets/productos/product_ia (8).png";
import pia9 from "../assets/productos/product_ia (9).png";
import pia10 from "../assets/productos/product_ia (10).png";
import pia11 from "../assets/productos/product_ia (11).png";
import pia12 from "../assets/productos/product_ia (12).png";
import pia13 from "../assets/productos/product_ia (13).png";
import pia14 from "../assets/productos/product_ia (14).png";
import pia15 from "../assets/productos/product_ia (15).png";

const PALETA = {
  negro: "#0e0e0e",
  caoba: "#3a2418",
  beige: "#cdb89a",
  marron: "#5a3220",
  vino: "#1f1410",
  arena: "#d4c5a5",
  crema: "#f4ede2",
};

const cuatro = [PALETA.negro, PALETA.caoba, PALETA.beige, PALETA.arena];
const uno = [PALETA.caoba];
const cuatroAlt = [PALETA.marron, PALETA.negro, PALETA.crema, PALETA.beige];
const unoNegro = [PALETA.negro];
const unoBeige = [PALETA.beige];

const swatchesPorIndex = (i) => {
  if (i % 2 === 0) return cuatro;
  if (i % 6 === 1) return uno;
  if (i % 6 === 3) return unoNegro;
  if (i % 6 === 5) return unoBeige;
  return cuatroAlt;
};

const bolsosGrandes = [
  {
    nombre: "Bolso Clara",
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
    imagen: p1,
  },
  {
    nombre: "Tote Martina",
    precio: 9400,
    descripcion:
      "Bolso de cuero de gran capacidad, con terminaciones cuidadas y diseño atemporal.",
    descriptor: "Cuero uruguayo · amplio · diseño sereno",
    materiales: "Cuero vacuno uruguayo. Asas reforzadas y bolsillo interior con cierre.",
    medidas: "42 cm de ancho · 34 cm de alto · 16 cm de profundidad",
    queEntra: "Notebook 13\", cuaderno, billetera, celular, llaves y neceser.",
    cuidado:
      "Limpiar con paño suave. Hidratar cada tres meses con crema neutra para cuero.",
    disponibilidad: "Disponible",
    badge: null,
    imagen: p2,
  },
  {
    nombre: "Bolso Helena",
    precio: 9100,
    descripcion:
      "Pieza de gran formato con líneas limpias, pensada para uso diario y viajes cortos.",
    descriptor: "Cuero uruguayo · estructura firme · uso intensivo",
    materiales: "Cuero vacuno uruguayo. Asas dobles y compartimento principal con cierre.",
    medidas: "40 cm de ancho · 33 cm de alto · 15 cm de profundidad",
    queEntra: "Notebook, neceser, billetera, llaves y agenda.",
    cuidado: "Hidratar cada tres meses. Evitar humedad prolongada.",
    disponibilidad: "Disponible",
    badge: null,
    imagen: p3,
  },
  {
    nombre: "Bolso Florencia",
    precio: 9700,
    descripcion:
      "Bolso amplio de cuero artesanal con interior organizado para el día a día.",
    descriptor: "Cuero uruguayo · bolsillos internos · asas reforzadas",
    materiales: "Cuero vacuno uruguayo, forrado interior de algodón natural.",
    medidas: "41 cm de ancho · 32 cm de alto · 14 cm de profundidad",
    queEntra: "Notebook 14\", agenda, billetera, lentes y neceser pequeño.",
    cuidado: "Limpiar con paño suave seco. Aplicar crema neutra para cuero.",
    disponibilidad: "Disponible",
    badge: "OFERTA",
    imagen: p4,
  },
  {
    nombre: "Bolso Magdalena",
    precio: 8700,
    descripcion:
      "Estructura sobria y formato amplio para quien busca elegancia silenciosa.",
    descriptor: "Cuero uruguayo · líneas rectas · interior amplio",
    materiales: "Cuero vacuno uruguayo. Bolsillo interior con cierre y porta llaves.",
    medidas: "39 cm de ancho · 31 cm de alto · 13 cm de profundidad",
    queEntra: "Notebook, agenda, billetera y lentes.",
    cuidado: "Hidratar trimestralmente. Evitar exposición prolongada al sol.",
    disponibilidad: "Disponible",
    badge: null,
    imagen: p5,
  },
  {
    nombre: "Bolso Constanza",
    precio: 9300,
    descripcion:
      "Bolso de cuero ámbar con asas dobles y silueta clásica para el día.",
    descriptor: "Cuero uruguayo · silueta clásica · uso diario",
    materiales: "Cuero vacuno uruguayo. Asas dobles y cierre con cremallera metálica.",
    medidas: "40 cm de ancho · 32 cm de alto · 14 cm de profundidad",
    queEntra: "Notebook 13\", billetera, agenda, llaves y celular.",
    cuidado: "Mantener en lugar seco. Hidratar cada tres meses.",
    disponibilidad: "Disponible",
    badge: null,
    imagen: p7,
  },
  {
    nombre: "Bolso Beatriz",
    precio: 8800,
    descripcion:
      "Pieza grande con detalles artesanales en los bordes y costuras a la vista.",
    descriptor: "Cuero uruguayo · costuras a la vista · bordes pulidos",
    materiales: "Cuero vacuno uruguayo. Costuras a la vista y herrajes mate.",
    medidas: "39 cm de ancho · 32 cm de alto · 14 cm de profundidad",
    queEntra: "Notebook, billetera, libreta, celular y llaves.",
    cuidado: "Limpiar con paño seco. Aplicar crema neutra cada tres meses.",
    disponibilidad: "Disponible",
    badge: "NUEVO",
    imagen: p8,
  },
  {
    nombre: "Bolso Olivia",
    precio: 9500,
    descripcion:
      "Bolso amplio con asa única y formato editorial para uso urbano.",
    descriptor: "Cuero uruguayo · asa única · porte editorial",
    materiales: "Cuero vacuno uruguayo. Asa de hombro reforzada.",
    medidas: "42 cm de ancho · 30 cm de alto · 13 cm de profundidad",
    queEntra: "Notebook 13\", billetera, agenda, neceser y lentes.",
    cuidado: "Hidratar cada tres meses. Evitar humedad prolongada.",
    disponibilidad: "Disponible",
    badge: null,
    imagen: p9,
  },
];

const mochilas = [
  {
    nombre: "Mochila Vera",
    precio: 7900,
    descripcion:
      "Mochila artesanal de cuero, cómoda, resistente y pensada para moverse todos los días.",
    descriptor: "Cuero uruguayo · manos libres · estructura resistente",
    materiales: "Cuero vacuno uruguayo. Tirantes acolchados y forrado de algodón crudo.",
    medidas: "30 cm de ancho · 38 cm de alto · 14 cm de profundidad",
    queEntra: "Agenda, botella pequeña, billetera, celular, lentes y neceser.",
    cuidado: "Limpiar con paño seco. Hidratar cada tres meses.",
    disponibilidad: "Disponible",
    badge: null,
    imagen: pia7,
  },
  {
    nombre: "Mochila Fiorella",
    precio: 8100,
    descripcion:
      "Mochila estructurada con tapa frontal y herraje a tono.",
    descriptor: "Cuero uruguayo · tapa frontal · estructura firme",
    materiales: "Cuero vacuno uruguayo. Herraje metálico y tirantes ajustables.",
    medidas: "30 cm de ancho · 38 cm de alto · 14 cm de profundidad",
    queEntra: "Notebook 13\", agenda, botella, billetera y celular.",
    cuidado: "Hidratar cada tres meses con crema neutra.",
    disponibilidad: "Disponible",
    badge: "NUEVO",
    imagen: pia8,
  },
  {
    nombre: "Mochila Gabriela",
    precio: 7700,
    descripcion:
      "Mochila clásica de cuero con bolsillo exterior plano.",
    descriptor: "Cuero uruguayo · bolsillo plano · diseño clásico",
    materiales: "Cuero vacuno uruguayo. Bolsillo exterior plano.",
    medidas: "29 cm de ancho · 37 cm de alto · 13 cm de profundidad",
    queEntra: "Notebook 13\", agenda, billetera, llaves.",
    cuidado: "Limpiar con paño seco. Hidratar trimestralmente.",
    disponibilidad: "Disponible",
    badge: null,
    imagen: pia9,
  },
  {
    nombre: "Mochila Antonella",
    precio: 8300,
    descripcion:
      "Mochila amplia con doble compartimento y tirantes anchos.",
    descriptor: "Cuero uruguayo · doble compartimento · tirantes anchos",
    materiales: "Cuero vacuno uruguayo. Forrado interior y doble compartimento.",
    medidas: "31 cm de ancho · 39 cm de alto · 15 cm de profundidad",
    queEntra: "Notebook 14\", agenda, neceser, billetera, lentes.",
    cuidado: "Mantener en lugar seco. Aplicar crema cada tres meses.",
    disponibilidad: "Sin stock",
    badge: "SOLD OUT",
    imagen: pia10,
  },
  {
    nombre: "Mochila Ursula",
    precio: 7600,
    descripcion: "Mochila compacta para uso urbano diario.",
    descriptor: "Cuero uruguayo · uso urbano · compacta",
    materiales: "Cuero vacuno uruguayo. Tirantes regulables.",
    medidas: "28 cm de ancho · 35 cm de alto · 12 cm de profundidad",
    queEntra: "Notebook 13\", billetera, agenda, llaves.",
    cuidado: "Hidratar cada tres meses. Evitar humedad.",
    disponibilidad: "Disponible",
    badge: "OFERTA",
    imagen: pia11,
  },
  {
    nombre: "Mochila Victoria",
    precio: 8400,
    descripcion:
      "Mochila amplia con cierre superior y bolsillo lateral.",
    descriptor: "Cuero uruguayo · bolsillo lateral · cierre superior",
    materiales: "Cuero vacuno uruguayo. Cierre cremallera metálica.",
    medidas: "30 cm de ancho · 38 cm de alto · 14 cm de profundidad",
    queEntra: "Notebook, agenda, billetera, llaves, lentes.",
    cuidado: "Limpiar con paño suave. Hidratar cada tres meses.",
    disponibilidad: "Disponible",
    badge: null,
    imagen: pia12,
  },
  {
    nombre: "Mochila Ximena",
    precio: 7400,
    descripcion:
      "Mochila simple, de líneas limpias y formato sobrio.",
    descriptor: "Cuero uruguayo · líneas limpias · sobria",
    materiales: "Cuero vacuno uruguayo. Tapa frontal con hebilla mate.",
    medidas: "29 cm de ancho · 36 cm de alto · 13 cm de profundidad",
    queEntra: "Notebook 13\", agenda, billetera.",
    cuidado: "Hidratar trimestralmente. Mantener seco.",
    disponibilidad: "Disponible",
    badge: null,
    imagen: pia13,
  },
  {
    nombre: "Mochila Berta",
    precio: 7300,
    descripcion:
      "Mochila chica con bolsillo frontal exterior.",
    descriptor: "Cuero uruguayo · bolsillo frontal · uso liviano",
    materiales: "Cuero vacuno uruguayo. Bolsillo frontal pequeño.",
    medidas: "27 cm de ancho · 33 cm de alto · 11 cm de profundidad",
    queEntra: "Tablet, agenda, billetera, llaves.",
    cuidado: "Limpiar con paño seco. Hidratar cada tres meses.",
    disponibilidad: "Disponible",
    badge: null,
    imagen: pia14,
  },
  {
    nombre: "Mochila Cecilia",
    precio: 8200,
    descripcion:
      "Mochila clásica con detalles artesanales en costuras.",
    descriptor: "Cuero uruguayo · detalles artesanales · costuras a la vista",
    materiales: "Cuero vacuno uruguayo. Costuras a la vista en hilo encerado.",
    medidas: "30 cm de ancho · 38 cm de alto · 14 cm de profundidad",
    queEntra: "Notebook 13\", agenda, neceser, billetera.",
    cuidado: "Aplicar crema neutra trimestralmente.",
    disponibilidad: "Disponible",
    badge: "NUEVO",
    imagen: pia15,
  },
];

const bolsosChicos = [
  {
    nombre: "Bandolera Julia",
    precio: 4900,
    descripcion: "Pieza liviana y práctica para llevar lo esencial con estilo.",
    descriptor: "Cuero uruguayo · formato compacto · uso liviano",
    materiales: "Cuero vacuno uruguayo. Cierre metálico y forrado interior de algodón.",
    medidas: "22 cm de ancho · 18 cm de alto · 8 cm de profundidad",
    queEntra: "Celular, billetera chica, llaves y lentes.",
    cuidado: "Limpiar con paño seco. Mantener alejada de la humedad.",
    disponibilidad: "Disponible",
    badge: "OFERTA",
    imagen: p10,
  },
  {
    nombre: "Bandolera Luna",
    precio: 5200,
    descripcion:
      "Bandolera mini con cierre frontal y correa regulable de cuero.",
    descriptor: "Cuero uruguayo · mini · correa regulable",
    materiales: "Cuero vacuno uruguayo. Correa fina regulable.",
    medidas: "20 cm de ancho · 16 cm de alto · 7 cm de profundidad",
    queEntra: "Celular, billetera chica, llaves.",
    cuidado: "Limpiar con paño seco. Hidratar cada tres meses.",
    disponibilidad: "Disponible",
    badge: null,
    imagen: p11,
  },
  {
    nombre: "Bandolera Inés",
    precio: 4700,
    descripcion: "Bolso pequeño con formato sobre. Para esenciales.",
    descriptor: "Cuero uruguayo · tipo sobre · esenciales",
    materiales: "Cuero vacuno uruguayo. Cierre solapa con imán.",
    medidas: "22 cm de ancho · 14 cm de alto · 5 cm de profundidad",
    queEntra: "Celular, billetera, llaves, tarjetas.",
    cuidado: "Mantener seco. Aplicar crema neutra cada tres meses.",
    disponibilidad: "Disponible",
    badge: null,
    imagen: p12,
  },
  {
    nombre: "Bandolera Bianca",
    precio: 5100,
    descripcion:
      "Bandolera mini con tapa frontal y herraje a tono.",
    descriptor: "Cuero uruguayo · tapa frontal · uso liviano",
    materiales: "Cuero vacuno uruguayo. Hebilla pequeña metálica.",
    medidas: "21 cm de ancho · 17 cm de alto · 7 cm de profundidad",
    queEntra: "Celular, billetera chica, llaves, lentes.",
    cuidado: "Limpiar con paño suave. Evitar humedad.",
    disponibilidad: "Sin stock",
    badge: "SOLD OUT",
    imagen: p13,
  },
  {
    nombre: "Bandolera Mora",
    precio: 4800,
    descripcion:
      "Pieza chica de formato rectangular con cierre superior.",
    descriptor: "Cuero uruguayo · rectangular · cierre superior",
    materiales: "Cuero vacuno uruguayo. Cierre con cremallera metálica.",
    medidas: "22 cm de ancho · 16 cm de alto · 6 cm de profundidad",
    queEntra: "Celular, billetera, llaves, lápiz labial.",
    cuidado: "Hidratar cada tres meses con crema neutra.",
    disponibilidad: "Disponible",
    badge: "NUEVO",
    imagen: p14,
  },
  {
    nombre: "Bandolera Selena",
    precio: 5000,
    descripcion:
      "Bolso pequeño con detalles artesanales y correa larga.",
    descriptor: "Cuero uruguayo · correa larga · detalles artesanales",
    materiales: "Cuero vacuno uruguayo. Correa larga ajustable.",
    medidas: "23 cm de ancho · 17 cm de alto · 7 cm de profundidad",
    queEntra: "Celular, billetera, llaves, lentes.",
    cuidado: "Mantener seco. Aplicar crema trimestral.",
    disponibilidad: "Disponible",
    badge: null,
    imagen: pia1,
  },
  {
    nombre: "Bandolera Adela",
    precio: 5300,
    descripcion:
      "Bolso de uso liviano, ideal para días sin agenda.",
    descriptor: "Cuero uruguayo · liviano · esenciales",
    materiales: "Cuero vacuno uruguayo. Bolsillo interior plano.",
    medidas: "21 cm de ancho · 17 cm de alto · 7 cm de profundidad",
    queEntra: "Celular, billetera, llaves y tarjetas.",
    cuidado: "Limpiar con paño seco. Hidratar trimestralmente.",
    disponibilidad: "Disponible",
    badge: "OFERTA",
    imagen: pia5,
  },
  {
    nombre: "Bandolera Tamara",
    precio: 4600,
    descripcion:
      "Bolso compacto con bolsillo trasero exterior.",
    descriptor: "Cuero uruguayo · bolsillo trasero · uso diario",
    materiales: "Cuero vacuno uruguayo. Bolsillo trasero abierto.",
    medidas: "22 cm de ancho · 17 cm de alto · 6 cm de profundidad",
    queEntra: "Celular, billetera, llaves, lentes.",
    cuidado: "Aplicar crema neutra cada tres meses.",
    disponibilidad: "Disponible",
    badge: null,
    imagen: pia6,
  },
];

const construir = (lista, categoria, offsetId) =>
  lista.map((p, i) => ({
    id: offsetId + i,
    categoria,
    swatches: swatchesPorIndex(offsetId + i),
    ...p,
  }));

export const productos = [
  ...construir(bolsosGrandes, "Bolsos grandes", 1),
  ...construir(mochilas, "Mochilas", 11),
  ...construir(bolsosChicos, "Bolsos chicos", 21),
];
