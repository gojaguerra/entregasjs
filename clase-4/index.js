// hay 3 opciones de calculo para probar funciones


//Funcion para el calcular el IVA en ARGENTINA
function calculoIva(costo) {
  return costo * 0.21;
}

//Funcion para calcular GANANCIA
function calculoGanancia(costo1, margen) {
  return (costo1 * margen) / 100;
}

//Funcion para calcular DESCUENTO
function calculoDescuento(monto, descuento) {
  return monto - (monto * descuento) / 100;
}

alert("Bienvenidos al ejercicio de la Clase 4 - FUNCIONES");

let entrada = prompt(
  "Ingrese una de las siguientes opciones:" +
    "\n" +
    "1.- Calcular el IVA de un Producto" +
    "\n" +
    "2.- Calcular el margen de un producto con IVA incluido" +
    "\n" +
    "3.- Calcular el descuento de un producto con IVA incluido" +
    "\n" +
    "4.- Terminar"
);

while (entrada != "4") {
  if (parseInt(entrada) >= 1 && parseInt(entrada) <= 3) {
    switch (parseInt(entrada)) {
      case 1:
        let costo = prompt("Ingrese el precio para calcular el IVA");
        if (!isNaN(costo) && costo != null && costo != "") {
          let precioIva = parseFloat(calculoIva(costo));
          let ivaP = parseInt(costo) + precioIva;
          alert("El Precio con IVA del producto: es $ " + ivaP);
          break;
        } else {
          alert("No ingreso un número, por favor comience de nuevo");
          continue;
        }

      case 2:
        let costo1 = prompt(
          "Ingrese el costo del producto para calcular el margen de ganancia"
        );
        if (!isNaN(costo1) && costo1 != null && costo1 != "") {
          let margen = prompt("Ingrese el margen de ganancia para calcular ");
          if (!isNaN(margen) && margen != null && margen != "") {
            let precioMargen =
              parseInt(costo1) + parseFloat(calculoGanancia(costo1, margen));
            let precioFinal =
              precioMargen + parseFloat(calculoIva(precioMargen));
            alert(
              "El Precio con margen de ganancia del producto: es $ " +
                precioMargen
            );
            alert("El Precio Final con IVA del producto: es $ " + precioFinal);
            break;
          } else {
            alert("No ingreso un número, por favor comience de nuevo!");
            continue;
          }
        } else {
          alert("No ingreso un número, por favor comience de nuevo!");
          continue;
        }

        case 3:
          let costo2 = prompt("Ingrese el precio del producto:");
          if (!isNaN(costo2) && costo2 != null && costo2 != "") {

            let precioConIva = parseFloat(calculoIva(costo2));
            let precioFinal = parseInt(costo2) + precioConIva;
  
            let descuento = prompt("Ingrese % de descuento:");
            if (!isNaN(descuento) && descuento != null && descuento != "") {
              let precio = parseFloat(calculoDescuento(precioFinal, descuento));
              alert("El Precio con IVA del producto: es $ " + precio);
              break;
            } else {
              alert("No ingreso un número, por favor comience de nuevo");
              continue;
            }
          } else {
            alert("No ingreso un número, por favor comience de nuevo");
            continue;
          }

      default:
        break;
    }
  } else {
    alert(
      "Ingresaste una opción fuera del rango solicitado!. Ingreso: " + entrada
    );
  }

  entrada = prompt(
    "Ingrese una de las siguientes opciones:" +
      "\n" +
      "1.- Calcular el IVA de un Producto" +
      "\n" +
      "2.- Calcular el margen de un producto con IVA incluido" +
      "\n" +
      "3.- Calcular el descuento de un producto con IVA incluido" +
      "\n" +
      "4.- Terminar"
  );
}
