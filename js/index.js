

////////////////////REGISTRO JUGADORES////////////////////////////

class Jugador{
    constructor(nombre, edad, celular) {
        this.nombre = nombre;
        this.edad = edad;
        this.celular = celular;
    }
}

const listaNombres = []
const cantidadNombres = parseInt(prompt("Cuantos jugadores quiere registrar"));

do {
    const jugador1 = new Jugador(prompt("Ingrese su nombre"), parseInt(prompt("Ingrese su edad")), parseInt(prompt("Ingrese su celular")));
    listaNombres.push(jugador1);
} while (listaNombres.length != cantidadNombres);

console.log(listaNombres)

/// CALCULO PRECIO HORA////

alert("El precio de la hora es de $2500");

let resultado = 0;
let costoHora = 2500;
function costoTurno(primerNumero, segundoNumero) {
    resultado =  primerNumero * segundoNumero;
}
function mostrar(mensaje) {
    console.log(mensaje);
}

costoTurno(parseInt(prompt("Cuantas horas desea jugar?")), costoHora);            

alert ("El precio de la reserva es  " + resultado);


let reservaFinalizada = document.getElementById("reserva");

reservaFinalizada.innerHTML = resultado ; 

document.reservaFinalizada.appendChild(reservaFinalizada);


/////////  JUGADORES ////////////

// const jugadores = [
//     {  edad: 16,  nombre: "Maxi", categoria: 1, abono: 1500},
//     {  edad: 22,  nombre: "Juan", categoria: 2, abono: 1000 },
//     {  edad: 42,  nombre: "Martina", categoria: 1, abono: 1500},
//     {  edad: 34,  nombre: "Fabiola", categoria: 3, abono: 500}
// ]

// const mayoresDeEdad = jugadores.filter(nombre => nombre.edad >= 18); 
// console.log(mayoresDeEdad);

// const aumentos = jugadores.map(nombre => nombre.abono * 1.30);
// console.log(aumentos);

