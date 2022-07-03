let botonInscripcion = document.getElementById("btnEnviar1");
let edad = document.getElementById("edad");
let principiante =document.getElementById("principiante") ;
let adelantado = document.getElementById("adelantado")  
let clasePrueba =document.getElementById("clasePrueba")  ;
let mensaje =  document.getElementById("mensaje");
 
 botonInscripcion.addEventListener("click", (e)=>{ 
  e.preventDefault();
     
if((principiante.checked==true )&& ((Number(edad.value)) <= 8)){
    console.log(edad.value)
    alert("Inscripcion realizada con exito, su horario de clases es: Lunes y miercoles a las 10 hs. ")
    mensaje.innerHTML =
      " Inscripcion realizada con exito, su grupo es Principiantes 6-8 años y su horario de clases es: Lunes y miercoles a las 10 hs.";

}else if((adelantado.checked==true )&& ((Number(edad.value)) <= 8)){
    console.log(edad.value)
    alert("Inscripcion realizada con exito, su horario de clases es: Lunes y miercoles a las 11 hs. ")
    mensaje.innerHTML =
      " Inscripcion realizada con exito, su grupo es Adelantados 6-8 años ysu horario de clases es: Lunes y miercoles a las 11 hs.";
}else if((principiante.checked==true )&& ((Number(edad.value)) > 8)&& (Number(edad.value)<=12)){
    alert("Inscripcion realizada con exito, su horario de clases es: Martes y Jueves a las 10 hs.")
    mensaje.innerHTML =
    " Inscripcion realizada con exito, su grupo es Principiantes 9-12 años y su horario de clases es: Martes y Jueves a las 10 hs.";
}else if((adelantado.checked==true )&& ((Number(edad.value)) > 8)&& (Number(edad.value)<=12)){
    alert("Inscripcion realizada con exito, su horario de clases es: Martes y Jueves a las 11 hs.")
    mensaje.innerHTML =
    " Inscripcion realizada con exito, su grupo es Adelantados 9-12 años y su horario de clases es: Martes y Jueves a las 11 hs.";
}else if((principiante.checked==true )&& ((Number(edad.value)) > 12)&& (Number(edad.value)<=18)){
    alert("Inscripcion realizada con exito, su horario de clases es:Lunes y Miercoles a las 14 hs.")
    mensaje.innerHTML =
    " Inscripcion realizada con exito, su grupo es Principiantes 13-18 años y su horario de clases es:  Lunes y Miercoles a las 14 hs.";
}else if((adelantado.checked==true )&& ((Number(edad.value)) > 12)&& (Number(edad.value)<=18)){
    alert("Inscripcion realizada con exito, su horario de clases es:  Lunes y Miercoles a las 15 hs.")
    mensaje.innerHTML =
    " Inscripcion realizada con exito, su grupo es Adelantados 13-18 años y su horario de clases es:  Lunes y Miercoles a las 15 hs.";
}else if((principiante.checked==true )&& ((Number(edad.value)) > 18)){
    alert("Inscripcion realizada con exito, su horario de clases es:Lunes y Viernes a las 16 hs.")
    mensaje.innerHTML =
    " Inscripcion realizada con exito, su grupo es Principiantes adulto y su horario de clases es:  Lunes y Viernes a las 16 hs.";
}else if((adelantado.checked==true )&& ((Number(edad.value)) > 12)){
    alert("Inscripcion realizada con exito, su horario de clases es:  Lunes y Viernes a las 17 hs.")
    mensaje.innerHTML =
    " Inscripcion realizada con exito, su grupo es Adelantados adulto y su horario de clases es:  Lunes y Viernes a las 17 hs.";
}else if(clasePrueba.checked==true){
    alert("Realice su clase de prueba cualquier dia de la semana de 10 a 14 hs.")
    mensaje.innerHTML="Realice su clase de prueba cualquier dia de la semana de 10 a 14 hs."
}else{
    alert("no apreto nada")
    mensaje.innerHTML="Debe seleccionar una categoria"
}
});
