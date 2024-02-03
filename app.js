//Generando número Secreto

let numerosSecretos = [];
let numeroSecreto = generarNumeroSecreto();
let intentos = 1;

function generarNumeroSecreto() {
  let numero = parseInt(Math.floor(Math.random() * 10) + 1);
  console.log(numero);

  while (numerosSecretos.length <= 10) {
    if (!numerosSecretos.includes(numero)) {
      numerosSecretos.push(numero);
      break;
    } else {
      numero = parseInt(Math.floor(Math.random() * 10) + 1);
      console.log(numero);
    }

    console.log(numerosSecretos);
  }

  return numero;
}

//Asignando texto a elementos h1 y p
function asignarTextoElemento(elemento, texto) {
  document.querySelector(elemento).innerHTML = texto;
}

asignarTextoElemento("h1", "Juego del número secreto");
asignarTextoElemento("p", "Indica un número del 1 al 10");

//Deshabilitando o habilitando los botones del juego
function interruptorBotones(id, booleano) {
  document.getElementById(id).disabled = booleano;
}

//Limpia Campo de texto
function borrarCampoTexto() {
  document.getElementById("valorUsuario").value = "";
}

//Verificando intento de usuario junto a validacion de número ingresado
function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
  interruptorBotones("reiniciar", true);

  if (numeroDeUsuario <= 10) {
    if (numeroSecreto === numeroDeUsuario) {
      asignarTextoElemento("p", `Has acertado en ${intentos} ${intentos === 1 ? "vez" : "veces"}`);
      interruptorBotones("reiniciar", false);
      interruptorBotones("intentar", true);
      borrarCampoTexto();
    } else {
      if (numeroSecreto > numeroDeUsuario) {
        asignarTextoElemento("p", "El número secreto es mayor");
        borrarCampoTexto();
      } else {
        asignarTextoElemento("p", "El número secreto es menor");
        borrarCampoTexto();
      }
      intentos++;
    }
  } else {
    alert("Ingresa un número menor o igual a 10");
  }
}

//Generando nuevo juego
function nuevoJuego() {
  interruptorBotones("reiniciar", true);
  interruptorBotones("intentar", false);
  asignarTextoElemento("p", "Indica un número del 1 al 10");
  numeroSecreto = generarNumeroSecreto();
  console.log(`El tamaño del Array es : ${numerosSecretos.length}`);
  if (numerosSecretos.length >= 10) {
    interruptorBotones("intentar", true);
    alert("Todos los números han sido sorteados");
  }
  intentos = 1;
}
