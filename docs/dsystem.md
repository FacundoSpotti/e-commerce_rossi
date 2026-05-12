Design System & UI Guidelines: ROSSI - Cuero Artesanal Uruguayo

1. Contexto y Objetivos del Proyecto

Marca: Rossi (Cuero artesanal hecho en Uruguay).

Vibra/Estética: Premium, minimalista, artesanal, elegante, atemporal. Transmite calidad de manufactura, atención al detalle y durabilidad.

Regla de Oro del Diseño: Cero bordes redondeados (Border-Radius: 0). Toda la interfaz utiliza esquinas vivas y ángulos rectos para botones, tarjetas, etiquetas y contenedores, reforzando un look editorial y estructurado. Abundante espacio en blanco (White space) para dar respiro a los productos.

2. Tipografía (Typography Tokens)

Fuente Principal (Única): Montserrat (Google Fonts).

Jerarquía:

Heading 1 (Hero/Páginas): Montserrat Bold, 68px, Line-height 70px.

Heading 2 (Secciones): Montserrat SemiBold, 48px, Line-height 53px. (Ej. "SELECCIÓN DESTACADA").

Title (Títulos de bloques): Montserrat Bold, 36px, Line-height 39px.

Sub Heading: Montserrat Regular, 30px, Line-height 42px.

Button Text: Montserrat Bold, 22px, Line-height 25px (Uppercase). Nota: Para web responsiva, escalar a 16px/18px manteniendo el peso.

Paragraph (Cuerpo de texto): Montserrat Regular, 16px, Line-height 28px.

Subtitle/Etiquetas: Montserrat Light, 14px, Line-height 18px.

Links/Navegación: Montserrat Light/Regular, 14px, Uppercase, amplio letter-spacing.

3. Paleta de Colores (Color Tokens)

El diseño se basa en una paleta monocromática con un color de acento fuerte y tonos tierra para estados.

Fondos (Backgrounds):

bg-white (#FFFFFF): Fondo principal de tarjetas y bloques puros.

bg-offwhite (#F9F9F8 / #F5F5F0 aprox): Fondo general de la página (Ej. página de catálogo y carrito).

Textos (Text Colors):

text-black (#111111): Títulos y textos principales.

text-gray-dark (#333333): Textos secundarios.

text-gray-light (#888888): Descripciones de productos, subtítulos.

Acentos y Estados (Badges & Status):

color-accent-green (#2B7A65 o similar Tailwind emerald-700): Usado para etiquetas positivas: "OFERTA", "NUEVO", estado de pedido "ENTREGADO".

color-accent-dark (#222222): Usado para etiquetas neutras/negativas: "SOLD OUT", estado "EN CAMINO".

color-accent-sand (#D8C3A5 o similar Tailwind tan-300): Usado para estado de pedido "PROCESANDO".

Muestras de Color de Producto (Swatches):

Negro, Marrón oscuro (Caoba), Beige/Crema.

4. Componentes Clave de UI (UI Components)

4.1. Botones (Buttons)

Botón Principal (Call to Action):

Fondo: Negro oscuro (#111111).

Texto: Blanco, Uppercase, amplio letter-spacing.

Forma: Rectángulo perfecto, sin padding exagerado, esquinas de 0px.

Ejemplo: Botón "FINALIZAR COMPRA".

Filtros (Página Catálogo):

Estado Activo: Fondo Negro, Texto Blanco.

Estado Inactivo: Fondo Gris muy claro (Off-white), Texto Negro.

Disposición: Alineados horizontalmente, sin separaciones grandes entre ellos.

4.2. Tarjetas de Producto (Product Cards)

Contenedor de Imagen: Fondo gris muy claro para destacar el producto si tiene fondo transparente o fotografía editorial. Proporción cuadrada o ligeramente vertical (4:5).

Badges (Etiquetas): Ubicadas generalmente sobre la imagen (abajo a la derecha). Rectangulares, texto en blanco, tamaño pequeño, uppercase (SOLD OUT, OFERTA, NUEVO).

Icono Wishlist/Carrito: Icono minimalista tipo "bolsa de compras" arriba a la derecha sobre la imagen.

Información (debajo de la imagen):

Título del producto: Bold, texto negro, tamaño base (16px).

Descripción corta: Light, gris claro, una línea (ej. "Cuero uruguayo, con espacio para...").

Precio: Regular, alineado a la izquierda.

Swatches (Colores): Círculos pequeños (12px-16px) a la derecha de la misma línea del precio.

4.3. Navegación (Header & Footer)

Header (Navbar):

Fondo: Transparente o del color del body (Off-white).

Logo: Izquierda (Tipografía serif estilizada con el sol característico).

Links: Centro. Uppercase, espaciados ("HOME", "CATÁLOGO", "PERFIL", "CONTACTO").

Iconos: Derecha ("INGRESAR", Icono de Carrito).

Footer:

Fondo: Gris muy oscuro/Casi negro (#1A1A1A).

Texto: Gris medio/claro, tipografía pequeña.

Contenido minimalista: "© 2026 - CUERO ARTESANAL URUGUAYO".

4.4. Elementos Específicos

Selector de Cantidad (Carrito): Estilo outline muy sutil. [ - ] [ 1 ] [ + ]. Botones cuadrados, borde gris muy claro.

Tablas/Listados (Mi Perfil): Separadores horizontales (border-bottom) de color gris muy tenue (#E5E5E5). Sin bordes verticales. Alineación en grilla para las columnas (Pedido, Fecha, Estado, Precio, Link).

Resumen de Carrito: Contenedor con fondo blanco puro, destacando sobre el fondo off-white de la página. Bordes rectos, sombra muy sutil o borde delgado.

5. Fotografía y Estilo Visual

Imágenes de proceso (Hero/Banners): Blanco y negro, alto contraste, mostrando trabajo manual (manos, herramientas, cuero).

Imágenes de producto: Iluminación dramática o de estudio limpio. Los productos deben verse pesados, de calidad y con texturas claras.

Instrucciones para el Asistente (Prompt Context)

Al generar código (HTML/CSS, React, Tailwind, etc.) para este proyecto, asume que estás construyendo una tienda de lujo silencioso ("quiet luxury").

Usa Tailwind CSS preferentemente.

Asegúrate de incluir rounded-none en TODOS los elementos interactivos, contenedores y botones.

Usa la fuente font-sans configurada previamente a Montserrat.

Respeta el alto contraste (Negro puro sobre Blanco/Off-white) y usa los colores de acento verde/arena solo para estados.