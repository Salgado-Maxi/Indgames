let contadorCarrito = 0;

const botonesAgregar = document.querySelectorAll('.product-card button');
const textoCarrito = document.querySelector('header .cart');

botonesAgregar.forEach((boton) => {
    boton.addEventListener('click', () => {
        contadorCarrito++;
        textoCarrito.textContent = `🛒 Carrito (${contadorCarrito})`;
    });
});
