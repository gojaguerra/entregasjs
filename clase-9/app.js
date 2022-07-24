import {
    productos
} from './stock.js'
import {
    carritoIndex
} from './carritoIndex.js';

const mostrarProductos = (productos) => {
    const contenedorProductos = document.getElementById('producto-contenedor');

    productos.forEach(producto => {
        const div = document.createElement('div')
        div.classList.add('card')
        div.innerHTML += `<div class="card" style="width: 18rem;">
                            <img src="${producto.img}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${producto.nombre}</h5>
                                <p class="card-text">Descripción:  ${producto.desc}</p>
                                <p class="card-text">Precio:$ ${producto.precio}</p>
                                <button class="btn btn-primary" id=boton${producto.id}>Comprar</button>
                            </div>
                        </div>`

        contenedorProductos.appendChild(div)

        const boton = document.getElementById(`boton${producto.id}`)
        boton.addEventListener('click', () => {
            carritoIndex(producto.id);
            // alert(`Se agrego ${producto.nombre}`);

        })

    })

}

export function verificoStorage() {
    let listaProductos;
    let carritoStorage = JSON.parse(localStorage.getItem("carritoFG"));
    
    if (carritoStorage) {
        listaProductos = carritoStorage;
    } else {
        listaProductos = [];
    }
    
    // pongo el contador en cero, por si no hay items en el carrito
    let cantidadPedido = document.getElementById("contador-carrito");
    let cantidad=0;
    cantidadPedido.innerHTML = `${cantidad}`;

    listaProductos.forEach(ele => {
        let i=0;
        for(i=0;i<ele.cantidad;i++){
        carritoIndex(ele.id);
        }
    })

}

mostrarProductos(productos);

verificoStorage();
