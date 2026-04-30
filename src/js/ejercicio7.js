let nomb = ["Lucas", "Francisco", "Gerardo", "Kevin", "Ricardo", "Gustavo"]
console.log("Lista de nombres:");
for (let i = 0; i < nomb.length; i++) {
    console.log(nomb[i]);
}
let nombreMasLargo = nomb[0];

for (let i = 1; i < nomb.length; i++) {
    if (nomb[i].length > nombreMasLargo.length) {
        nombreMasLargo = nomb[i];
    }
}

console.log("El nombre más largo es:", nombreMasLargo);