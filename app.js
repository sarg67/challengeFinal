let listaDeAmigos = [];

function agregarAmigo() {    
    let nuevoAmigo = document.getElementById('amigo').value; //Capturar valor de entrada
    console.log(nuevoAmigo);
    if (nuevoAmigo != '') {
        listaDeAmigos.push(nuevoAmigo);
        mostrarAmigos(); // Llamar a la función para actualizar la lista
        } else {
        alert('Por favor, escriba un nombre'); //validación de entrada
        }
    limpiarEntrada();
    console.log(listaDeAmigos); //Actualización de array
    return;
}

//Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.
function limpiarEntrada() {
    document.getElementById('amigo').value = '';
}

function mostrarAmigos() {
    // Obtener el elemento de la lista
    let lista = document.getElementById('listaAmigos');
    
    // Limpiar la lista existente
    lista.innerHTML = "";

    // Iterar sobre el arreglo y agregar cada amigo como un elemento <li>
    for (let i = 0; i < listaDeAmigos.length; i++) {
        let amigo = listaDeAmigos[i];  // Obtener el amigo actual
        let li = document.createElement('li'); // Crear un nuevo elemento <li>
        li.textContent = amigo; // Establecer el texto del <li>
        lista.appendChild(li); // Agregar el <li> a la lista
    }
}

function sortearAmigo() {
    // Validar que hay amigos disponibles
    if (listaDeAmigos.length === 0) {
        alert('No hay amigos para sortear. Por favor, añada al menos un nombre.');
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = listaDeAmigos[indiceAleatorio]; 

    // Mostrar el resultado
    document.getElementById('resultado').innerHTML = `El amigo secreto es: ${amigoSorteado}`;
}


// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica 
// para resolver el problema.

//Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector para obtener el texto ingresado 
// por el usuario.
//Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un alert con un 
// mensaje de error: "Por favor, inserte un nombre."
//Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push().

//Crea una función que recorra el array amigos y agregue cada nombre como un elemento <li> dentro de una 
//lista HTML. Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.

//Tareas específicas:

//Obtener el elemento de la lista: Utilizar document.getElementById() o document.querySelector() para 
// seleccionar la lista donde se mostrarán los amigos.

//Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al 
// actualizar.

//Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) 
// para cada título.

//Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.
