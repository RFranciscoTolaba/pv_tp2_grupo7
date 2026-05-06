import { showresult } from "../services/funciones24.js";


document.addEventListener('DOMContentLoaded', () => {

    const formcatch = document.querySelector('#form-input');
    const result = document.querySelector('#form-result');

    console.log(formcatch);

    formcatch.addEventListener('submit', (evento) => {
        evento.preventDefault();
        const inputs = [];

        document.querySelectorAll('[name="lang"]').forEach(input => {
            inputs.push(input);
        });

        let selected = '';

        inputs.forEach(input => {
                selected = inputs.find(i => i.checked);
        });
        

    

        result.innerHTML = '';
        result.appendChild(showresult(selected.value));

        formcatch.reset();
    });
});

