const verify = document.getElementById('verificar') //boton que nos ayuda a confirmar password
const mensaje = document.querySelector('#mensaje') //variable que mostrara el mensaje de confirmacion

verify.addEventListener('click', function(){ //evento a disparar para confirmar
    let opt1 = document.getElementById('first').value //variable a considerar 1
    let opt2 = document.getElementById('second').value //variable a considerar 2
    let opt3 = document.getElementById('third').value //variable a considerar 3
    let password = opt1+opt2+opt3 //suma de variables para acceder
    if (password == "911") { //primera condicion
        mensaje.innerHTML = "Password 1 correcto" //mensaje de confirmacion condicion1
    } else if (password == "714") { //segunda condicion 
        mensaje.innerHTML = "Password 2 correcto" //mensaje de confirmacion condicion2
    } else { //ultima condicion
        mensaje.innerHTML = "Password incorrecto" //mensaje de confirmacion ultima condicion
    }
})