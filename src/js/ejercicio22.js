let inputNombre = document.querySelector('#nombre');
let resultado = document.querySelector('#resultado');

inputNombre.addEventListener('input', function() {
    resultado.textContent = inputNombre.value; 
})