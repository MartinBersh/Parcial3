let requisitos = {
    cliente : ["Cooperativa", "Externo"],
    atencion : ["pagos", "asesoria"],
    modulo : ["módulo 1","módulo 2","módulo 3"],
    pagos : ["cuotas", "administración"]
}

let servicio_abierto = true;

function time(ms) {
    return new Promise((resolve, reject)=>{
        if (servicio_abierto){
            setTimeout(resolve,ms);
        }

        else{
            reject(console.log("No hay servicio"))
        }
    })
}

let fila = (time, work) =>{

    return new Promise( (resolve, reject)=>{

        if (servicio_abierto){

            setTimeout(() => {
                resolve( work() )
            }, time);
        } 
        else
        reject(console.log("No hay servicio en modulos"))

    } )
}

fila(1000, ()=> console.log(` Ha entrado un cliente de ${requisitos.cliente[1]}. Este se dirige para ${requisitos.atencion[1]}`) ) 

.then(()=>{
    return fila(1000,()=>console.log(`El cliente que pertenece a ${requisitos.cliente[1]} fue asignado al ${requisitos.modulo[2]} `))

})

.then(()=>{
    return fila(1500,()=>console.log(`Ha entrado un nuevo cliente de ${requisitos.cliente[0]}. Este se dirige para ${requisitos.atencion[0]} ${requisitos.pagos[0]}`))

})

.then(()=>{
    return fila(1000,()=>console.log(`El cliente que pertenece a ${requisitos.cliente[0]} fue asignado al ${requisitos.modulo[1]} `))

})

.then(()=>{
    return fila(1500,()=>console.log(`Ha entrado un nuevo cliente de ${requisitos.cliente[1]}. Este se dirige para ${requisitos.atencion[0]} ${requisitos.pagos[1]}`))

})

.then(()=>{
    return fila(1500,()=>console.log(`Ha entrado un nuevo cliente de ${requisitos.cliente[0]}. Este se dirige para ${requisitos.atencion[1]}`))

})

.then(()=>{
    return fila(1000,()=>console.log(`El cliente que pertenece a ${requisitos.cliente[0]} fue asignado al ${requisitos.modulo[0]} antes por pertenecer a ${requisitos.cliente[0]} `));

})

.then(()=>{
    return fila(2000,()=>console.log(`El ${requisitos.modulo[2]} está libre`))

})

.then(()=>{
    return fila(1000,()=>console.log(`El cliente que pertenece a ${requisitos.cliente[1]} fue asignado al ${requisitos.modulo[2]} `))

    })

.then(()=>{

    return fila(3000,()=>console.log("Todos los clientes fueron atendidos, se cerró la oficina"))

})