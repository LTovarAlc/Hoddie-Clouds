const botonesAgregar = document.querySelectorAll('.add__carrito');
const carritoLink = document.querySelector('.nav__carrito a');
const carritoModal = document.getElementById('carritoModal');
const carritoProductos = [];

botonesAgregar.forEach((boton) => {
  boton.addEventListener('click', agregarAlCarrito);
});

carritoLink.addEventListener('click', mostrarVentanaCarrito);

function agregarAlCarrito(event) {
  const contenedorProducto = event.target.closest('.tarjetas');
  const nombreProducto = contenedorProducto.querySelector('.descripcion').textContent;
  const precioProducto = parseFloat(contenedorProducto.querySelector('.precio').textContent.replace('$', ''));
  agregarProductoAlCarrito(nombreProducto, precioProducto);
}

function agregarProductoAlCarrito(nombre, precio) {
  carritoProductos.push({ nombre, precio });
}

function mostrarProductosEnCarrito() {
  const carritoProductosContenedor = document.getElementById('carritoProductos');
  carritoProductosContenedor.innerHTML = '';

  carritoProductos.forEach((producto) => {
    const productoElemento = document.createElement('p');
    productoElemento.textContent = `${producto.nombre} - $${producto.precio.toFixed(2)}`;
    carritoProductosContenedor.appendChild(productoElemento);
  });
}

function mostrarVentanaCarrito(event) {
  event.preventDefault();
  mostrarProductosEnCarrito();
  carritoModal.style.display = 'block';
}

const cerrarCarritoBtn = document.getElementById('cerrarCarrito');
cerrarCarritoBtn.addEventListener('click', cerrarCarrito);

const limpiarCarritoBtn = document.getElementById('limpiarCarrito');
limpiarCarritoBtn.addEventListener('click', limpiarCarrito);

function limpiarCarrito() {
  carritoProductos.length = 0;
  mostrarProductosEnCarrito();
}

function cerrarCarrito() {
  carritoModal.style.display = 'none';
}

function mostrarProductosEnCarrito() {
  const carritoProductosContenedor = document.getElementById('carritoProductos');
  const carritoTotalElemento = document.getElementById('carritoTotal');

  carritoProductosContenedor.innerHTML = '';
  carritoTotalElemento.textContent = '';

  let totalCarrito = 0;

  carritoProductos.forEach((producto) => {
    const productoElemento = document.createElement('p');
    productoElemento.textContent = `${producto.nombre} - $${producto.precio.toFixed(2)}`;
    carritoProductosContenedor.appendChild(productoElemento);

    totalCarrito += producto.precio;
  });

  carritoTotalElemento.textContent = `Total: $${totalCarrito.toFixed(2)}`;
}

