// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
 // Crea un array para almacenar los nombres
 let amigos = [];
 let intentos = 0;
 
 //Capturar el valor del campo de entrada
 function agregarAmigo() {
     let nuevoAmigo = document.getElementById("amigo").value.trim(); // Eliminar espacios en blanco
 
     //Verificar si el campo esta vacío
     if(nuevoAmigo === ""){
         alert("Por favor ingrese un nombre");
         return;
     }
 
     //Agregar el nuevo amigo
     amigos.push(nuevoAmigo);
 
     //Actualiza la lista de amigos en el la pagina
     actualizarListaAmigos();
 
     document.getElementById("amigo").value = ""; // Limpiar el campo de entrada
 }
 
 //Funcion para actualizar los amigos
 function actualizarListaAmigos(){
     let listaAmigos = document.getElementById("listaAmigos");
     listaAmigos.innerHTML = ""; // Limpiar la lista
 
     // Iterar sobre el arreglo
     for (let i = 0; i < amigos.length; i++) {
         // Crear elementos de lista
         let nuevoLi = document.createElement("li");
         nuevoLi.textContent = amigos[i];
 
         // Agregar elementos a la lista
         listaAmigos.appendChild(nuevoLi);
     }
 }