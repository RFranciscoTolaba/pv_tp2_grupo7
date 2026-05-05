import { cambiarColorFondo } from "../services/funciones25.js";

const boton = document.querySelector('#click');
const background = document.querySelector('#fondo');

boton.addEventListener('click',()=>{
    cambiarColorFondo(background);
    console.log("El color del fondo ha cambiado...");
})



