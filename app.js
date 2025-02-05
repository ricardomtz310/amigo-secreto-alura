// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []; //creo un array para guardar los nombres de los amigos

function agregarAmigo() {
    const input = document.getElementById('amigo'); //obtengo el input donde se ingresa el nombre
    const nombre = input.value.trim(); //elimino los espacios en blanco
    limpiarCaja();

    if (nombre === "") { //reviso que no este vacio
        alert("Por favor, ingrese un nombre valido.");
        return;
    } else if (amigos.includes(nombre)) { //reviso que no este repetido
        alert("El nombre ya se encuentra en la lista.");
    } else {

    amigos.push(nombre); //agrego el nombre a la lista
    input.value = ""; //limpio la barra de input
    mostrarLista();
    }
}

function mostrarLista() {
    const listaAmigos = document.getElementById('listaAmigos'); //obtengo el elemento donde se mostraran los nombres
    listaAmigos.innerHTML = ""; //limpio el contenido de la lista

    let contador = 0;
    while (contador < amigos.length) { //recorro la lista de amigos
        listaAmigos.innerHTML += `${amigos[contador]}<br>`; //agrego los nombres a la lista y agrego un salto de linea con <br>, += es para que no se sobreescriban los nombres
        contador++;
    }
}

function sortearAmigo() {
    if (amigos.length === 0) { //reviso que haya nombres en la lista, si no hay, muestro un mensaje de alerta
        alert("No hay nombres en la lista para sortear.");
        return;
    }
    const amigoSorteado = amigos[numeroAzar()]; //sorteo un nombre al azar
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Tu amigo secreto es: ${amigoSorteado}`; //muestro el nombre sorteado
}

function limpiarCaja() {
    document.getElementById('amigo').value = ''; // limpio el input usando el id
}

function numeroAzar() {
    let numero = Math.floor(Math.random() * amigos.length); //genero un numero al azar entre 0 y la cantidad de amigos
    return numero;
}
