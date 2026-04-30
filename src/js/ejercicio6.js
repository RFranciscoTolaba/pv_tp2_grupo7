const edades = [8,12,54,6,25,65,12,68,9,10,43,31];
let promedio = 0;

console.log("EJERCICIO 6");
for (let i = 0; i < edades.length; i++) {
    console.log(edades[i]);
    promedio = promedio + edades[i];
    
}

promedio = promedio/edades.length;

console.log("El promedio de edades es: "+ promedio);