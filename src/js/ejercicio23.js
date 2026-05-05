import { cambioColor } from "../service/funciones23.js";

let input = document.querySelector("#texto")
let resultado = document.querySelector("#resultado")

input.addEventListener("input", ()=>{
    let texto = input.value
    resultado.textContent = texto
    let color = cambioColor(texto)
    
    resultado.style.backgroundColor = color
})