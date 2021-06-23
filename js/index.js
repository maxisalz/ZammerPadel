let datosFormulario = function (){
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let telefono = document.getElementById("telefono").value;
    if (nombre == ""){
        document.getElementById("nombre").focus;
    } else {
        if (edad == ""){
            document.getElementById("edad").focus;
        } else {
            if (telefono == ""){
                document.getElementById("telefono").focus;
            } else {
                console.log(nombre+" "+edad+" "+telefono);
                let jugador = document.createElement("div");
                jugador.innerHTML = " <br> Gracias por registrarse, nos pondremos en contacto a la brevedad";
                document.body.appendChild(jugador);
                document.getElementById("nombre").value = "";
                document.getElementById("edad").value = "";
                document.getElementById("telefono").value = "";
            }
        }
    }
}







// const nombre = document.getElementById("nombre")
// const edad = document.getElementById("edad")
// const telefono = document.getElementById("telefono")
// const enviar = document.getElementById("enviar")

// enviar.addEventListener("submit", guardarDatos);

// function guardarDatos(){
//     console.log(nombre.value);
// }



// ////////////////////REGISTRO JUGADORES////////////////////////////



// const listaNombres = []
// const cantidadNombres = document.getElementById("nombre").value;

// do {
    
//     const jugador1 = new Jugador(prompt("Ingrese su nombre"), parseInt(prompt("Ingrese su edad")), parseInt(prompt("Ingrese su celular")));
//     listaNombres.push(jugador1);
// } while (listaNombres.length != cantidadNombres);

// console.log(listaNombres)

// /// CALCULO PRECIO HORA////

// alert("El precio de la hora es de $2500");

// let resultado = 0;
// let costoHora = 2500;
// function costoTurno(primerNumero, segundoNumero) {
//     resultado =  primerNumero * segundoNumero;
// }
// function mostrar(mensaje) {
//     console.log(mensaje);
// }

// costoTurno(parseInt(prompt("Cuantas horas desea jugar?")), costoHora);            

// alert ("El precio de la reserva es  " + resultado);


// let reservaFinalizada = document.getElementById("reserva");

// reservaFinalizada.innerHTML = resultado ; 

// document.reservaFinalizada.appendChild(reservaFinalizada);


// /////////  JUGADORES ////////////

// // const jugadores = [
// //     {  edad: 16,  nombre: "Maxi", categoria: 1, abono: 1500},
// //     {  edad: 22,  nombre: "Juan", categoria: 2, abono: 1000 },
// //     {  edad: 42,  nombre: "Martina", categoria: 1, abono: 1500},
// //     {  edad: 34,  nombre: "Fabiola", categoria: 3, abono: 500}
// // ]

// // const mayoresDeEdad = jugadores.filter(nombre => nombre.edad >= 18); 
// // console.log(mayoresDeEdad);

// // const aumentos = jugadores.map(nombre => nombre.abono * 1.30);
// // console.log(aumentos);

