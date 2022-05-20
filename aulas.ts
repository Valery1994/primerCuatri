let botonAlumnos = <HTMLButtonElement>document.getElementById("btnEnviar1");
let dato1 = <HTMLInputElement>document.getElementById("dato1");
let resultado = <HTMLParagraphElement>document.getElementById("resultado");
botonAlumnos.addEventListener("click", () => {
  let cantidadInfantes: number = Number(dato1.value);

  if (cantidadInfantes <= 30) {
    console.log("Se le asigna sala amarilla");
    resultado.innerHTML = "Se le asigna la sala amarilla";
  }
  if (cantidadInfantes > 30 && cantidadInfantes <= 35) {
    console.log("Se le asigna sala verde");
    resultado.innerHTML = "Se le asigna la sala verde";
  } else if (cantidadInfantes > 35 && cantidadInfantes <= 40) {
    console.log("Se le asigna sala azul");
    resultado.innerHTML = "Se le asigna la sala azul";
  }
});
Desarrolle un algoritmo que dados tres números determine cuál es el mayor de los tres
let readlineSync = require('readline-sync');
let nro1 = readlineSync.questionFloat('Ingrese el 1er numero: ');
let nro2 = readlineSync.questionFloat('Ingrese el 2do numero: ');
let nro3 = readlineSync.questionFloat('Ingrese el 3er numero: ');

let mayor = nro1;

if (nro2 > mayor) {
    mayor = nro2;
}
if (nro3 > mayor) {
    mayor = nro3;
}

//Desarrolle un algoritmo que dados tres números determine cuál es el mayor de los tres
let readlineSync = require('readline-sync');
let nro1 = readlineSync.questionFloat('Ingrese el 1er numero: ');
let nro2 = readlineSync.questionFloat('Ingrese el 2do numero: ');
let nro3 = readlineSync.questionFloat('Ingrese el 3er numero: ');

let mayor = nro1;

if (nro2 > mayor) {
    mayor = nro2;
}
if (nro3 > mayor) {
    mayor = nro3;
}

console.log("El numero mas grande ingresado es: " + mayor);
