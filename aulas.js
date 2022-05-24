//Desarrolle un algoritmo que dados tres números determine cuál es el mayor de los tres
var readLineSync = require('readline-sync');
var nro1 = readLineSync.questionFloat('Ingrese el 1er numero: ');
var nro2 = readLineSync.questionFloat('Ingrese el 2do numero: ');
var nro3 = readLineSync.questionFloat('Ingrese el 3er numero: ');
var mayor = nro1;
if (nro2 > mayor) {
    mayor = nro2;
}
if (nro3 > mayor) {
    mayor = nro3;
}
 