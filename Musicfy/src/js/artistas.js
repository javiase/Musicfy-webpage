var usuarioAMostrar = localStorage.getItem("usuarioMostrado");
var usuarioLogin = localStorage.getItem("loginAcc");



pintaAutores()
function pintaAutores() {
    var artistasDisplay = document.getElementById('artistas');
    
    var lista_siguiendo = JSON.parse(localStorage.getItem(usuarioAMostrar+' listaAutoresSiguiendo'));
    var lista_autores= JSON.parse(localStorage.getItem('listaTodosAutores'));
    for (ii=0; ii< lista_siguiendo.length; ii++) {  
        if (lista_siguiendo[ii]){
            artistasDisplay.innerHTML += `<div class="cancion" ><img src="images/artistas/${lista_autores[ii]}.jpg" onclick="irArtista('${lista_autores[ii]}')"  class='img'><div class="caption">"${lista_autores[ii]}"</div></div>`;
        }
    }
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
        tituloDePagina.innerHTML = 'Autores que sigo';

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
            titulo[0].innerHTML = "Autores que sigo";
        }else{
            titulo[0].innerHTML = "Autores que sigue "+usuarioAMostrar;
        }       

        var footer = document.getElementById("10");
        footer.innerHTML = "";
        footer.innerHTML += "Escucha MILES de canciones con Musicfy!";

        var español = document.getElementById("11");
        español.innerHTML = "";
        español.innerHTML += "Español / ";

        var ingles = document.getElementById("12");
        ingles.innerHTML = "";
        ingles.innerHTML += "Ingles";

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

        var titulo = document.getElementsByClassName("tituloSongs");
        if(usuarioAMostrar == usuarioLogin){
            titulo[0].innerHTML = "Followed authors";
        }else{
            titulo[0].innerHTML = "Authors that "+usuarioAMostrar+" follows";
        }       

        var footer = document.getElementById("10");
        footer.innerHTML = "";
        footer.innerHTML += "Listen to THOUSANDS of songs in Musicfy!";

        var español = document.getElementById("11");
        español.innerHTML = "";
        español.innerHTML += "Spanish / ";

        var ingles = document.getElementById("12");
        ingles.innerHTML = "";
        ingles.innerHTML += "English";
    }
}