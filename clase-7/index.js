// DEFINO UNA CLASE para almacenar los distintos combos del menu de la hamburgueseria
class Menues{
    constructor(codigo, nombre, descripcion, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = 0;
        this.disponible = false;
    }
    
    disponibleSi() {
        this.disponible=true;
    }

}

// DEFINO UNA CLASE para almacenar los items del carrito
class Carrito{
    constructor(codigo, nombre, precio, cantidad) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    
}

// Funcion para encontrar un producto y asignarle la propiedad DISPONIBLE
// la funcion devuelve el objeto si fue exitosa y sino lo fue devuelve false
function estado(arreglo, codigo, hay){
    let busqueda = arreglo.find(elemento => elemento.codigo===codigo);
        
    if(busqueda != undefined){
        busqueda.disponible=hay;
        return busqueda;
    } 
    
    return false;

}

// Funcion para vender productos, si no hay devuelve cero asi puedo controlar errores o bajo stock
function vender(arreglo, codigo, cantidad){
    let busqueda = arreglo.find(elemento => elemento.codigo===codigo);
        
    if(busqueda != undefined){
        if (busqueda.stock>0){
            busqueda.stock=busqueda.stock-1;
            return busqueda;
        } else {
            // no hay stock
            return 0;
        }
    } 
    
    // no encontro el producto
    return false;

}

// Funcion para buscar dentro del carrito
function buscarCarrito(arreglo, codigo, nombre, precio, cantidad){
    let busqueda = arreglo.find(elemento => elemento.codigo===codigo);
        
    if(busqueda != undefined){
        // ya estab sumo un item
        busqueda.precio=busqueda.precio+precio;
        busqueda.cantidad=busqueda.cantidad+cantidad;
    } else {
        // lo agrego porque es nuevo
        pedido.push(new Carrito(codigo,nombre,precio,cantidad));
    }

}

// Defino los objetos/productos en el array
const cartaPublico = [];
cartaPublico.push(new Menues(1,"Burguer Plane", "Hamburguesa al plato con guarnicion a eleccion", 900));
cartaPublico.push(new Menues(2, "Cheese Burguer", "Hamburguesa con queso y salsa especial", 1000));
cartaPublico.push(new Menues(3, "Bacon Burguer", "Hamburguesa con panceta y queso a eleccion", 1200));
cartaPublico.push(new Menues(4, "Veggie Burguer", "Hamburguesa vegetariana", 1200));
cartaPublico.push(new Menues(5, "Completa", "Hamburguesa con todo", 1400));

// Defino un array para guardar el pedido/venta
const pedido = [];
// Variable para almacenar montos de la venta
let impTotal=0;
//  Variable para almacenar el string de productos
let losProductos="";

// los habilito para la venta cambiando la propiedad disponible
for(const objeto of cartaPublico){
    objeto.disponibleSi();
}

// les asigno stock de 2 unidades a cada uno
for(const objeto of cartaPublico){
    objeto.stock=2;
}

// Armo string con los productos disponibles para mostrar al cliente
for(const objeto of cartaPublico){
    if(objeto.disponible){
        losProductos=losProductos + "Combo " + objeto.codigo + " - "+ objeto.nombre + ": $" + objeto.precio + "\n"
    }
}

losProductos="Elija los productos a comprar, para finalizar escriba FIN"+"\n"+"\n"+losProductos

let entrada = prompt(losProductos);

while (entrada.toUpperCase() != "FIN") {
    
    if (parseInt(entrada) > 0) {

        // busco el producto a ver si existe y tiene stock
        let item = vender(cartaPublico, parseInt(entrada), 1)

        // si pude venderlo devuelve el objeto
        if (item) {
            buscarCarrito(pedido, item.codigo, item.nombre, item.precio, 1);
            alert("producto cargado al carrito");
        } else {
            
            if (item===0){
                alert("No se pudo vender ya que no quedan mas combos del seleccionado!");
            } else {
                alert("El item ingresado no se encontro en la lista de combos!");
            }

        }

    } else {
        alert("Ingresaste una opción fuera del rango solicitado!. Ingreso: " + entrada);
    }

    entrada = prompt(losProductos);

}

let frasePedido="";

for(const objeto of pedido){ 

    frasePedido=frasePedido + objeto.cantidad + " del Combo " + objeto.codigo + " - "+ objeto.nombre + ": $" + objeto.precio + "\n";
    impTotal=impTotal+objeto.precio;
}

if (frasePedido!=""){
    frasePedido="Su pedido es:" + "\n" + frasePedido + "\n" + "\n" + "El total es: $" + impTotal;
    alert(frasePedido);
} else {
    alert("No ha pedido nada :(");
}


