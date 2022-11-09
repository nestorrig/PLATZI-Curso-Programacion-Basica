//VARIABLES GLOBALES
// sections
const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const sectionResultadoCombate = document.getElementById("resultado-combate")
const sectionReiniciar = document.getElementById("reiniciar")
const sectionMensajes = document.getElementById("mensajes")
// buttons
const botonMascotaJugador = document.getElementById("boton-mascota")

const botonFuego = document.getElementById("boton-fuego")
const botonAgua = document.getElementById("boton-agua")
const botonTierra = document.getElementById("boton-tierra")

const botonReciniciar = document.getElementById("boton-reiniciar")
// inputs
const inputHipodoge = document.getElementById("hipodoge")
const inputCapipepo = document.getElementById("capipepo")
const inputRatigueya = document.getElementById("ratigueya")
// span
const spanMascotaJugador = document.getElementById("mascota-jugador")
const spanMascotaEnemigo = document.getElementById("mascota-enemigo")
const contenedorImagenJugador = document.getElementById("img-jugador")
const contenedorImagenEnemigo = document.getElementById("img-enemigo")
const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")
const statusJugador = document.getElementById("ataques-jugador")
const statusEnemigo = document.getElementById("ataques-enemigo")
//
let mokepones = []
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3
let titulo
//
class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
    }
}

let hipodoge = new Mokepon("Hipodoge","./assets/mokepons_mokepon_hipodoge_attack.png", 5)
let capipepo = new Mokepon("Capipepo","./assets/mokepons_mokepon_capipepo_attack.png", 5)
let ratigueya = new Mokepon("Ratigueya","./assets/mokepons_mokepon_ratigueya_attack.png", 5)

mokepones.push(hipodoge, capipepo, ratigueya)

console.log(mokepones)
//
function iniciarJuego(){
    sectionSeleccionarAtaque.style.display = "none"
    sectionReiniciar.style.display = "none"
    
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    botonFuego.addEventListener("click", ataqueFuego)
    botonAgua.addEventListener("click", ataqueAgua)
    botonTierra.addEventListener("click", ataqueTierra)

    botonReciniciar.addEventListener("click", reiciciarjuego)
}


function seleccionarMascotaJugador(){
    
    if(inputHipodoge.checked){ 
        spanMascotaJugador.innerHTML = "Hipodoge"
        // botonMascotaJugador.disabled = true "No hay necesidad de esto al tener la section el atributo display: none"
        seleccionarMascotaEnemigo()
        determinarImagenJugador("Hipodoge");
    }else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = "Capipepo"
        // botonMascotaJugador.disabled = true
        seleccionarMascotaEnemigo()
        determinarImagenJugador("Capipepo");
    }else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = "Ratigueya"
        // botonMascotaJugador.disabled = true
        seleccionarMascotaEnemigo()
        determinarImagenJugador("Ratigueya");
    }else{
        alert("Selecciona una mascota")
    }

}
function seleccionarMascotaEnemigo(){
    sectionSeleccionarAtaque.style.display = "flex"
    sectionSeleccionarMascota.style.display = "none"
    let enemigo = aleatorio(1,3)

    if (
        (inputHipodoge.checked == false) &&
        (inputCapipepo.checked == false) &&
        (inputRatigueya.checked == false)
        ){
    }else if(enemigo == 1){
        spanMascotaEnemigo.innerHTML = "Hipodoge"
        determinarImagenEnemigo("Hipodoge")
    }else if(enemigo == 2){
        spanMascotaEnemigo.innerHTML = "Capipepo"
        determinarImagenEnemigo("Capipepo")
    }else{
        spanMascotaEnemigo.innerHTML = "Ratigueya"
        determinarImagenEnemigo("Ratigueya")
    } 

}

function determinarImagenJugador(mascotaJugador) {
    let imagen = document.createElement('img') 

    if (mascotaJugador == "Hipodoge") {
        imagen.src = "./assets/mokepons_mokepon_hipodoge_attack.png";
        contenedorImagenJugador.appendChild(imagen);
    } else if (mascotaJugador == "Capipepo") {
        imagen.src = "./assets/mokepons_mokepon_capipepo_attack.png";
        contenedorImagenJugador.appendChild(imagen);
    } else if (mascotaJugador == "Ratigueya") {
        imagen.src = "./assets/mokepons_mokepon_ratigueya_attack.png";
        contenedorImagenJugador.appendChild(imagen);
    }
}

function determinarImagenEnemigo(mascotaEnemigo) {
    let imagen = document.createElement('img') 

    if (mascotaEnemigo == "Hipodoge") {
        imagen.src = "./assets/mokepons_mokepon_hipodoge_attack.png";
        contenedorImagenEnemigo.appendChild(imagen);
    } else if (mascotaEnemigo == "Capipepo") {
        imagen.src = "./assets/mokepons_mokepon_capipepo_attack.png";
        contenedorImagenEnemigo.appendChild(imagen);
    } else if (mascotaEnemigo == "Ratigueya") {
        imagen.src = "./assets/mokepons_mokepon_ratigueya_attack.png";
        contenedorImagenEnemigo.appendChild(imagen);
    }
}

function ataqueFuego() {
    ataqueJugador = "Fuego🌋"
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = "Agua💦"
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = "Tierra🗻"
    ataqueAleatorioEnemigo()
}
function ataqueAleatorioEnemigo(){
    ataqueEnemigo = aleatorio(1,3)

    if(ataqueEnemigo == 1){
        ataqueEnemigo = "Fuego🌋"
    }else if(ataqueEnemigo == 2){
        ataqueEnemigo = "Agua💦"
    }else{
        ataqueEnemigo = "Tierra🗻"
    } 
    combate()
}
////AQUI ME QUEDE, AUN FALAT CODIGO POR REVISAR
function combate() {
    
    if (ataqueEnemigo == ataqueJugador) {
      crearMensaje("EMPATE 🙂")
    } else if (
      (ataqueJugador == "Fuego🌋" && ataqueEnemigo == "Tierra🗻") ||
      (ataqueJugador == "Agua💦" && ataqueEnemigo == "Fuego🌋") ||
      (ataqueJugador == "Tierra🗻" && ataqueEnemigo == "Agua💦")
    ) {
      crearMensaje("GANASTE 😎")
      vidasEnemigo--
      spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
      crearMensaje("PERDISTE 😫")
      vidasJugador--
      spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

function revisarVidas(){

    if(vidasEnemigo == 0){
        crearMensajeFinal("GANASTE LA BATALLA✌")
    }else if(vidasJugador == 0){
        crearMensajeFinal("PERDISTE LA BATALLA😞")
    }

}

function crearMensaje(resultadoCombate){
    sectionResultadoCombate.innerHTML = resultadoCombate
    
    
    function crearMensajeAtaqueJugador() {
        let parrafo = document.createElement("li")
        parrafo.innerHTML = "Atacó con " + ataqueJugador

        statusJugador.appendChild(parrafo)
    }
    function crearMensajeAtaqueEnemigo() {
        let parrafo = document.createElement("li")
        parrafo.innerHTML = "Atacó con " + ataqueEnemigo

        statusEnemigo.appendChild(parrafo)
    }
    crearMensajeAtaqueJugador()
    crearMensajeAtaqueEnemigo()
}

function crearMensajeFinal(resultadoFinal){
    let parrafo = document.createElement("p")
    parrafo.innerHTML = resultadoFinal

    sectionMensajes.appendChild(parrafo)

    deshabilitarBotones()
}

function deshabilitarBotones(){
    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true

    sectionReiniciar.style.display = "block"
    sectionResultadoCombate.style.display = "none"
}
function reiciciarjuego(){
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
window.addEventListener("load", iniciarJuego)