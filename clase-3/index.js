/* 
FOR por conteo
for(desde; hasta; actualizacion) {
    codigo a repetir
}

*/

/* 
for(let i=0; i < 5; i++) {
    console.log("Hola ", i);
} 



for(let i=0; i < 5; i=i+1) {
    console.log("Hola ", i);
} 



let nombre="Jose";
console.log(`Hola ${nombre}`); 
 */

/* let numero = parseInt(promp("ingrese Numero"));
for (let index=0; index <= 10; index++) {
    let result = numero * index;
    let mensaje = `${numero} x ${index} = ${result}`;
    alert(mensaje);
} */

/* for(let i=0; i < 5; i++) {
    
    if(i===2){
        
        break;
}

    console.log("Hola ", i);

}

console.log("Finalizamos "); */

/* 
WHILE por condicion
*/

/* let i = 0;
while(i < 10){
    console.log("Hola", i);
    i++;
} */

/* let entrada = prompt("ingrese algo");
while(entrada != "fin"){
    alert(`ingresaste ${entrada}`);
    entrada = prompt("ingrese algo");
} */

/* let i=5;
do{
    console.log("Hola", i);
} while(i<3); */

/* let numero=4;
switch(numero){
    case 1:
        console.log("es un 1");
        break;

    case 3:
        console.log("es un 3");
        break;

    default:
        console.log("no es ninguno");
        break;
} */


let nacionalidad="Arg"
switch(nacionalidad){
    case "Arg":
        console.log("Argentino");
        break;
    default:
        console.log("oreo user");
        break;
}
