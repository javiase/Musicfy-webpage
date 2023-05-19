localStorage.setItem("listaTodosTitulos", "");
localStorage.setItem("listaTodosAutores", "");
login = localStorage.getItem("loginAcc");
localStorage.setItem("usuarioMostrado", login);
x = JSON.parse(localStorage.getItem(login+" listaTodosMg"));
if(x==null){
    localStorage.setItem(login+" listaTodosMg", JSON.stringify([]));
}

const canciones = document.getElementsByClassName("cancion");
const ncanciones = canciones.length;

listas();
function listas(){
    var listaTitulos = [];
    var listaAutores = [];
    var listaImagenes = [];    
    
    for (ii = 0; ii < ncanciones; ii++){
        var titulo = canciones[ii].children[0].name;
        var autores = canciones[ii].children[0].alt;
        var imagen = canciones[ii].children[0].src;
        listaTitulos.push(titulo);
        listaAutores.push(autores);
        listaImagenes.push(imagen);
    }
    localStorage.setItem("nCanciones", ncanciones);
    localStorage.setItem("listaTodosTitulos", JSON.stringify(listaTitulos));
    localStorage.setItem("listaTodosAutores", JSON.stringify(listaAutores));
    localStorage.setItem("listaTodasImagenes", JSON.stringify(listaImagenes));
}


//se introducen los usuarios predeterminados en la lista total de usuarios en caso de que la lista ya estuviera creada, se compruieba que el usuario actual no estuviera ya en la lista
crearListaTodosUsuarios();
function crearListaTodosUsuarios(){
    estaDentro = false;
    x4 = JSON.parse(localStorage.getItem("listaTodosUsuarios"));
    if(x4 == null){
        lista = []
        lista.push(login, "usu1", "usu2", "usu3", "usu4", "usu5");
        localStorage.setItem("listaTodosUsuarios", JSON.stringify(lista))
    }else{
        for(ii=0; ii<x4.length; ii++){
            if(x4[ii]==login){
                estaDentro = true;
            }
        }
        if(!estaDentro){
            console.log('aaaaa')
            x4.unshift(login);
            
        }
        localStorage.setItem("listaTodosUsuarios", JSON.stringify(x4))
    }
}

//rellena la lista de autores seguidos cada vez que se recarga la pagina para que no se pierda el progreso
guardarUsuariosSiguiendo()
function guardarUsuariosSiguiendo(){
    var listaUsuariosSiguiendo = JSON.parse(localStorage.getItem(login+" listaUsuariosSiguiendo"));
    var listaUsuariosTotal = JSON.parse(localStorage.getItem("listaTodosUsuarios"));
    if (listaUsuariosSiguiendo != null){
        for (ii=0; ii<listaUsuariosTotal.length; ii++){
            var checking = document.getElementById("seguirUsuario"+ii);
            if (checking!= null){
                if(listaUsuariosSiguiendo[ii]){
                    checking.checked = true;
                }else if(listaUsuariosSiguiendo[ii] == false){
                    checking.checked = false;
                }
            }
        }
    }
}
//a continuacion la funcion para seguir a un autor, el autor se añade a la lista de autores seguidos del usuario "acc" si es la primera vez que se carga la pagina, se crea la 
//lista de cero, sino, se descarga del localstorage
usuariosSiguiendo()
function usuariosSiguiendo(){
    var listaUsuariosSiguiendo = JSON.parse(localStorage.getItem(login+" listaUsuariosSiguiendo"));
    var listaUsuariosTotal = JSON.parse(localStorage.getItem("listaTodosUsuarios"));
    if (listaUsuariosSiguiendo == null){
        listaUsuariosSiguiendo = [];
    }
    for (ii=0; ii<listaUsuariosTotal.length; ii++){
        var check = document.getElementById("seguirUsuario"+ii);
        if (check!= null){
            if (check.checked){
                listaUsuariosSiguiendo[ii]=1;
            }else if(check.checked == false){ 
                listaUsuariosSiguiendo[ii]=0;
            }
        }else{
            listaUsuariosSiguiendo[ii]=0;
        }
        
    }
    localStorage.setItem(login+" listaUsuariosSiguiendo", JSON.stringify(listaUsuariosSiguiendo));
}
//se introducen los siguiendo usuario de cada usuario en la lista de siguiendo usuarios de todos los usuarios (para despues poder personalizar el perfil para cada usuario)

crearListaTodosUsuariosSeguidos();
function crearListaTodosUsuariosSeguidos(){
    estaDentro = false;
    x5 = JSON.parse(localStorage.getItem("listaTodosNombresUsuariosSiguiendo"));
    if(x5 == null){
        lista = []
        lista.push(login+" listaUsuariosSiguiendo", "usu1 listaUsuariosSiguiendo", "usu2 listaUsuariosSiguiendo", "usu3 listaUsuariosSiguiendo", "usu4 listaUsuariosSiguiendo", "usu5 listaUsuariosSiguiendo")
        localStorage.setItem("listaTodosNombresUsuariosSiguiendo", JSON.stringify(lista))
    }else{
        for(ii=0; ii<x5.length; ii++){
            if(x5[ii]==login+" listaUsuariosSiguiendo"){
                estaDentro = true;
            }
        }
        if(!estaDentro){
            x5.unshift(login+ " listaUsuariosSiguiendo");
            
        }
        localStorage.setItem("listaTodosNombresUsuariosSiguiendo", JSON.stringify(x5));
        actualizarUsuarios();
    }
}

//se introducen las imagenes de perfil de cada usuario
imagenesPerfil();
function imagenesPerfil(){
    for(ii=1;ii<6;ii++){
        localStorage.setItem("usu"+ii+" imagenPerfil", "images/pfp.png");
    }
}
//se ponen en display los autores que hay en la plataforma
pintaAutores();
function pintaAutores() {
    var autoresDisplay = document.getElementById('autores');
    var listaAutores = JSON.parse(localStorage.getItem("listaTodosAutores"));

    //puede que haya que volver a poner     autoresDisplay.innerHTML = '';     si se stackean

    for (ii=0; ii< 5; ii++) {
        
            autoresDisplay.innerHTML += `<div class="cancion">
                                            <img src="images/artistas/${listaAutores[ii]}/${listaAutores[ii]}.jpg" class="img" name="${listaAutores[ii]}" onclick = "irArtista('${listaAutores[ii]}')">
                                            <div class="caption">"${listaAutores[ii]}"</div>
                                            <input type="checkbox" class = "FollowArt" id = "seguirAutor${ii}" name ="SeguirAutor" onclick = autoresSiguiendo()>
                                            <label for="star" class = "starA">★</label>
                                        </div>`;
        
    }
}
//vamos a poner en display los usuarios que hay en la plataforma para poder seguirlos y ver sus perfiles
pintaUsuarios();
function pintaUsuarios() {
    var usuariosDisplay = document.getElementById('usuarios');
    var listaUsuarios = JSON.parse(localStorage.getItem("listaTodosUsuarios"));

    usuariosDisplay.innerHTML = '';

    for (ii=0; ii< listaUsuarios.length; ii++) {
        if(listaUsuarios[ii] != login){
            imagenPerfil = localStorage.getItem(listaUsuarios[ii]+" imagenPerfil");
            usuariosDisplay.innerHTML +=    `<div class="cancion" >
                                                <img src="${imagenPerfil}" class="img" name="${listaUsuarios[ii]}" onclick = abrirPerfilDe(this.name)>
                                                <div class="caption">"${listaUsuarios[ii]}"</div>
                                                <input type="checkbox" class = "FollowUsu" id = "seguirUsuario${ii}" name ="${listaUsuarios[ii]}" onclick = usuariosSiguiendo()>
                                                <label for="star" class = "starU">★</label>
                                            </div>`;
        }
    }
}
//se abre el perfil del usuario que haya sido seleccionado
function abrirPerfilDe(usuario){
    localStorage.setItem("usuarioMostrado", usuario)
    window.open("perfil.html", "_self");
}

//nose bien lo que hace, creo que rellena la lista de autores seguidos cada vez que se recarga la pagina para que no se pierda el progreso
guardarAutoresSiguiendo()
function guardarAutoresSiguiendo(){
    var listaAutoresSiguiendo = JSON.parse(localStorage.getItem(login+" listaAutoresSiguiendo"));
    if (listaAutoresSiguiendo != null){
        for (ii=0; ii<5; ii++){
            var checkingg = document.getElementById("seguirAutor"+ii);
            
            if(listaAutoresSiguiendo[ii]){
                checkingg.checked = true;
            }else if(listaAutoresSiguiendo[ii] == false){
                checkingg.checked = false;
            }
        }
    }
}
//a continuacion la funcion para seguir a un autor, el autor se añade a la lista de autores seguidos del usuario "acc" si es la primera vez que se carga la pagina, se crea la 
//lista de cero, sino, se descarga del localstorage
autoresSiguiendo()
function autoresSiguiendo(){
    var listaAutoresSiguiendo = JSON.parse(localStorage.getItem(login+" listaAutoresSiguiendo"));
    if (listaAutoresSiguiendo == null){
        listaAutoresSiguiendo = [];
    }
    for (ii=0; ii<5; ii++){
        var check = document.getElementById("seguirAutor"+ii);
        if (check.checked){
            listaAutoresSiguiendo[ii]=true;
        }else if(check.checked == false){ 
            listaAutoresSiguiendo[ii]=false
        }
    }
    localStorage.setItem(login+" listaAutoresSiguiendo", JSON.stringify(listaAutoresSiguiendo));
}



//se crea la lista que recoge los nombres de las listas de autores seguidos de los perfiles 
crearListaTodosNombresAutoresSiguiendo();
function crearListaTodosNombresAutoresSiguiendo(){
    var listaNombresAutoresSiguiendo = JSON.parse(localStorage.getItem("listaTodosNombresAutoresSiguiendo"));
    var existia = false;
    if (listaNombresAutoresSiguiendo == null){
        listaNombresAutoresSiguiendo = [];
    }
    
    for(ii=0; ii<listaNombresAutoresSiguiendo.length; ii++){
        if (listaNombresAutoresSiguiendo[ii] == (acc+" listaAutoresSiguiendo")){
            existia = true;
        }
    }
    if(!existia){
        listaNombresAutoresSiguiendo.push(acc+" listaAutoresSiguiendo");
    }
    localStorage.setItem("listaTodosNombresAutoresSiguiendo", JSON.stringify(listaNombresAutoresSiguiendo));
}

//cuando se cree un usuario nuevo, tenemos que añadir a las listas de usuario siguiendo un nuevo 0 al principio
function actualizarUsuarios(){
    listaUsuarios = JSON.parse(localStorage.getItem('listaTodosNombresUsuariosSiguiendo'));

    for(ii=0;ii<listaUsuarios.length-5; ii++){
        listaSiguiendo = JSON.parse(localStorage.getItem(listaUsuarios[ii]));
        while(listaSiguiendo.length<listaUsuarios.length){
            listaSiguiendo.unshift(0);
        }
        localStorage.setItem(listaUsuarios[ii], JSON.stringify(listaSiguiendo));
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

//codigo de martin countdown
const startingMinutes=45;
var time=startingMinutes*60;


setInterval(updateCountdown,1000);

function updateCountdown(){
    const minutes=Math.floor(time/60);
    let seconds=time%60;

    seconds=seconds<10 ? '0'+ seconds : seconds;

    for(i = 0; i<5; i++){
        document.getElementsByClassName("countdown")[i].innerHTML = (minutes+i*2)+ ": " + seconds;
    }
    time--;
}
idio = localStorage.getItem("idioma");
if(idio == null){
    localStorage.setItem("idioma", "Español");
}

//cambiar idioma
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
        tituloDePagina.innerHTML = 'Pagina principal';

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

        var español = document.getElementById("11");
        español.innerHTML = "";
        español.innerHTML += "Español / ";

        var ingles = document.getElementById("12");
        ingles.innerHTML = "";
        ingles.innerHTML += "Ingles";

        var prox = document.getElementById("13");
        prox.innerHTML = "";
        prox.innerHTML += "Proximas canciones";

        var pop = document.getElementById("14");
        pop.innerHTML = "";
        pop.innerHTML += "Mas populares";

        var art = document.getElementById("15");
        art.innerHTML = "";
        art.innerHTML += "Artistas";

        var us = document.getElementById("16");
        us.innerHTML = "";
        us.innerHTML += "Usuarios";

    }else{
        var tituloDePagina = document.getElementById("1");
        tituloDePagina.innerHTML = '';
        tituloDePagina.innerHTML = 'Authors I follow';

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

        var español = document.getElementById("11");
        español.innerHTML = "";
        español.innerHTML += "Spanish / ";

        var ingles = document.getElementById("12");
        ingles.innerHTML = "";
        ingles.innerHTML += "English";

        var prox = document.getElementById("13");
        prox.innerHTML = "";
        prox.innerHTML += "Next hits";

        var pop = document.getElementById("14");
        pop.innerHTML = "";
        pop.innerHTML += "Most populars";

        var art = document.getElementById("15");
        art.innerHTML = "";
        art.innerHTML += "Authors";

        var us = document.getElementById("16");
        us.innerHTML = "";
        us.innerHTML += "Users";
    }
}