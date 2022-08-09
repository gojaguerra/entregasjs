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

// OBTENGO LOS PRODUCTOS CON FETCH
const productos = [];

const cargarProductos = async () => {
  const response = await fetch("./data.json")
  const productosJson = await response.json();

  productosJson.forEach(producto => {
    productos.push(new NewProductos(producto.id, producto.nombre, producto.desc, producto.precio, producto.img, producto.cantidad));
  });
};

cargarProductos();

export { productos };

/* const productosLista = [];

const cargar = async () => {
  const response = await fetch()
  const productos = await response.json();

  productos.forEach(producto => {
    productosLista.push(new Producto(producto. nombre, produco.precio));
  });
}; */