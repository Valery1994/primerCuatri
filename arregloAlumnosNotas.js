var tamanoArreglo = Number(prompt("Ingrese el tamaño del arreglo Alumnos y Notas"));
var arregloAlumnos = new Array(tamanoArreglo);
var arregloNotasPrimerTrimestre = new Array(tamanoArreglo);
var arregloNotasSegundoTrimestre = new Array(tamanoArreglo);
var arregloNotasTercerTrimestre = new Array(tamanoArreglo);
var arreglosuma = new Array(tamanoArreglo);
var arreglopromedio = new Array(tamanoArreglo);
function cargarArregloAlumnos(arreglo, tamanoArreglo) {
    var indice = 0;
    for (indice = 0; indice < tamanoArreglo; indice++) {
        arreglo[indice] = String(prompt("Ingrese Alumno: " + indice));
    }
}
//FUNCION QUE LEE/MUESTRA ARREGLOS
function leerArreglo(arreglo, tamanoArreglo) {
    var indice = 0;
    for (indice = 0; indice < tamanoArreglo; indice++) {
        console.log("El alumno  ".concat(indice, " :  ").concat(arreglo[indice]));
    }
}
function cargarArregloNotas(arreglo, tamanoArreglo) {
    var indice = 0;
    for (indice = 0; indice < tamanoArreglo; indice++) {
        arreglo[indice] = Number(prompt("Ingrese la nota: " + indice));
    }
}
//FUNCION QUE LEE/MUESTRA ARREGLOS
function leerArregloNotas(arreglo, arreglo1, arreglo2, arreglo3, tamanoArreglo) {
    var indice = 0;
    for (indice = 0; indice < tamanoArreglo; indice++) {
        console.log(" Alumno: ".concat(arreglo3[indice], "  nota trim.1:  ").concat(arreglo[indice], " nota tri.2: ").concat(arreglo1[indice], " nota trim.3:").concat(arreglo2[indice]));
    }
}
function promediar(arreglo, arreglo1, arreglo2, arreglo3, arreglo4, arreglo5, tamanoArreglo) {
    var indice = 0;
    for (indice = 0; indice < tamanoArreglo; indice++) {
        arreglo4[indice] = arreglo1[indice] + arreglo2[indice] + arreglo[indice];
        arreglo5[indice] = arreglo4[indice] / 3;
        console.log("El alumno ".concat(arreglo3[indice], " tiene promedio ").concat(arreglo5[indice]));
    }
}
alert("Ingrese primer arreglo Alumnos");
cargarArregloAlumnos(arregloAlumnos, tamanoArreglo);
leerArreglo(arregloAlumnos, tamanoArreglo);
alert("Ingrese notas del primer trimestre");
cargarArregloNotas(arregloNotasPrimerTrimestre, tamanoArreglo);
alert("Ingrese notas del segundo trimestre");
cargarArregloNotas(arregloNotasSegundoTrimestre, tamanoArreglo);
alert("Ingrese notas del tercer trimestre");
cargarArregloNotas(arregloNotasTercerTrimestre, tamanoArreglo);
leerArregloNotas(arregloNotasPrimerTrimestre, arregloNotasSegundoTrimestre, arregloNotasTercerTrimestre, arregloAlumnos, tamanoArreglo);
promediar(arregloNotasPrimerTrimestre, arregloNotasSegundoTrimestre, arregloNotasTercerTrimestre, arregloAlumnos, arreglosuma, arreglopromedio, tamanoArreglo);

