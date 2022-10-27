let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3
let titulo

function iniciarJuego(){
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "none"
    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "none"
    
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)

    let botonReciniciar = document.getElementById("boton-reiniciar")
    botonReciniciar.addEventListener("click", reiciciarjuego)
}


function seleccionarMascotaJugador(){
    let botonMascotaJugador = document.getElementById("boton-mascota")

    let inputHipodoge = document.getElementById("hipodoge")
    let inputCapipepo = document.getElementById("capipepo")
    let inputRatigueya = document.getElementById("ratigueya")
    let spanMascotaJugador = document.getElementById("mascota-jugador")
    
    if(inputHipodoge.checked){ 
        spanMascotaJugador.innerHTML = "Hipodoge"
        botonMascotaJugador.disabled = true
        seleccionarMascotaEnemigo()
        determinarImagenJugador("Hipodoge");
    }else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = "Capipepo"
        botonMascotaJugador.disabled = true
        seleccionarMascotaEnemigo()
        determinarImagenJugador("Capipepo");
    }else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = "Ratigueya"
        botonMascotaJugador.disabled = true
        seleccionarMascotaEnemigo()
        determinarImagenJugador("Ratigueya");
    }else{
        alert("Selecciona una mascota")
    }

}
function seleccionarMascotaEnemigo(){
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "flex"
    let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
    sectionSeleccionarMascota.style.display = "none"

    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")
    let enemigo = aleatorio(1,3)

    if (
        (document.getElementById("hipodoge").checked == false) &&
        (document.getElementById("capipepo").checked == false) &&
        (document.getElementById("ratigueya").checked == false)
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
    var imagen = document.createElement('img') 

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
    var imagen = document.createElement('img') 

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
    let sectionResultadoCombate = document.getElementById("resultado-combate")

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
    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled = true

    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled = true

    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.disabled = true

        let sectionReiniciar = document.getElementById("reiniciar")
        sectionReiniciar.style.display = "block"
        let sectionResultadoCombate = document.getElementById("resultado-combate")
        sectionResultadoCombate.style.display = "none"
}
function reiciciarjuego(){
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
window.addEventListener("load", iniciarJuego)