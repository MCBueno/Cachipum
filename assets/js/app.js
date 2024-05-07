

/*---------- CONSTANTES ----------*/

const PIEDRA = 0;
const PAPEL = 1;
const TIJERA = 2;

const EMPATE = 0;
const GANASTE = 1;
const PERDISTE = 2;

const piedraBtn = document.getElementById("piedra");
const papelBtn = document.getElementById("papel");
const tijeraBtn = document.getElementById("tijera");
const resultText = document.getElementById("texto-juego");
const resultImg = document.getElementById("resultado-imagen")



/*---------- VARIABLES ----------*/

let numRondas = 0;
let rondasJugadas = 0;
let puntajeUsuario = 0;
let puntajeMaquina = 0;



/*---------- LISTENERS ----------*/

document.addEventListener("DOMContentLoaded", function() {      /* DOMcontent para que revise si se actualiza la pagina y pedir el prompt nueavmente */
    numRondas = parseInt(prompt("Ingrese el número de rondas que desea jugar:"));
    if (isNaN(numRondas) || numRondas <= 0) {               /* REVISAR SI EL VALOR ES CORRECTO (NUMÉRICO) */
        alert("Por favor, ingrese un número válido de rondas.");
        return;
    };
});

piedraBtn.addEventListener("click", () => jugar(PIEDRA));  /* COMANDOS PARA REVISAR LOS TOQUES DE LOS BOTONES */
papelBtn.addEventListener("click", () => jugar(PAPEL));
tijeraBtn.addEventListener("click", () => jugar(TIJERA));



/*---------- FUNCIONES ----------*/

function jugar(opcionUsuario) {                 /* FUNCION PARA INICIAR EL JUEGO */
    const opcionMaquina = Math.floor(Math.random() * 3);   /* DESICION RANDOM DE LA MAQUINA */
    const resultado = calcResultado(opcionUsuario, opcionMaquina);  /* COMPARA AMBOS RESULTADOS */

    actualizarPuntajes(resultado);
    mostrarResultado(resultado);        /* IR MOSTRANDO EL RESULTADO ACTUAL */

    rondasJugadas++;       /*  SEGUIR SUMANDO RONDAS */

    if (rondasJugadas === numRondas) {  /* DESTINA EL FINAL DEL JUEGO EN BASE A LA CANTIDAD DE RONDAS INDICADAS */
        mostrarGanador();
        rondasJugadas = 0;
        numRondas = 0;
        puntajeUsuario = 0;
        puntajeMaquina = 0;
    };
};

function calcResultado(opcionUsuario, opcionMaquina) {   /* CALCULAR AMBOS RESULTADOS SEGUN LAS OPCIONES TOMADAS */
    if (opcionUsuario === opcionMaquina) {      /* SI EL RESULTADO ES IDENTICO, DECLARAR EMPATE */
        return EMPATE;
    } else if (
        (opcionUsuario === PIEDRA && opcionMaquina === TIJERA) ||  /* DEFINIR LA LOGICA DEL JUEGO */
        (opcionUsuario === PAPEL && opcionMaquina === PIEDRA) ||
        (opcionUsuario === TIJERA && opcionMaquina === PAPEL)
    ) {
        return GANASTE;
    } else {
        return PERDISTE;  /* SI NO SE CUMPLEN LAS REGLAS ANTERIORES DAR COMO RESULTADO, PERDER */
    };
};

function actualizarPuntajes(resultado) {
    switch (resultado) {
        case GANASTE:
            puntajeUsuario++;
            break;
        case PERDISTE:
            puntajeMaquina++;
            break;
    };
};

function mostrarResultado(resultado) {
    switch (resultado) {
        case EMPATE:
            resultText.innerHTML = "¡Es un empate!<br>";       /*  PARA EL CASO DE CADA JUGADA DEFINIR GANADOR */
            break;
        case GANASTE:
            resultText.innerHTML = "¡Ganaste esta ronda!<br>";
            break;
        case PERDISTE:
            resultText.innerHTML = "¡Perdiste esta ronda!<br>";
            break;
    };
};

function mostrarGanador() {
    if (puntajeUsuario > puntajeMaquina) {
        resultText.innerHTML = "¡Felicidades! ¡Has ganado el juego!<br>"; /* DEFINIR EL FIN DE LAS RONDAS Y DESTINAR UN GANADOR O UN EMPATE */
        resultImg.src = "assets/img/win.gif";       
    } else if (puntajeUsuario < puntajeMaquina) {
        resultText.innerHTML = "¡Lo siento! ¡Has perdido el juego!<br>";
        resultImg.src = "assets/img/lose.gif";
    } else {
        resultText.innerHTML = "¡El juego terminó en empate!<br>";
        resultImg.src = "assets/img/tie.gif";
    };
};










