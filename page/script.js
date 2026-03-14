const titulo = document.getElementById("titulo");
const mensaje = document.getElementById("mensaje");
const boton = document.getElementById("boton");

boton.addEventListener("click",manejoClick);

let contador = 0;

function manejoClick() {
    console.log("click");
    titulo.style.color = "green";
    titulo.innerText = "Andres Calle";
    contador++;
    mensaje.innerText = "Has hecho " + contador +" clicks";
}