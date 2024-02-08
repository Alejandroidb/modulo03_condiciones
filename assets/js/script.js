const img = document.getElementById('car') //crear la constante que se modificara
let contador = 0 // crear una variable que servira de gatillo para volver al origen

img.addEventListener('click', function(){ //al clickear la imagen se modificará 
    element = document.querySelector('#car') //elemento a modificar
    if (contador == 0) { //condicion que gatilla gracias a la variable
        element.style.border="solid red 2px"; //caracteristicas a agregar
        contador = 1 //condicion cambiada al clickear
        console.log(contador)
    }
    else  { //volvemos a reiniciar el gatillo y eliminamos la caracteristica agregada previamente
        element.style.border=""
        contador = 0
        console.log(contador)
    }
    
})
