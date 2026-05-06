export const showresult = (selected) => {
    const resultdiv = document.createElement('div');
    console.log(selected)
    resultdiv.className = 'result-box';

    resultdiv.innerHTML = `
            <article>
            <h2>El lenguaje seleccionado es:</h2>
            <p><strong>${selected}</strong> </p>
            </article>
        `;

    return resultdiv;
};