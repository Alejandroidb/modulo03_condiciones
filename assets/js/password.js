const verify = document.getElementById('verificar')
const mensaje = document.querySelector('#mensaje')

verify.addEventListener('click', function(){
    let opt1 = document.getElementById('first').value
    let opt2 = document.getElementById('second').value
    let opt3 = document.getElementById('third').value
    let password = opt1+opt2+opt3
    if (password == "911") {
        mensaje.innerHTML = "Password 1 correcto"
    } else if (password == "714") {
        mensaje.innerHTML = "Password 2 correcto"
    } else {
        mensaje.innerHTML = "Password incorrecto"
    }
})