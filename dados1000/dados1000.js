var botonLanzar = document.getElementById("lanzarDados");
/* let resultado = <HTMLParagraphElement>document.getElementById("resultado");
 */
var resultadoDado1 = (document.getElementById("resultadoD1"));
var resultadoDado2 = (document.getElementById("resultadoD2"));
var cantidadSiete = document.getElementById("cantidad7");
var suman7 = document.getElementById("salio7");
var contador;
var sumaDados;
var dado1;
var dado2;
var tiros = 4;
var contadorDeSietes = 0;
function lanzarDado() {
    return Math.random() * 6 + 1;
}
botonLanzar.addEventListener("click", function() {
    for (contador = 0; contador <= tiros; contador++) {
        dado1 = parseInt(lanzarDado());
        dado2 = parseInt(lanzarDado());
        sumaDados = dado1 + dado2;
        resultadoDado1.innerHTML = "Dado 1: " + dado1;
        resultadoDado2.innerHTML = "Dado 2: " + dado2;
        suman7.innerHTML = sumaDados;
        console.log("TIRADA NUMERO: " + (contador + 1));
        console.log("DADO 1: " + dado1);
        console.log("DADO 2: " + dado2);
        /* console.log("contador de 7 totales: " + contadorDeSietes++); */
        if (sumaDados == '7') {
            console.log("SALIO EL SIETE!!!")
            suman7.innerHTML = "La suma dio 7!!!:  " + sumaDados;
            contadorDeSietes++;
            cantidadSiete.innerHTML = "El 7 salio: " + contadorDeSietes + " veces";
        } else {
            suman7.innerHTML = "La suma dio:  " + sumaDados;
        }
        dado1 = 0;
        dado2 = 0;
    }
});