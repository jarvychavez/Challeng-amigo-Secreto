// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
 // Crea un array para almacenar los nombres
let amigos = [];
let intentos = 0;


//Capturar el valor del campo de entrada
function agregarAmigo() {
    let nuevoAmigo = document.getElementById("amigo").value;

    //Verificar si el campo esta vacío
    if(inputNombre === ""){
        alert("Por favor ingrese un nombre");
        return;
    }

   //Agregar el nuevo amigo
   amigos.push(nuevoAmigo);

   //Actualiza la lista de amigos en el HTML
   actualizarListaAmigos();

   document.getElementById("amigo").value="";

   intentos++;
}

