/* 

en este FOR deberias ingresar los nombres de 4 alumnos
puse un CONTINUE para que se salteara el nombre de la posicion 3

*/


for (let i=1; i<=5; i++){

  if (i==3){
    continue;
  }

  let ingresarAlumno = prompt("Ingrese nombre del alumno"+i+": ");

  alert(" FOR numero:"+i+" Alumno: "+ingresarAlumno);

}