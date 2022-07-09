// DEFINO UNA CLASE para almacenar los distintos items de una carta del menu de la hamburgueseria

class Menues{
    constructor(codigo, nombre, descripcion, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.disponible = false;
    }
    
    stockSi() {
        this.disponible=true;
    }

}

// funcion para encontrar un producto y asignarle la propiedad DISPONIBLE
// la fncion devuelve el objeto si fue exitosa y sino lo fue devuelve false
function estado(arreglo, codigo, hay){
    let busqueda = arreglo.find(elemento => elemento.codigo===codigo);
        
    if(busqueda != undefined){
        busqueda.disponible=hay;
        return busqueda;
    } 
    
    return false;

}

// Creo los objetos en el array
const cartaPublico = [];
cartaPublico.push(new Menues(1,"Burguer Plane", "Hamburguesa al plato con guarnicion a eleccion", 900));
cartaPublico.push(new Menues(2, "Cheese Burguer", "Hamburguesa con queso y salsa especial", 1000));
cartaPublico.push(new Menues(3, "Bacon Burguer", "Hamburguesa con panceta y queso a eleccion", 1200));
cartaPublico.push(new Menues(4, "Veggie Burguer", "Hamburguesa vegetariana", 1200));
cartaPublico.push(new Menues(5, "Completa", "Hamburguesa con todo", 1400));

// los habilito para la venta cambiando la propiedad disponible

for(const objeto of cartaPublico){
    objeto.stockSi();
}
console.log(cartaPublico);

// busco el producto 1 le cambio la propiedad disponible a false
let resultado1 = estado(cartaPublico, 1,false);
if (resultado1){
    console.log("Cambio exitoso en articulo:" + resultado1.nombre);
    if (resultado1.disponible){
       console.log("HAY para vender");
    } else {
        console.log("NO HAY para vender");
    }
} else {
    console.log("No se encontro el producto!!!");
}


// busco el producto 2 y le cambio la propiedad disponible a true
let resultado2 = estado(cartaPublico, 2,true);
if (resultado2){
    console.log("Cambio exitoso en articulo:" + resultado2.nombre);
    if (resultado2.disponible){
       console.log("HAY para vender");
    } else {
        console.log("NO HAY para vender");
    }
} else {
    console.log("No se encontro el producto!!!");
}


// busco el producto 20 que no existe y le cambio la propiedad disponible a true
let resultado3 = estado(cartaPublico, 20,true);
if (resultado3){
    console.log("Cambio exitoso en articulo:" + resultado3.nombre);
    if (resultado3.disponible){
       console.log("HAY para vender");
    } else {
        console.log("NO HAY para vender");
    }
} else {
    console.log("No se encontro el producto!!!");
}
