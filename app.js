// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombresAmigos = []; //Crear un array para almacenar los nombres


function agregarAmigo(){   // funcion que agrega el nombre ingresado a la lista de amigos 
    let NombreIngresado = document.getElementById('amigo').value; //Capturar el valor del campo de entrada
    if(NombreIngresado == ""){ //Validar la entrada
        alert("Por favor, Ingrese un nombre valido")
    }else{
        nombresAmigos.push(NombreIngresado); //Actualizar el array de amigos
        mostrarLista(); //Implementa una función para actualizar la lista de amigos

    }
    
    document.getElementById('amigo').value = "";//Limpiar el campo de entrada

}

function mostrarLista(){ //muestra la lista de amigos en pantalla
    let elementoHTML = document.getElementById("listaAmigos");//Obtener el elemento de la lista
    elementoHTML.innerHTML = ""; //Limpiar la lista existente
    for(let i = 0; i < nombresAmigos.length; i++){ //Iterar sobre el arreglo
        let li = document.createElement("li");
        li.textContent = nombresAmigos[i];
        elementoHTML.appendChild(li);//Agregar elementos a la lista

    }
    

}

function sortearAmigo(){ //Escoje un elemento de la lista
    //validacion espaciones vacios 
    if(nombresAmigos.length==  0){
        alert("No has ingresado ningun nombre");
    }else{
        let valor = Math.floor(Math.random()*nombresAmigos.length); //Generar un índice aleatorio
        let nombreSorteado = nombresAmigos[valor]; //Obtener el nombre sorteado
        //alert(nombreSorteado);
        escribirResultado(nombreSorteado);//Mostrar el resultado
    }
    

}

function escribirResultado(nombreGanador){ // Muestra el resultado
    document.getElementById("listaAmigos").value = ""; //elimina el contenido del la lista anterior
    let elementoHTML = document.getElementById("listaAmigos");
    let textoRespuesta = "El nombre ganador es: "+ nombreGanador;
    elementoHTML.innerHTML = textoRespuesta;
}