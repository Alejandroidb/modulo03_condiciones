let verify = document.getElementById("bton"); //El boton que nos ayudará a verificar la cantidad
let mensaje = document.querySelector('#mensaje')

verify.addEventListener("click", function () { //el evento que funciona al click 
  let cantidad1 = parseInt(document.getElementById("input1").value); //variable de input
  let cantidad2 = parseInt(document.getElementById("input2").value); //variable de input
  let cantidad3 = parseInt(document.getElementById("input3").value); //variable de input
  let sumar = cantidad1 + cantidad2 + cantidad3; //variable que suma las cantidades de input
  if (sumar > 10) { //primera condicion
    mensaje.innerHTML = "Llevas demasiados stickers"; //mensaje a mostrar
  } else if (sumar <= 10) { //segunda condicion
    mensaje.innerHTML =
      "Llevas " + sumar + " Stickers"; //mensaje a mostrar
  }
});
