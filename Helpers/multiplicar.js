
const fs=require('fs');
const crearArchivo=async(base=5)=>{
    try{
        console.log('===============')
        console.log('==Tabla del:',base)
        console.log('===============')
        let salida='';
        for(let i=1; i<=10; i++){
            salida+=(`${base }x ${i}=${base*i}\n`);
        }
        console.log (salida);
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        //console.log(`tabla-${base}.txt creada`);
        return `tabla-${base}.txt`;

        
        }catch(err){
            throw err;
        }
    }  
    module.exports={
        crearArchivo
    }