//VARIABLES GLOBALES
// sections
const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const sectionResultadoCombate = document.getElementById("resultado-combate")
const sectionReiniciar = document.getElementById("reiniciar")
const sectionMensajes = document.getElementById("mensajes")
const contendorTarjetas = document.getElementById("contendorTarjetas")
const contendorBotones = document.getElementById("contendorBotones")
// buttons
const botonMascotaJugador = document.getElementById("boton-mascota")
const botonReciniciar = document.getElementById("boton-reiniciar")
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
let ataqueJugador = []
let ataqueEnemigo
let opcionDeMokepones
// inputs
let inputHipodoge 
let inputCapipepo 
let inputRatigueya
//ataques
let botonFuego 
let botonAgua
let botonTierra
let botones = []
//
let mascotaJugador 
let ataquesMokepon
let vidasJugador = 3
let vidasEnemigo = 3
let titulo
//
class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hipodoge = new Mokepon("Hipodoge","./assets/mokepons_mokepon_hipodoge_attack.png", 5)
let capipepo = new Mokepon("Capipepo","./assets/mokepons_mokepon_capipepo_attack.png", 5)
let ratigueya = new Mokepon("Ratigueya","./assets/mokepons_mokepon_ratigueya_attack.png", 5)

hipodoge.ataques.push(
    {nombre: "AGUA💧", id: "boton-agua"},
    {nombre: "AGUA💧", id: "boton-agua"},
    {nombre: "AGUA💧", id: "boton-agua"},
    {nombre: "FUEGO🔥", id: "boton-fuego"},
    {nombre: "TIERRA🗻", id: "boton-tierra"},
)
capipepo.ataques.push(
    {nombre: "TIERRA🗻", id: "boton-tierra"},
    {nombre: "TIERRA🗻", id: "boton-tierra"},
    {nombre: "TIERRA🗻", id: "boton-tierra"},
    {nombre: "AGUA💧", id: "boton-agua"},
    {nombre: "FUEGO🔥", id: "boton-fuego"},
)
ratigueya.ataques.push(
    {nombre: "FUEGO🔥", id: "boton-fuego"},
    {nombre: "FUEGO🔥", id: "boton-fuego"},
    {nombre: "FUEGO🔥", id: "boton-fuego"},
    {nombre: "AGUA💧", id: "boton-agua"},
    {nombre: "TIERRA🗻", id: "boton-tierra"},
)

mokepones.push(hipodoge, capipepo, ratigueya)
//
function iniciarJuego(){
    sectionSeleccionarAtaque.style.display = "none"
    sectionReiniciar.style.display = "none"
    
    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjetas-de-mokepon" for=${mokepon.nombre}>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
            ${mokepon.nombre}
        </label>    
        `
        contendorTarjetas.innerHTML += opcionDeMokepones
        inputHipodoge = document.getElementById("Hipodoge")
        inputCapipepo = document.getElementById("Capipepo")
        inputRatigueya = document.getElementById("Ratigueya")
    })
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    botonReciniciar.addEventListener("click", reiciciarjuego)
}


function seleccionarMascotaJugador(){
    if(inputHipodoge.checked){ 
        spanMascotaJugador.innerHTML = inputHipodoge.id 
        mascotaJugador = inputHipodoge.id
        seleccionarMascotaEnemigo()
    }else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
        seleccionarMascotaEnemigo()
    }else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
        seleccionarMascotaEnemigo()
    }else{
        alert("Selecciona una mascota")
    }
    crearJugador(mascotaJugador)
}

function crearJugador(mascotaJugador) {
    let ataques;
    let foto;
    let nombre;

    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
            foto = mokepones[i].foto
            nombre = mokepones[i].nombre
        }        
    }
    mostrarAtaques(ataques);
    function mostrarAtaques(ataques) {
        ataques.forEach((ataque) => {
            ataquesMokepon = `<button id=${ataque.id} class="boton-de-ataque BotonAtaque">${ataque.nombre}</button>`
            contendorBotones.innerHTML += ataquesMokepon;
        })
        botonFuego = document.getElementById("boton-fuego")
        botonAgua = document.getElementById("boton-agua")
        botonTierra = document.getElementById("boton-tierra")
        botones = document.querySelectorAll(".BotonAtaque")
    }
    determinarImagenJugador()
    function determinarImagenJugador() { // Esta funcion ha sido mejorada.
        let imagen = document.createElement('img') 
        imagen.src = foto
        imagen.alt = nombre
        contenedorImagenJugador.appendChild(imagen);
    }
    secuenciaAtaque()
}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener("click", (e) => {
            if (e.target.textContent === "FUEGO🔥") {
                ataqueJugador.push("FUEGO")
                console.log(ataqueJugador)
                boton.style.background = "#F5EDDC"
            }else if (e.target.textContent === "AGUA💧") {
                ataqueJugador.push("AGUA")
                console.log(ataqueJugador)
                boton.style.background = "#F5EDDC"
            } else {
                ataqueJugador.push("TIERRA")
                console.log(ataqueJugador)
                boton.disabled = true //mejor alternativa
            }
        })
    })
}

function seleccionarMascotaEnemigo(){
    sectionSeleccionarAtaque.style.display = "flex"
    sectionSeleccionarMascota.style.display = "none"
    let enemigo = aleatorio(0, mokepones.length - 1)
    let imagen = document.createElement('img')
    imagen.src = mokepones[enemigo].foto
    imagen.alt = mokepones[enemigo].nombre

    spanMascotaEnemigo.innerHTML = mokepones[enemigo].nombre
    contenedorImagenEnemigo.appendChild(imagen);
}

function ataqueAleatorioEnemigo(){
    ataqueEnemigo = aleatorio(1,3)

    if(ataqueEnemigo == 1){
        ataqueEnemigo = "Fuego🌋"
    }else if(ataqueEnemigo == 2){
        ataqueEnemigo = "Agua💧"
    }else{
        ataqueEnemigo = "Tierra🗻"
    } 
    combate()
}

function combate() {
    
    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE 🙂")
    } else if (
        (ataqueJugador == "Fuego🌋" && ataqueEnemigo == "Tierra🗻") ||
        (ataqueJugador == "Agua💧" && ataqueEnemigo == "Fuego🌋") ||
        (ataqueJugador == "Tierra🗻" && ataqueEnemigo == "Agua💧")
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