let notas = [3, 4, 6 , 8, 9, 10, 2, 3, 6, 1]
let suma = 0
let aprobadas = 0

for(let i = 0; i < notas.length; i++){
   console.log(notas[i]);
   if(notas[i] >= 6){
    aprobadas++
    console.log("aprobada");
   }else{
    console.log("desaprobada");
   }
    
    suma = suma + notas[i]
   }
   

   let promedio = suma / notas.length
   console.log("promedio:" + promedio);
   console.log("Cantidad aprobadas: "+ aprobadas);
   

   