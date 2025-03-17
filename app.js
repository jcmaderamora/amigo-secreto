//Array nombre amigos
let amigos = [];

function agregarAmigo() {
    // Se toma el valor del input
    let textoIngresado = document.getElementById("amigo").value;

    // Se valida que no este vacío el campo
    if(textoIngresado === ''){
        alert('Por favor, inserte un nombre.');
        return;
    }

    //Actualizar el array de amigos
    amigos.push(textoIngresado); 
    // Agrega el valor del input al array
    document.getElementById('amigo').value = ''; 
    // Limpia el campo
    actualizarLista();  

}

//Función actualizar lista de amigos
function actualizarLista(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for(let i = 0; i < amigos.length; i++){
        lista.innerHTML += `${i + 1}. ${amigos[i]}<br>`;
    }
}

//Función Sortear Amigo
function sortearAmigo(){
    if(amigos.length == 0){
        alert('La lista de amigos no puede estar vacía.');
        return;
    }

    let numeroAleatorio = Math.floor(Math.random() * amigos.length);
    let ganador = document.getElementById('resultado');
    ganador.innerHTML = amigos[numeroAleatorio];

}