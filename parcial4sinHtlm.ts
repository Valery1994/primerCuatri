let tamaño: number = Number(prompt(`ingrese numero`));
let arregloDecreciente: number[] = new Array(tamaño);

function llenarArreglo(arreglo: number[], tamaño: number) {
  for (let indice = tamaño--; indice > 0; indice--) {
    let indice: number = tamaño--;
    let elemento: number = indice + 1;
    arreglo[indice] = elemento;

    /*console.log(`El arreglo es:${[indice]} es ${arreglo[indice]} `);*/
  }
}
function mostrarArreglo(arreglo: number[], tamaño: number) {
  let cadena: string = "";
  for (let indice = tamaño - 1; indice >= 0; indice--) {
    cadena = cadena + arreglo[indice] + " ";
  }
  console.log(cadena);
}
llenarArreglo(arregloDecreciente, tamaño);
mostrarArreglo(arregloDecreciente, tamaño);
