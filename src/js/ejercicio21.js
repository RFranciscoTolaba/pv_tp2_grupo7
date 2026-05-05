// Importamos la función desde el otro archivo
import { actualizarCapitalSeleccionada } from './funciones21.js';

// Capturamos los elementos del DOM
const selectPais = document.querySelector('#pais');
const selectCapital = document.querySelector('#capital');

// Escuchamos el evento 'change' en la lista de países
selectPais.addEventListener('change', () => {
    actualizarCapitalSeleccionada(selectPais, selectCapital);
});

// Llamamos a la función una vez al inicio para que muestre la selección por defecto al cargar la página
actualizarCapitalSeleccionada(selectPais, selectCapital);