console.log('♣♣♣ Perfil ♣♣♣')

const cargarDatos = () =>{

    let array = JSON.parse(localStorage.getItem('ListaUsuarios'))
    const welcome = document.getElementById('welcome');
    var nombreUsando = array.name
    welcome.innerText = nombreUsando;
}

cargarDatos();
