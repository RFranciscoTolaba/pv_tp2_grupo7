export const cambiarColorFondo = (fondo) =>{
    const colores = ["yellow","green","orange","brown","gray","red","cyan","pink","blue","lightBlue"]
    const aleatorio = Math.random();
    const valorMultiplicado = aleatorio*colores.length;
    const i = Math.floor(valorMultiplicado);
    const colorFinal = colores[i];
    fondo.style.backgroundColor = colorFinal;

}

