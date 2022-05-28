let tamanoArreglo: number = Number(
    prompt("Ingrese el tamaño del arreglo Alumnos y Notas")
  );
  
  let arregloAlumnos: string[] = new Array(tamanoArreglo);
  let arregloNotasPrimerTrimestre: number[] = new Array(tamanoArreglo);
  let arregloNotasSegundoTrimestre: number[] = new Array(tamanoArreglo);
  let arregloNotasTercerTrimestre: number[] = new Array(tamanoArreglo);
  let arreglosuma: number[] = new Array(tamanoArreglo);
  let arreglopromedio: number[] = new Array(tamanoArreglo);
  function cargarArregloAlumnos(arreglo: string[], tamanoArreglo: number) {
    let indice: number = 0;
    for (indice = 0; indice < tamanoArreglo; indice++) {
      arreglo[indice] = String(prompt("Ingrese Alumno: " + indice));
    }
  }
  //FUNCION QUE LEE/MUESTRA ARREGLOS
  function leerArreglo(arreglo: string[], tamanoArreglo: number) {
    let indice: number = 0;
    for (indice = 0; indice < tamanoArreglo; indice++) {
      console.log(`El alumno  ${indice} :  ${arreglo[indice]}`);
    }
  }
  function cargarArregloNotas(arreglo: number[], tamanoArreglo: number) {
    let indice: number = 0;
    for (indice = 0; indice < tamanoArreglo; indice++) {
      arreglo[indice] = Number(prompt("Ingrese la nota: " + indice));
    }
  }
  //FUNCION QUE LEE/MUESTRA ARREGLOS
  function leerArregloNotas(
    arreglo: number[],
    arreglo1: number[],
    arreglo2: number[],
    arreglo3: string[],
  
    tamanoArreglo: number
  ) {
    let indice: number = 0;
    for (indice = 0; indice < tamanoArreglo; indice++) {
      console.log(
        ` Alumno: ${arreglo3[indice]}  nota trim.1:  ${arreglo[indice]} nota tri.2: ${arreglo1[indice]} nota trim.3:${arreglo2[indice]}`
      );
    }
  }
  function promediar(
    arreglo: number[],
    arreglo1: number[],
    arreglo2: number[],
    arreglo3: string[],
    arreglo4: number[],
    arreglo5: number[],
    tamanoArreglo: number
  ) {
    let indice: number = 0;
    for (indice = 0; indice < tamanoArreglo; indice++) {
      arreglo4[indice] = arreglo1[indice] + arreglo2[indice] + arreglo[indice];
      arreglo5[indice] = arreglo4[indice] / 3;
      console.log(
        `El alumno ${arreglo3[indice]} tiene promedio ${arreglo5[indice]}`
      );
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
  
  leerArregloNotas(
    arregloNotasPrimerTrimestre,
    arregloNotasSegundoTrimestre,
    arregloNotasTercerTrimestre,
    arregloAlumnos,
    tamanoArreglo
  );
  promediar(
    arregloNotasPrimerTrimestre,
    arregloNotasSegundoTrimestre,
    arregloNotasTercerTrimestre,
    arregloAlumnos,
    arreglosuma,
    arreglopromedio,
    tamanoArreglo
  );