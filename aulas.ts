//Desarrolle un algoritmo que dados tres números determine cuál es el mayor de los tres
let readLineSync = require('readline-sync');
let nro1 = readLineSync.questionFloat('Ingrese el 1er numero: ');
let nro2 = readLineSync.questionFloat('Ingrese el 2do numero: ');
let nro3 = readLineSync.questionFloat('Ingrese el 3er numero: ');

let mayor = nro1;

if (nro2 > mayor) {
    mayor = nro2;
}
if (nro3 > mayor) {
    mayor = nro3;
}

 
