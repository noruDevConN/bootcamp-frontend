//Fichero JavaScript con las primeras variables "const"

const btnMenos = document.getElementById('btn-menos');
const btnMas = document.getElementById('btn-mas');
const btnReset = document.getElementById('btn-reset');
const displayContador = document.getElementById('display-contador');
const mensajeEstado = document.getElementById('mensaje-estado');

//Variables guardadas en el DOM
// Variable de estado vvv
let vueltas = 0;

// Instrucciones... Lo que va a "escuchar" la funcion.
btnMas.addEventListener('click', function() {

    vueltas = vueltas + 1;

    // Ahora hay que pintar ese nuevo valor en el HTML.
    displayContador.textContent = vueltas;
});

btnMenos.addEventListener('click', function() {
    if (vueltas > 0) {
    vueltas = vueltas - 1;

    displayContador.textContent = vueltas; 
    }

    if (vueltas > 0) {
        
        displayContador.textContent = vueltas;
    }

    if (vueltas === 0) {
        
        mensajeEstado.textContent = "Aun no comienza la carrera...";
    } else {
        
        mensajeEstado.textContent = "No puedes restar a 0...";
    }
});

btnReset.addEventListener('click', function() {

    vueltas = 0;

    displayContador.textContent = 0;
    mensajeEstado.textContent = "Se reinicia la carrera...";

});
