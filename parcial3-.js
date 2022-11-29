
let contOficinaBC = 0;
let contOficinaO = 0;
let contTeleO = 0;
let contTeleBC = 0;


for (let i=0; i <= 4; i++){
    let atencion = prompt("¿Qué tipo de atención desea? Digite 1. para telefonica y 2. Para cubilculo.");
    let tipo = prompt("¿Es usted cliente bancolombioa u otro banco? Digite 'B' para Bancolombia y 'O' Para otro banco ");

    switch(tipo){
        case "B": { 
            
            switch(atencion){

                case "1" :{
                    
                    contTeleBC = contTeleBC + 1;
                    break;
                }
                case "2" :{
                    
                    contOficinaBC =contOficinaBC + 1;
                    break;
                }
            }
            break
        }
        case "O":{
           
            switch(atencion){

                case "1" :{

                    contTeleO = contTeleO + 1;
                    break;
                }
                case "2" :{
        
                    contOficinaO = contOficinaO + 1;
                    break;
                }
            }
            break
        }
    }
    atencion = 0;
    tipo = " ";

}

console.log("Ha terminado de utilizar el sistema.")
console.log("Estas son las estadisticas de cada uno de los modulos de atención")

console.log("la cantidad total de clientes atendidos fue de: ", contOficinaBC+contOficinaO+contTeleBC+contTeleO)

console.log("La catidad de clientes de Bancolombia atendidos por vía telefonica es de:", contTeleBC);
console.log("La catidad de clientes de Bancolombia atendidos por cubiculo es de: ", contOficinaBC);
console.log("La catidad de clientes de otros bancos atendidos por vía telefonica es de: ", contTeleO);
console.log("La catidad de clientes de otros bancos atendidos por cubiculo es de: ", contOficinaO);
 