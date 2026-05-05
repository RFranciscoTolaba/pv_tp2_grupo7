// Exportamos la función para poder usarla en el archivo principal
export const actualizarCapitalSeleccionada = (selectPais, selectCapital) => {
    // Igualamos el valor de la lista de capitales al valor del país seleccionado
    selectCapital.value = selectPais.value;
    
    // Obtenemos el texto visible para la consola
    const nombrePais = selectPais.options[selectPais.selectedIndex].text;
    const nombreCapital = selectCapital.options[selectCapital.selectedIndex].text;
    
    // Mostramos el resultado en la consola
    console.log(`Selección actualizada -> País: ${nombrePais} | Capital: ${nombreCapital}`);
};