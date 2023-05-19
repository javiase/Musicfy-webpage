usuarioAMostrar = localStorage.getItem("usuarioMostrado");
usuarioLogin = localStorage.getItem("loginAcc");

pintaAmigos()
function pintaAmigos() {
    var amigosDisplay = document.getElementById('amigos');
    
    var lista_siguiendo = JSON.parse(localStorage.getItem(usuarioAMostrar+' listaUsuariosSiguiendo'));
    var listaTodosUsuarios= JSON.parse(localStorage.getItem('listaTodosUsuarios'));
    for (ii=0; ii< lista_siguiendo.length; ii++) {  
        if (lista_siguiendo[ii]==1){
            imagenUsuario = localStorage.getItem(listaTodosUsuarios[ii]+" imagenPerfil");
            amigosDisplay.innerHTML += `<div class="cancion" ><img src="${imagenUsuario}" onclick="abrirPerfilDe('${listaTodosUsuarios[ii]}')"  class='img'><div class="caption">"${listaTodosUsuarios[ii]}"</div></div>`;
        }
    }
}
function abrirPerfilDe(usuario){
    localStorage.setItem("usuarioMostrado", usuario)
    window.open("perfil.html", "_self");
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
        tituloDePagina.innerHTML = 'Usuarios';

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
            titulo[0].innerHTML = "Usuarios que sigo";
        }else{
            titulo[0].innerHTML = "Usuarios que sigue "+usuarioAMostrar;
        }       

        var footer = document.getElementById("10");
        footer.innerHTML = "";
        footer.innerHTML += "Sigue a tus amigos y escucha lo que escuchan!";

        var español = document.getElementById("11");
        español.innerHTML = "";
        español.innerHTML += "Español / ";

        var ingles = document.getElementById("12");
        ingles.innerHTML = "";
        ingles.innerHTML += "Ingles";

    }else{
        var tituloDePagina = document.getElementById("1");
        tituloDePagina.innerHTML = '';
        tituloDePagina.innerHTML = 'Users';

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
            titulo[0].innerHTML = "Followed users";
        }else{
            titulo[0].innerHTML = "Users that "+usuarioAMostrar+" follows";
        }       

        var footer = document.getElementById("10");
        footer.innerHTML = "";
        footer.innerHTML += "Follow your friends and listen to what they are listening!";

        var español = document.getElementById("11");
        español.innerHTML = "";
        español.innerHTML += "Spanish / ";

        var ingles = document.getElementById("12");
        ingles.innerHTML = "";
        ingles.innerHTML += "English";
    }
}