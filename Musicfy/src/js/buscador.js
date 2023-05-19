const listaTitulos = JSON.parse(localStorage.getItem("listaTodosTitulos"));
const listaAutores = JSON.parse(localStorage.getItem("listaTodosAutores"));
const listaImagenes = JSON.parse(localStorage.getItem("listaTodasImagenes"));
const ncanciones = listaTitulos.length;


loginAcc = localStorage.getItem("loginAcc");
localStorage.setItem("usuarioMostrado", loginAcc);
let titulosFiltrados = [];
let autoresFiltrados = [];
let autoresFiltrados2 =[];
let usuariosFiltrados = [];
titulosAux = listaTitulos;
autoresAux = listaAutores;
autoresAux2 = autoresAux.slice(0,5);
var listaIndices = [];


filtra("");
$(document).ready(function () {
    $('#searchSong').keyup(() => {
        let paraFiltrar = $('#searchSong').val();

            filtra(paraFiltrar);
    
    })
});
function filtra(filtro) {
    usuarios = JSON.parse(localStorage.getItem('listaTodosUsuarios'));
    listaIndicesUsuarios = [];
    listaIndices = [];
    nIndices = 0;
    dentroAutor = false;
    if (filtro) {
        usuariosFiltrados = usuarios.filter(autor => autor.toLocaleLowerCase().includes(filtro));
        titulosFiltrados = titulosAux.filter(titulo => titulo.toLocaleLowerCase().includes(filtro));
        autoresFiltrados2 = autoresAux2.filter(autor => autor.toLocaleLowerCase().includes(filtro));
        autoresFiltrados = autoresAux.filter(autor => autor.toLocaleLowerCase().includes(filtro));
        for (ii=0; ii< ncanciones; ii++)  {

            indiceTitulos = titulosAux.indexOf(titulosFiltrados[ii]);
            indiceAutores2 = autoresAux2.indexOf(autoresFiltrados2[ii]);
            indiceUsuarios = usuarios.indexOf(usuariosFiltrados[ii]);

            if(indiceTitulos > -1){
                listaIndices.push(indiceTitulos);
            }
            if(indiceUsuarios > -1){
                listaIndicesUsuarios.push(indiceUsuarios);
            }
        }
        for(kk=0;kk<ncanciones;kk++){
            indiceAutores = autoresAux.indexOf(autoresFiltrados[kk]);
            if(indiceAutores > -1){
                autoresAux[indiceAutores] = "a";
                console.log(indiceAutores)
                if(!(listaIndices.includes(indiceAutores))){
                    listaIndices.push(indiceAutores);
                }
            }

        }
        autoresAux = ['Bad Bunny', 'Jay-Z', 'Rosalia', 'Quevedo', 'Ctangana', 'Mareux', 'LMFAO', 'Estopa', 'P.T. Adamczyk', 'Bad Bunny', 'Mick Gordon', 'Elton John', 'treyarch', 'NF', 'Fleetwood Mac'];
        console.log(listaIndices)
        pintaCanciones();
        pintaAutoresBusqueda();
        pintaUsuarios();
    } else {
        titulosFiltrados = [...titulosAux];
        autoresFiltrados2 = [...autoresAux2];
        usuariosFiltrados = [...usuarios];
        for (ii=0; ii< ncanciones; ii++)  {
            indices = titulosAux.indexOf(titulosFiltrados[ii])
            if(indices > -1){
                listaIndices.push(indices);
            }
        }
        pintaCanciones();
        pintaAutoresBusqueda();
        pintaUsuarios();
    }
}
function pintaCanciones() {
    const resultadoCanciones = document.getElementById('resultadoCanciones');

    resultadoCanciones.innerHTML = '';
    cont = 0;
    if (listaIndices.length==0){
        resultadoCanciones.innerHTML=`<div class="fallo_busqueda" ><img src="images/components/404.png" class="img" ><div class="msg_fallo">"No se encontro nada"</div>`;
    }
    for (ii=0; ii< listaIndices.length; ii++) {
        if (cont == 4){
            cont = 0;
        }
        
        resultadoCanciones.innerHTML += `<div class="cancion">
                                            <img src="${listaImagenes[listaIndices[ii]]}" class="img" name="${listaTitulos[listaIndices[ii]]}" alt = "${listaAutores[listaIndices[ii]]}" >
                                            <button class="PPbutton" onclick="playSong(${ii}, '${listaTitulos[listaIndices[ii]]}')">▶</button>
                                            <audio class = "audio"><source src="images/${cont}.mp3" type="audio/mp3"></audio>
                                            <div class="caption">"${listaTitulos[listaIndices[ii]]}"</div>
                                            <input type="checkbox" class = "MG" id = "me_gusta${ii}" name ="me_gusta" onclick = listas()>
                                            <label for="heart" class = "heart">♥</label>
                                        </div>`;
        cont += 1;
    }
}

function pintaAutoresBusqueda() {
    const resultadoArtistas = document.getElementById('resultadoArtistas');
    resultadoArtistas.innerHTML = '';
    if (autoresFiltrados2.length==0){
        resultadoArtistas.innerHTML=`<div class="fallo_busqueda" ><img src="images/components/404.png" class="img" ><div class="msg_fallo">"No se encontro nada"</div>`;
    }
    for (ii=0; ii<autoresFiltrados2.length; ii++) {
        console.log('a')
        resultadoArtistas.innerHTML += `<div class="cancion">
                                            <img src="images/artistas/${autoresFiltrados2[ii]}/${autoresFiltrados2[ii]}.jpg" class="img" name="${autoresFiltrados2[ii]}" onclick="irArtista('${autoresFiltrados2[ii]}')" alt = "${autoresFiltrados2[ii]}">
                                            <input type="checkbox" class = "FollowArt" id = "seguirAutor${ii}" name ="SeguirAutor" onclick = autoresSiguiendo()>
                                            <label for="star" class = "starA">★</label>
                                            <div class="caption">"${autoresFiltrados2[ii]}"</div>
                                        </div>`;
        
    }
}
function pintaUsuarios() {
    const resultadoArtistas = document.getElementById('resultadoUsuarios');
    var listaUsuarios = JSON.parse(localStorage.getItem("listaTodosUsuarios"));
    console.log(listaUsuarios)
    resultadoArtistas.innerHTML = '';
    if (usuariosFiltrados.length==0){
        resultadoArtistas.innerHTML=`<div class="fallo_busqueda" ><img src="images/components/404.png" class="img" ><div class="msg_fallo">"No se encontro nada"</div>`;
    }
    for (ii=0; ii<usuariosFiltrados.length; ii++) {
        var imagenesUsuarios = localStorage.getItem(listaUsuarios[ii]+" imagenPerfil")
        console.log(listaUsuarios[ii])
        if(listaUsuarios[ii]!=loginAcc){
            resultadoArtistas.innerHTML += `<div class="cancion">
                                                <img src="${imagenesUsuarios}" class="img" onclick="abrirPerfilDe('${listaUsuarios[ii]}')">
                                                <input type="checkbox" class = "FollowUsu" id = "seguirUsuario${ii}" name ="SeguirAutor" onclick = usuariosSiguiendo()>
                                                <label for="star" class = "starU">★</label>
                                                <div class="caption">"${listaUsuarios[ii]}"</div>
                                            </div>`;

        }
        
    }
}
function abrirPerfilDe(usuario){
    localStorage.setItem("usuarioMostrado", usuario)
    window.open("perfil.html", "_self");
}
//rellena la lista de autores seguidos cada vez que se recarga la pagina para que no se pierda el progreso
guardarUsuariosSiguiendo()
function guardarUsuariosSiguiendo(){
    var listaUsuariosSiguiendo = JSON.parse(localStorage.getItem(loginAcc+" listaUsuariosSiguiendo"));
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
    var listaUsuariosSiguiendo = JSON.parse(localStorage.getItem(loginAcc+" listaUsuariosSiguiendo"));
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
    localStorage.setItem(loginAcc+" listaUsuariosSiguiendo", JSON.stringify(listaUsuariosSiguiendo));
}
//nose bien lo que hace, creo que rellena la lista de autores seguidos cada vez que se recarga la pagina para que no se pierda el progreso
guardarAutoresSiguiendo()
function guardarAutoresSiguiendo(){
    var listaAutoresSiguiendo = JSON.parse(localStorage.getItem(loginAcc+" listaAutoresSiguiendo"));
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
    var listaAutoresSiguiendo = JSON.parse(localStorage.getItem(loginAcc+" listaAutoresSiguiendo"));
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
    localStorage.setItem(loginAcc+" listaAutoresSiguiendo", JSON.stringify(listaAutoresSiguiendo));
}

var acc = localStorage.getItem("loginAcc");
var listaMg = JSON.parse(localStorage.getItem(acc+" listaTodosMg"));
if (listaMg != null){
    for (ii=0; ii<ncanciones; ii++){
        var checking = document.getElementById("me_gusta"+ii);
        if(listaMg[ii]){
            checking.checked = true;
        }else if(listaMg[ii] == false){
            checking.checked = false;
        }
    }
}

listas()
function listas(){
    var listaMg = JSON.parse(localStorage.getItem(acc+" listaTodosMg"));
    if (listaMg == null){
        listaMg = [];
    }
    for (ii=0; ii<ncanciones; ii++){
        var check = document.getElementById("me_gusta"+ii);
        
        if (check.checked){
            listaMg[ii]=true;
        }else if(check.checked == false){ //ùede haber aqui error
            listaMg[ii]=false
        }
    }
    localStorage.setItem(acc+" listaTodosMg", JSON.stringify(listaMg));
}

lista_de_nombrelistas_mg();
function lista_de_nombrelistas_mg(){
    var listaNombresMg = JSON.parse(localStorage.getItem("listaTodosNombresMg"));
    var existia = false;
    if (listaNombresMg == null){
        listaNombresMg = [];
    }
    
    for(ii=0; ii<listaNombresMg.length; ii++){
        if (listaNombresMg[ii] == (acc+" listaTodosMg")){
            existia = true;
        }
    }
    if(!existia){
        listaNombresMg.push(acc+" listaTodosMg");
    }
    localStorage.setItem("listaTodosNombresMg", JSON.stringify(listaNombresMg));
}


//codigo de Alvaro footer
var audio;
var todosLosAudios = document.querySelectorAll('audio');
var actualID;

function pauseAudios(){
	todosLosAudios.forEach(function(audio){
    audio.currentTime = 0
		audio.pause();
	});
}
function playSong(audioID, songName) {
    //allButtonsPause();
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

//El cambio de idioma

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
        tituloDePagina.innerHTML = 'Buscar';

        var volver = document.getElementById("2");
        volver.innerHTML = "";
        volver.innerHTML += "Volver";

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
        titulo[0].innerHTML = "Resultados de B&uacute;squeda";
        titulo[1].innerHTML = "Artistas";
        titulo[2].innerHTML = "Usuarios";

        var español = document.getElementById("11");
        español.innerHTML = "";
        español.innerHTML += "Español / ";

        var ingles = document.getElementById("12");
        ingles.innerHTML = "";
        ingles.innerHTML += "Ingles";

    }else{
        var tituloDePagina = document.getElementById("1");
        tituloDePagina.innerHTML = '';
        tituloDePagina.innerHTML = 'Search';

        var buscador = document.getElementById("2");
        buscador.innerHTML = "";
        buscador.innerHTML += "Go back";

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
        titulo[0].innerHTML = "Search results";   
        titulo[1].innerHTML = "Authors";
        titulo[2].innerHTML = "Users"; 

        var español = document.getElementById("11");
        español.innerHTML = "";
        español.innerHTML += "Spanish / ";

        var ingles = document.getElementById("12");
        ingles.innerHTML = "";
        ingles.innerHTML += "English";
    }
}