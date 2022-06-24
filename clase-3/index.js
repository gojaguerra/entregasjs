/* 
Solicitar un numero entre 1 y 10
Para terminar se debe ingresar la palabra fin
Sin ingresas 1 o 5 entra al case particular, sino va al default
*/

alert("Para finalizar debe ingresar la palabra fin");

let entrada = prompt("Ingrese un numero del 1 al 10: ").toLowerCase();

while (entrada != "fin") {
  if (parseInt(entrada) >= 1 && parseInt(entrada) <= 10) {
    switch (parseInt(entrada)) {
      case 1:
        alert("Ha ingresado el número UNO");
        break;
      case 5:
        alert("Ha ingresado el número CINCO");
        break;
      default:
        alert(`Ha ingresado ${entrada}`);
        break;
    }
  } else {
    alert("No ingreso un numero en el rango solicitado. Ingreso: " + entrada);
  }

  entrada = prompt("Ingrese un numero del 1 al 10: ").toLowerCase();
}
