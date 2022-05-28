var arregloNotasAlumno = new Array(7, 6, 9, 5, 8, 7, 10, 4, 8);
var arregloMes = new Array("marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre");
var indice;
var mesDesaprobado;
var tamaño;
function desaprobarMes(arreglo, arreglo1, tamaño) {
    for (indice = 0; indice < tamaño; indice++) {
        if (arreglo[indice] < 6) {
            mesDesaprobado = arreglo1[indice];
            console.log("El alumno desaprobo en el mes de: ".concat(mesDesaprobado));
        }
    }
}
function buscarMayorNota(arreglo, tamaño) {
    for (indice = 0; indice < tamaño; indice++) {
        var maximo = void 0;
        maximo = Math.max(arreglo[0], arreglo[1], arreglo[2], arreglo[3], arreglo[4], arreglo[5], arreglo[6], arreglo[7], arreglo[8]);
    }
    console.log("El mayor promedio es: ".concat(maximo));
}
function buscarMenorNota(arreglo, tamaño) {
    for (indice = 0; indice < tamaño; indice++) {
        var minimo = void 0;
        minimo = Math.min(arreglo[0], arreglo[1], arreglo[2], arreglo[3], arreglo[4], arreglo[5], arreglo[6], arreglo[7], arreglo[8]);
    }
    console.log("El menor promedio es: ".concat(minimo));
}
function promediarArreglo(arreglo, tamaño) {
    var suma = 0;
    var promedio;
    for (indice = 0; indice < tamaño; indice++) {
        suma += arreglo[indice];
    }
    promedio = suma / 10;
    console.log("El promedio total es:  \n  ".concat(promedio));
}
desaprobarMes(arregloNotasAlumno, arregloMes, 9);
buscarMayorNota(arregloNotasAlumno, 9);
buscarMenorNota(arregloNotasAlumno, 9);
promediarArreglo(arregloNotasAlumno, 9);
