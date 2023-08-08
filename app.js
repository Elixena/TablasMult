const fs=require('fs');
const {crearArchivo}=require('./Helpers/multiplicar');
console.clear();
const [,,arg3='base=7']=process.argv;
const[,base]=arg3.split('=');
console.log(base);

crearArchivo(base)
    .then(nombreArchivo=>console.log(nombreArchivo,'creado'))
    .catch(err =>console.log(err));

   

