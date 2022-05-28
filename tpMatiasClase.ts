let botonBase = <HTMLButtonElement>document.getElementById("btnEnviar1");
let botonExponente = <HTMLButtonElement>document.getElementById("btnEnviar2");
let botonResultado = <HTMLButtonElement>document.getElementById("btnEnviar3");
let dato1 = <HTMLInputElement>document.getElementById("dato1");
let dato2 = <HTMLInputElement>document.getElementById("dato2");
let resultado = <HTMLParagraphElement>document.getElementById("resultado");
let base: number;
let exponente: number;
function potenciar(base: number, exponente: number) {
  return Number(Math.pow(base, exponente));
}

botonBase.addEventListener("click", () => {
  base = Number(dato1.value);
});
botonExponente.addEventListener("click", () => {
  exponente = Number(dato2.value);
});
botonResultado.addEventListener("click", () => {
  resultado.innerHTML = "La potencia es " + potenciar(base, exponente);

  console.log(potenciar(base, exponente));
});
