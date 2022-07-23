import { verificoStorage } from "./app.js";

const modalContenedor = document.querySelector('.modal-container');
const abrirCarrito = document.getElementById('open')
const cerrarCarrito = document.getElementById('cerrar')
const finalizarCarrito = document.getElementById('finalizar')
const modalCarrito = document.querySelector('.modal-carrito')


// CLICK PARA ABRIR EL CARRITO - EN EL HEADER
abrirCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
})

// CLICK BOTON CERRAR EN EL CARRITO - EN EL MODAL
cerrarCarrito.addEventListener('click', () => {
    modalContenedor.classList.remove('modal-active')
})

// CLICK FUERA DEL MODAL PARA CERRAR MODAL
modalContenedor.addEventListener('click', () => {
    cerrarCarrito.click();
})

modalCarrito.addEventListener('click', (e) => {
    e.stopPropagation();
})

// ENVIO pedido y vacio local storege
finalizarCarrito.addEventListener('click', () => {

    let contenedor = document.getElementById("modalFinal");

    contenedor.innerHTML = "<h2>Se envio el pedido</h2>";
    let productos = JSON.parse(localStorage.getItem("carritoFG"));

    if(productos){
        productos.forEach(element => {
            let item = document.createElement("div");
            item.innerHTML = `cantidad: ${element.cantidad}
                            ${element.nombre}
                            - precio unit: $${element.precio}`;
            contenedor.append(item);
        });

        const precioPedido = productos.reduce((acumulador, precio) => acumulador + (precio.precio * precio.cantidad), 0)
        let item = document.createElement("div");
        item.innerHTML = `<h3> TOTAL: $${precioPedido}</h3>`
        contenedor.append(item);
    
    }

    localStorage.clear();
    cerrarCarrito.click();
    verificoStorage();

})