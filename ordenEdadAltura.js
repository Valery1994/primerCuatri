var nombres = ["Carla", "Lucía", "Marta", "Cecilia"], edades = [89, 24, 24, 7], alturas = [164, 172, 181, 168];
function cargarPersonas() {
    // Esta función se ejecuta para recibir los datos del usuario
}
function mostrarPorPantalla(names, ages, heights) {
    for (var i = 0; i < names.length; i++) {
        // Acá va el innerHTML
        console.log("".concat(names[i], ": ").concat(ages[i], " a\u00F1os y ").concat(heights[i], " cm de altura"));
    }
}
function comparar(ages, heights, i, j) {
    var comparacion;
    if (ages[i] === ages[j]) {
        if (heights[i] === heights[j]) {
            comparacion = 0;
        }
        else if (heights[i] < heights[j]) {
            comparacion = -1;
        }
        else {
            comparacion = 1;
        }
    }
    else if (ages[i] < ages[j]) {
        comparacion = -1;
    }
    else {
        comparacion = 1;
    }
    return comparacion;
}
function intercambiar(arr, i, j) {
    var aux = arr[i];
    arr[i] = arr[j];
    arr[j] = aux;
}
function ordenarPorBurbuja(names, ages, heights) {
    for (var i = 1; i <= names.length; i++) {
        for (var j = 0; j < names.length - i; j++) {
            if (comparar(ages, heights, j, j + 1) === 1) {
                intercambiar(nombres, j, j + 1);
                intercambiar(edades, j, j + 1);
                intercambiar(alturas, j, j + 1);
            }
        }
    }
}
console.log("Antes de ordenarlos:");
mostrarPorPantalla(nombres, edades, alturas);
ordenarPorBurbuja(nombres, edades, alturas);
console.log("Después de ordenarlos:");
mostrarPorPantalla(nombres, edades, alturas);
