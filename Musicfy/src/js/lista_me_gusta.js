const listaTitulos = JSON.parse(localStorage.getItem("listaTodosTitulos"));
const listaAutores = JSON.parse(localStorage.getItem("listaTodosAutores"));
const listaImagenes = JSON.parse(localStorage.getItem("listaTodasImagenes"));
const ncanciones = listaTitulos.length;

usuarioAMostrar = localStorage.getItem("usuarioMostrado");
usuarioLogin = localStorage.getItem("loginAcc");

pintaCancionesMG();
function pintaCancionesMG() {
    const resultadoCanciones = document.getElementById('resultadoCanciones');
    var listaCancionesMG = JSON.parse(localStorage.getItem(usuarioAMostrar+" listaTodosMg"));
    resultadoCanciones.innerHTML = '';
    cont = 0;
    for (ii=0; ii< listaCancionesMG.length; ii++) {
        if (cont == 4){
            cont = 0;
        }
        if (listaCancionesMG[ii]){
            resultadoCanciones.innerHTML += `<div class="cancion" >
                                            <img src="${listaImagenes[ii]}" class="img" name="${listaTitulos[ii]}" alt = "${listaAutores[ii]}" >
                                            <button class="PPbutton" onclick="playSong(${ii}, '${listaTitulos[ii]}')">▶</button>
                                            <audio class = "audio"><source src="images/${cont}.mp3" type="audio/mp3"></audio>
                                            <div class="caption">"${listaTitulos[ii]}"</div>
                                        </div>`;
        }
        cont++

    }
}

//codigo de Alvaro footer
var audio;
var todosLosAudios = document.querySelectorAll('audio');
var todosLosBTNs = document.querySelectorAll('PPbutton');
var actualID;

function pauseAudios(){
	todosLosAudios.forEach(function(audio){
    audio.currentTime = 0
		audio.pause();
	});
}
function playSong(audioID, songName) {
    const PlayPauseButton = document.getElementsByClassName("PPbutton")[audioID]; //EL ID DEL AUDIO ES EL MISMO QUE EL DEL BOTON
    const footerButton = document.getElementById("footerButton"); //EL ID DEL BOTON DEL FOOTER
    if(audioID != actualID || actualID == null){
        pauseAudios();
        actualID = audioID;
        audio = document.getElementsByClassName("audio")[audioID];
        document.getElementById("nameOfSong").innerHTML = songName;
        audio.play();
        PlayPauseButton.textContent = "| |";
        footerButton.textContent = "| |";
        for(var i = 0; i < 10; i++){
            if(i!=audioID){
                document.getElementsByClassName("PPbutton")[i].textContent = "▶";
            }
        }
    }
    const rangoCancion = document.querySelector('input[type="range"]');
    let ratonEnSlider = false;
    audio.addEventListener("loadeddata", () => {
        rangoCancion.value = 0;
    });

    audio.addEventListener("timeupdate", () => {
        if (!ratonEnSlider) {
        rangoCancion.value = audio.currentTime / audio.duration * 100;
        }
    });

    audio.addEventListener("ended", () => {
        PlayPauseButton.textContent = "▶";
        footerButton.textContent = "▶";
    });


    PlayPauseButton.addEventListener("click", () => {
        if(audio.paused){
        audio.play();
        PlayPauseButton.textContent = "| |";
        footerButton.textContent = "| |";
        for(var i = 0; i < 10; i++){
            if(i!=audioID){
                document.getElementsByClassName("PPbutton")[i].textContent = "▶";
            }
        }
        }else{
        audio.pause();
        PlayPauseButton.textContent = "▶";
        footerButton.textContent = "▶";
        for(var i = 0; i < 10; i++){
            if(i!=audioID){
                document.getElementsByClassName("PPbutton")[i].textContent = "▶";
            }
        }
        }
    });
    footerButton.addEventListener("click", () => {
        if(audio.paused){
        audio.play();
        PlayPauseButton.textContent = "| |";
        footerButton.textContent = "| |";
        for(var i = 0; i < 10; i++){
            if(i!=audioID){
                document.getElementsByClassName("PPbutton")[i].textContent = "▶";
            }
        }
        }else{
        audio.pause();
        PlayPauseButton.textContent = "▶";
        footerButton.textContent = "▶";
        for(var i = 0; i < 10; i++){
            if(i!=audioID){
                document.getElementsByClassName("PPbutton")[i].textContent = "▶";
            }
        }
        }
    });

    rangoCancion.addEventListener("change", () => {
        const pct = rangoCancion.value / 100;
        audio.currentTime = (audio.duration || 0) * pct;
    });

    rangoCancion.addEventListener("mousedown", () => {
        ratonEnSlider = true;
    });

    rangoCancion.addEventListener("mouseup", () => {
        ratonEnSlider = false;
    });
}
    
function cambiarVolumen(){
    audio.volume=document.getElementById("volumenCancion").value;
}

//cambio de idioma
function artistasCambioIdioma(idioma){
    if(idioma == "Español"){
        localStorage.setItem("idioma", "Español");
    }else{
        localStorage.setItem("idioma", "Ingles");
    }
}
var idioma = localStorage.getItem("idioma");
artistasIdioma(idioma);
function artistasIdioma(idioma){

    if(idioma == "Español"){
        var tituloDePagina = document.getElementById("1");
        tituloDePagina.innerHTML = '';
        tituloDePagina.innerHTML = 'Canciones mg';

        var buscador = document.getElementById("2");
        buscador.innerHTML = "";
        buscador.innerHTML += "Buscador";

        var cuenta = document.getElementById("3");
        cuenta.innerHTML = "";
        cuenta.innerHTML += "Cuenta";

        var perfil = document.getElementById("4");
        perfil.innerHTML = "";
        perfil.innerHTML += "Perfil";

        var verListas = document.getElementById("5");
        verListas.innerHTML = "";
        verListas.innerHTML += "Ver mis listas";

        var cerrarSesion = document.getElementById("cerrar-sesion");
        cerrarSesion.innerHTML = "";
        cerrarSesion.innerHTML += "Cerrar Sesion";

        var privacidad = document.getElementById("7");
        privacidad.innerHTML = "";
        privacidad.innerHTML += "Politica de privacidad";

        var cookies = document.getElementById("8");
        cookies.innerHTML = "";
        cookies.innerHTML += "Politica de cookies";

        var titulo = document.getElementsByClassName("tituloSongs");
        if(usuarioAMostrar == usuarioLogin){
            titulo[0].innerHTML = "Canciones que me gustan";
        }else{
            titulo[0].innerHTML = "Canciones que le gustan a "+usuarioAMostrar;
        }       

        var español = document.getElementById("11");
        español.innerHTML = "";
        español.innerHTML += "Español / ";

        var ingles = document.getElementById("12");
        ingles.innerHTML = "";
        ingles.innerHTML += "Ingles";

    }else{
        var tituloDePagina = document.getElementById("1");
        tituloDePagina.innerHTML = '';
        tituloDePagina.innerHTML = 'Songs mg';

        var buscador = document.getElementById("2");
        buscador.innerHTML = "";
        buscador.innerHTML += "Search";

        var cuenta = document.getElementById("3");
        cuenta.innerHTML = "";
        cuenta.innerHTML += "Account";

        var perfil = document.getElementById("4");
        perfil.innerHTML = "";
        perfil.innerHTML += "Profile";

        var verListas = document.getElementById("5");
        verListas.innerHTML = "";
        verListas.innerHTML += "My Playlists";

        var cerrarSesion = document.getElementById("cerrar-sesion");
        cerrarSesion.innerHTML = "";
        cerrarSesion.innerHTML += "Sign off";

        var privacidad = document.getElementById("7");
        privacidad.innerHTML = "";
        privacidad.innerHTML += "Privacy policy";

        var cookies = document.getElementById("8");
        cookies.innerHTML = "";
        cookies.innerHTML += "Cookies policy";

        var titulo = document.getElementsByClassName("tituloSongs");
        if(usuarioAMostrar == usuarioLogin){
            titulo[0].innerHTML = "Liked songs";
        }else{
            titulo[0].innerHTML = "Liked songs by "+usuarioAMostrar;
        }       

        var español = document.getElementById("11");
        español.innerHTML = "";
        español.innerHTML += "Spanish / ";

        var ingles = document.getElementById("12");
        ingles.innerHTML = "";
        ingles.innerHTML += "English";
    }
}