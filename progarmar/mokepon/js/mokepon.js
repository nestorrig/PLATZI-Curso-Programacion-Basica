
//VARIABLES GLOBALES
// sections
let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
let sectionResultadoCombate = document.getElementById("resultado-combate")
let sectionReiniciar = document.getElementById("reiniciar")
// buttons
let botonMascotaJugador = document.getElementById("boton-mascota")

let botonFuego = document.getElementById("boton-fuego")
let botonAgua = document.getElementById("boton-agua")
let botonTierra = document.getElementById("boton-tierra")

let botonReciniciar = document.getElementById("boton-reiniciar")
// inputs
let inputHipodoge = document.getElementById("hipodoge")
let inputCapipepo = document.getElementById("capipepo")
let inputRatigueya = document.getElementById("ratigueya")
// createElement

//
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3
let titulo

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
    let spanMascotaJugador = document.getElementById("mascota-jugador")
    
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

    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")
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
    let contenedorImagen = document.getElementById("img-jugador")
    let imagen = document.createElement('img') 

    if (mascotaJugador == "Hipodoge") {
        imagen.src = "./assets/mokepons_mokepon_hipodoge_attack.png";
        contenedorImagen.appendChild(imagen);
    } else if (mascotaJugador == "Capipepo") {
        imagen.src = "./assets/mokepons_mokepon_capipepo_attack.png";
        contenedorImagen.appendChild(imagen);
    } else if (mascotaJugador == "Ratigueya") {
        imagen.src = "./assets/mokepons_mokepon_ratigueya_attack.png";
        contenedorImagen.appendChild(imagen);
    }
}

function determinarImagenEnemigo(mascotaEnemigo) {
    let contenedorImagen = document.getElementById("img-enemigo")
    let imagen = document.createElement('img') 

    if (mascotaEnemigo == "Hipodoge") {
        imagen.src = "./assets/mokepons_mokepon_hipodoge_attack.png";
        contenedorImagen.appendChild(imagen);
    } else if (mascotaEnemigo == "Capipepo") {
        imagen.src = "./assets/mokepons_mokepon_capipepo_attack.png";
        contenedorImagen.appendChild(imagen);
    } else if (mascotaEnemigo == "Ratigueya") {
        imagen.src = "./assets/mokepons_mokepon_ratigueya_attack.png";
        contenedorImagen.appendChild(imagen);
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
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")
    
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
        let statusJugador = document.getElementById("ataques-jugador")
        
        let parrafo = document.createElement("li")
        parrafo.innerHTML = "Atacó con " + ataqueJugador

        statusJugador.appendChild(parrafo)
    }
    function crearMensajeAtaqueEnemigo() {
        let statusEnemigo = document.getElementById("ataques-enemigo")
        
        let parrafo = document.createElement("li")
        parrafo.innerHTML = "Atacó con " + ataqueEnemigo

        statusEnemigo.appendChild(parrafo)
    }
    crearMensajeAtaqueJugador()
    crearMensajeAtaqueEnemigo()
}

function crearMensajeFinal(resultadoFinal){
    let sectionMensajes = document.getElementById("mensajes")

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