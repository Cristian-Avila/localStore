console.log('♦♦♦ Login ♦♦♦')

const loginIn = document.getElementById('loginIn')

loginIn.addEventListener('submit',(e) =>{
    e.preventDefault();

    const alert = document.getElementById('alert')
    var nickname = document.getElementById('nickname').value;
    var contrasena = document.getElementById('contrasena').value;

    let array = JSON.parse(localStorage.getItem('ListaUsuarios'))

    for (let i = 0; i < array.length; i++) {
        var indice = array[i];
        var usuarioUsando = indice.user
        var passUsando = indice.password
        if (nickname == usuarioUsando && contrasena == passUsando) {

            window.location = "inicio.html";
        }
        else {
            alert.innerText = "Datos Ingresados Incorrectos";
        }
    }   
    
})

