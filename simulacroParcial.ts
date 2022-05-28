let arregloNotasAlumno: number[] = new Array(7, 6, 9, 5, 8, 7, 10, 4, 8);
let arregloMes: string[] = new Array(
  "marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Setiembre",
  "Octubre",
  "Noviembre"
);
let indice: number;
let mesDesaprobado: string;
let tamaño: number;

function desaprobarMes(arreglo: number[], arreglo1: string[], tamaño: number) {
  for (indice = 0; indice < tamaño; indice++) {
    if (arreglo[indice] < 6) {
      mesDesaprobado = arreglo1[indice];

      console.log(`El alumno desaprobo en el mes de: ${mesDesaprobado}`);
    }
  }
}
function buscarMayorNota(arreglo: number[], tamaño: number) {
  for (indice = 0; indice < tamaño; indice++) {
    let maximo: number;
    maximo = Math.max(
      arreglo[0],
      arreglo[1],
      arreglo[2],
      arreglo[3],
      arreglo[4],
      arreglo[5],
      arreglo[6],
      arreglo[7],
      arreglo[8]
    );
  }
  console.log(`El mayor promedio es: ${maximo}`);
}
function buscarMenorNota(arreglo: number[], tamaño: number) {
  for (indice = 0; indice < tamaño; indice++) {
    let minimo: number;
    minimo = Math.min(
      arreglo[0],
      arreglo[1],
      arreglo[2],
      arreglo[3],
      arreglo[4],
      arreglo[5],
      arreglo[6],
      arreglo[7],
      arreglo[8]
    );
  }
  console.log(`El menor promedio es: ${minimo}`);
}
function promediarArreglo(arreglo: number[], tamaño: number) {
  let suma: number = 0;
  let promedio: number;
  for (indice = 0; indice < tamaño; indice++) {
    suma += arreglo[indice];
  }
  promedio = suma / 10;
  console.log(`El promedio total es:  
  ${promedio}`);
}
desaprobarMes(arregloNotasAlumno, arregloMes, 9);
buscarMayorNota(arregloNotasAlumno, 9);
buscarMenorNota(arregloNotasAlumno, 9);
promediarArreglo(arregloNotasAlumno, 9);
