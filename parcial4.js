let reserva = []
let inicio = prompt("Digite 'si' para iniciar el sistema")
let suma = 0;
while (inicio == "si"){

    let hab = prompt("¿Qué tipo de habitación desea?. F para familiar, D para doble e I para individual")
    let personas = prompt("Ingrese la cantidad de personas");
    let pais = prompt("Ingrese su país");
    let tiempo = prompt("Ingrese los días que se quedará");
    let fuma = prompt("Fuma usted o alguno de sus acompañantes. Digite 'si' o 'no')");
    let mascota1 = false;


    if (personas<= 2) {
        habitacion = "Individual";     
    } else if (personas <= 4) {
        habitacion = "Doble";
    } else if (personas <= 6) {
        habitacion = "Familiar";
    } else {
        habitacion = "No tenemos disponible";
        console.log("No hay habitación disponible")
    }

    if (habitacion == "Familiar") {
        let mascota = prompt("¿Desea ingresar una mascota? Digite si o no");
        if (mascota == "si"){
            mascota1=true
        } 
    }

    reserva.push({
        pais : pais,
        personas : personas,
        tiempo : tiempo,
        fuma : fuma,
        habitacion : habitacion,
        mascota1 : mascota1,
    })



    inicio = prompt("Si desea continuar digite 'si'. Para terminar digite 'no'");
}

console.log(reserva);