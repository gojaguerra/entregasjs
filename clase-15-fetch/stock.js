// CLASE PARA DEFINIR LOS PRODUCTOS
class NewProductos{
    constructor(id, nombre, desc, precio, img, cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.desc = desc;
        this.precio = precio;
        this.img = img
        this.cantidad = cantidad;
        this.disponible = false;
    }
    
    disponibleSi() {
        this.disponible=true;
    }

}

// CREO LOS PRODUCTOS
const productos = [];
productos.push(new NewProductos(1,"Lampara Colgante", "Lampara de pared, madera de eucalipto, foco vintage.", 4500, "src/img/carrito01.jpeg",10));
productos.push(new NewProductos(2,"Soporte Bicicleta", "Encastre metalico en eje rueda delantera", 6500, "src/img/carrito02.jpeg",10));
productos.push(new NewProductos(3,"Escritorio Revatible", "Estructura metalica, tapa de paraiso.", 8000, "src/img/carrito03.jpeg",10));
productos.push(new NewProductos(4,"Tablas para Picada", "Madera de eucalipto. Incluye cera para mantenimiento.", 3000, "src/img/carrito04.jpeg",10));
productos.push(new NewProductos(5,"Perchero de Pared", "Madera de eucalipto laqueada con perchas aluminio mate.", 5000, "src/img/carrito05.jpeg",10));
productos.push(new NewProductos(6,"Lampara Hexagonal", "Lampara de mesa, madera de eucalipto, con foco vintage.", 7000, "src/img/carrito06.jpeg",10));

export { productos };