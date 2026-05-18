# Estructura de páginas

## Login

Debe incluir:
- Sobrelínea: Mi cuenta
- Título: Bienvenida de nuevo
- Subtítulo: Ingresá para seguir tus pedidos, guardar tus piezas favoritas y comprar más rápido la próxima vez.
- Campo correo electrónico
- Campo contraseña
- Botón Ingresar
- Link a Registro

Validaciones:
- Email obligatorio
- Email con formato válido
- Contraseña obligatoria

## Registro

Debe incluir:
- Sobrelínea: Crear cuenta
- Título: Tu cuenta ROSSI
- Subtítulo: Guardá tus datos, consultá tu historial de compras y tené tus piezas favoritas siempre a mano.
- Campo nombre
- Campo apellido
- Campo correo electrónico
- Campo contraseña
- Botón Crear cuenta
- Link a Login
- Nota: También vas a poder comprar sin crear cuenta.

Validaciones:
- Nombre obligatorio
- Apellido obligatorio
- Email obligatorio y válido
- Contraseña obligatoria de al menos 8 caracteres

## Home

Orden recomendado:
1. Header
2. Hero
3. Selección destacada
4. Categorías
5. Bloque institucional breve
6. Espacio reservado para mapa
7. Footer

Hero:
- Sobrelínea: Cuero uruguayo hecho a mano
- Título: Carteras que se vuelven parte de tu día
- Subtítulo: Piezas artesanales creadas por Verónica Rossi para acompañar la vida real con belleza, orden y duración.
- CTA principal: Ver colección
- CTA secundario: Conocé el taller
- Texto de apoyo: Diseño sereno. Uso real. Detalle absoluto.

Selección destacada:
- Título: Selección destacada
- Bajada: Modelos elegidos por su carácter, su practicidad y la forma en que acompañan todos los días.

Categorías:
- Bolsos grandes
- Bolsos medianos
- Bolsos chicos
- Mochilas

Bloque institucional:
- Sobrelínea: Nuestro taller
- Título: Diez años haciendo piezas con tiempo, oficio y precisión
- Texto: ROSSI es el taller de Verónica Rossi, una artesana uruguaya que entiende el diseño desde la vida cotidiana. Cada cartera se realiza con materia prima nacional, una mirada casual del diseño y una atención minuciosa por cada terminación.

## Catálogo

Debe incluir:
- Sobrelínea: Colección ROSSI
- Título: Piezas pensadas para durar
- Subtítulo: Explorá carteras artesanales de cuero uruguayo hechas para acompañar la vida cotidiana con forma, funcionalidad y detalle.
- Listado de productos hardcodeados.
- Filtro simple por categoría, si se puede implementar sin complejidad.

Cada card debe mostrar:
- Imagen
- Categoría
- Nombre
- Descriptor corto
- Precio
- Botón Ver detalle
- Botón Agregar al carrito

## Detalle de producto

Debe incluir:
- Imagen principal
- Categoría
- Nombre
- Precio
- Disponibilidad
- Descripción corta
- Materiales
- Medidas ficticias
- Qué entra
- Cuidado del cuero
- Botón Agregar al carrito
- Botón Consultar por WhatsApp

## Carrito

Debe incluir:
- Sobrelínea: Carrito
- Título: Revisá tu selección
- Subtítulo: Antes de avanzar, confirmá cada pieza y ajustá lo que necesites con calma.
- Lista de productos agregados
- Cantidad
- Subtotal
- Botón para sumar cantidad
- Botón para restar cantidad
- Botón para eliminar
- Total
- Botón Finalizar compra
- Botón Seguir comprando

Estado vacío:
- Título: Tu carrito está vacío
- Subtítulo: Cuando una pieza te encuentre, la vas a ver acá.
- CTA: Explorar la colección

## Finalizar compra

Debe incluir:
- Sobrelínea: Último paso
- Título: Revisá y confirmá tu compra
- Subtítulo: Estás a un paso de completar tu pedido. Verificá tus datos y el resumen antes de confirmar.
- Formulario con:
  - Nombre
  - Email
  - Dirección
- Resumen de productos
- Total
- Botón Confirmar compra

Validaciones:
- Nombre obligatorio
- Email obligatorio y válido
- Dirección obligatoria

## Compra confirmada

Debe incluir:
- Sobrelínea: Compra confirmada
- Título: Gracias por elegir ROSSI
- Subtítulo: Tu pedido fue realizado con éxito. Ahora sigue nuestro trabajo: prepararlo con la misma atención con la que hacemos cada pieza.
- Número de pedido ficticio
- Correo de confirmación
- Estado del pedido
- Botón Seguir comprando
- Botón Ver mi pedido

## Perfil

Debe incluir:
- Sobrelínea: Mi cuenta
- Título: Todo lo importante, en un solo lugar
- Subtítulo: Desde acá podés seguir tus pedidos, revisar tus datos y volver a ver las piezas que guardaste.
- Datos ficticios del usuario
- Historial de compras hardcodeado
- Al seleccionar una compra, mostrar detalle de productos y total.