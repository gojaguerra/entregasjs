import { verificoStorage } from "./app.js";
import { carritoVaciar } from "./carritoIndex.js";

/* const modalContenedor = document.querySelector('.modal-container');
const modalCarrito = document.querySelector('.modal-carrito')
const abrirCarrito = document.getElementById('open')
 */

const cerrarCarrito = document.getElementById('cerrar')
const finalizarCarrito = document.getElementById('finalizar')
const enviarCarrito = document.getElementById('enviar')

// Formulario modal para el envio del pedido
const myModal = document.getElementById('modalFinalizar')
const myInput = document.getElementById('customer-name')

// Posiciono el cursor en el campo nombre
myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

// CLICK PARA ABRIR EL CARRITO - EN EL HEADER
/* abrirCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
}) */

/* // CLICK BOTON CERRAR EN EL CARRITO - EN EL MODAL
cerrarCarrito.addEventListener('click', () => {
    modalContenedor.classList.remove('modal-active')
})

// CLICK FUERA DEL MODAL PARA CERRAR MODAL
modalContenedor.addEventListener('click', () => {
    cerrarCarrito.click();
}) */

/* modalCarrito.addEventListener('click', (e) => {
    e.stopPropagation();
}) */

/* cerrarCarrito.addEventListener('click', () => {
    modalContenedor.classList.remove('modal-active')
}) */

// muestro el pedido antes de mandarlo
finalizarCarrito.addEventListener('click', () => {
    
    let contenedor = document.getElementById("modalFinal");
    let productos = JSON.parse(localStorage.getItem("carritoFG"));
    let cantidad;

    // uso de OPERADORES AVANZADOS TERNARIOS y VERIFICO CANTIDAD DE ITEMS>0
    productos ? cantidad = productos.reduce((acumulador, precio) => acumulador + (precio.cantidad), 0) : 0;

    if(productos && cantidad>0){
        
        // PONGO EL BOTON COMO PRIMARIO y ENABLED
        enviarCarrito.classList.remove('btn-secondary')
        enviarCarrito.classList.add('btn-primary')
        enviarCarrito.removeAttribute("disabled")

        contenedor.innerHTML = "<h2>Confirmación de pedido</h2><br>";
        productos.forEach(element => {

            if(element.cantidad>0){
                let item = document.createElement("div");
                item.innerHTML = `cantidad: ${element.cantidad}
                                ${element.nombre}
                                - precio unit: $${element.precio}`;
                contenedor.append(item);
            }
        });

        const precioPedido = productos.reduce((acumulador, precio) => acumulador + (precio.precio * precio.cantidad), 0)
        
        let item = document.createElement("div");
        item.innerHTML = `<br><h3> TOTAL: $${precioPedido}</h3>`
        contenedor.append(item);
    
    } else {
        
        contenedor.innerHTML = "<h2>No habia ningún pedido!</h2><br>";

        // PONGO EL BOTON COMO SECUNDARIO y DISABLED
        enviarCarrito.classList.remove('btn-primary')
        enviarCarrito.classList.add('btn-secondary')
        enviarCarrito.setAttribute("disabled","")
    }
 
})


// ENVIO pedido y vacio local storage
enviar.addEventListener('click', () => {

    // borra el storage
    localStorage.clear();
    // borra el array de pedidos
    carritoVaciar();
    // cierra formulario modal
    cerrarCarrito.click();
    // acomoda contadores del carrito header
    verificoStorage();

    // limpia modal del pedido
    const contenedorCarrito = document.getElementById("carrito-contenedor")

    if(contenedorCarrito){
        contenedorCarrito.innerHTML = "";
    }

    let totalPedido = document.getElementById("elTotal");
    let precioPedido=0;
    totalPedido.innerHTML = `Total: $${precioPedido}`;

    // LUXON
    let DateTime = luxon.DateTime;
    let dt = DateTime.now();
    let fechaEntrega = dt.plus({ days: 2 }).toLocaleString()

    // SWEET ALERT
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Pedido enviado exitosamente!',
        text: `El envio llegara el ${fechaEntrega}`,
        showConfirmButton: false,
        timer: 10000
      })

})