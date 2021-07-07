class jugadores{
    constructor(nombre,telefono,edad) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.edad = edad;
    }
}
let listaJugadores = [];

let datosFormulario = function (){
    let nombre = $("#nombre").val();
    let edad = $("#edad").val();
    let telefono = $("#telefono").val();
    if (nombre == ""){
        $("#nombre").focus;
    } else {
        if (edad == ""){
            $("#edad").focus;
        } else {
            if (telefono == ""){
                $("#telefono").focus;
            } else {
                console.log(nombre+" "+edad+" "+telefono);
                let jugador = document.createElement("div");
                jugador.innerHTML = `<div class = "container border border-primary text-center"
                <p>${nombre} el valor de hora es de $500</p>
                <p>Nos pondremos en contacto por telefono</p>
                <button onclick="volver()">Volver</button>`;
                document.body.appendChild(jugador);
                document.getElementById("nombre").value = "";
                document.getElementById("edad").value = "";
                document.getElementById("telefono").value = "";
                
            }
        }
    }
    const jugadoresGuardados = new jugadores(nombre, telefono, edad);
    listaJugadores.push(jugadoresGuardados);  
    console.log(listaJugadores);
    console.log(nombre);
    localStorage.setItem("nombre", JSON.stringify(nombre));
    localStorage.setItem("telefono", telefono);
}

let volver = function(){
    location.reload();
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

// let miFormulario = document.getElementById("formulario");
// // let listaJugadores = [];
// let miFormulario = () => {
//     const nombre = document.getElementById("nombre").value;
//     const edad = document.getElementById("edad").value;
//     const telefono = document.getElementById("telefono").value;
//     console.log(miFormulario);
// }

// const alumnosPresente = new alumnos(nombre, telefono, edad);
// listaJugadores.push(alumnosPresente);
// console.log(listaJugadores);
// const section = document.querySelector(".contenedor");
// const ul = document.createElement("ul");
