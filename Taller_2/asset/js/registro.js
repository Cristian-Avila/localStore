console.log ("*** REGISTRO ***");

const Usuarios = [];
const formularioIn = document.getElementById('formularioIn')

formularioIn.addEventListener ('submit',(e) =>{
    e.preventDefault();

    const alert = document.getElementById('alert');
    var nombre =  document.getElementById('nombre').value
    var usuario = document.getElementById('usuario').value
    var pass = document.getElementById('pass').value
    
    const NuevoUsuario = {
        name: nombre,
        user: usuario,
        password: pass
    }

    if (localStorage.getItem('ListaUsuarios') == null) {    
        ListaUsuario(NuevoUsuario);
        alert.innerText = 'Registro exitoso'
    } else {
        for (let i = 0; i < Usuarios.length; i++) {
            var indice = Usuarios[i];
            var usuarioUsando = indice.user
        }
        if (usuario === usuarioUsando) {
            alert.innerText = 'Registre un distinto usuario'
        }else{
            ListaUsuario(NuevoUsuario);
            alert.innerText = 'Registro exitoso'
        }

    }
    
})


const ListaUsuario = (NuevoUsuario) =>{
    Usuarios.push(NuevoUsuario);
    localStorage.setItem('ListaUsuarios',JSON.stringify(Usuarios));
}