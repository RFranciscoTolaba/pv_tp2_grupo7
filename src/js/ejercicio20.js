// logica de negocio
import { guardarEstudianteEnArray, mostrarEstudiante } from "../services/serivesEjercicio20.js";
import { servicioGustavoSosa } from "../services/serviceGustavoSosa.js";
import { serviceFranciscoTolaba } from "../services/serviceFranciscoTolaba.js";

// Esperar al DOM
document.addEventListener('DOMContentLoaded', () => {
    
    const formulario = document.querySelector('#form-carga');
    const contenedorResultado = document.querySelector('#resultado');
    //const listaEstudiantes = [];

    console.log(formulario);
    // Capturar datos
     formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();

        const inputNombre = document.querySelector('#nombre');
        const inputApellido = document.querySelector('#apellido');
        const inputLU = document.querySelector('#lu');

        const nombreVal = inputNombre.value;
        const apellidoVal = inputApellido.value;
        const luVal = inputLU.value;
        //console.log(inputNombre.id);

        const estudiante = {
            id: Date.now(),
            nombre: nombreVal,
            apellido: apellidoVal,
            lu: luVal
        };

        // llamada al service
        guardarEstudianteEnArray(estudiante);
/* 
        listaEstudiantes.unshift(estudiante);

        console.log(listaEstudiantes.find(
            est => (est.lu == "234")  // hay un return implicito
            //(estudiante)=>{estudiante.lu == "234"} necesita return
        ));

        console.log(listaEstudiantes); */

        // Crear el nuevo elemento vacio        
        contenedorResultado.innerHTML = '';

       /*  const fichaInfo = document.createElement('div');
        fichaInfo.className = 'info-box';

        fichaInfo.innerHTML = `
            <h3>Los datos ingresados son:</h3>
            <p><strong>Nombre:</strong> ${nombreVal}</p>
            <p><strong>Apellido:</strong> ${apellidoVal}</p>
            <p><strong>Libreta Universitaria:</strong> ${luVal}</p>
        `;
 */
        // 4. Agregar el elemento al DOM
        contenedorResultado.appendChild(mostrarEstudiante(nombreVal, apellidoVal, luVal));

         formulario.reset();
    });
});

// puede tener servicios o funciones