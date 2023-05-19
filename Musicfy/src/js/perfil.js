usuarioAMostrar = localStorage.getItem("usuarioMostrado");
usuarioLogin = localStorage.getItem("loginAcc");

elementos = document.getElementsByClassName("perfil-elem");
if(usuarioAMostrar == usuarioLogin){
}else{
    elementos[4].innerHTML = null;
}

function abrirPag(elemento){
    switch (elemento){
        case "autores_mas_escuchados":
            window.open("autoresME.html", "_self");
        break;
        case "canciones_mas_escuchadas":
            window.open("cancionesME.html", "_self");
        break;
        case "canciones_mg":
            window.open("lista_me_gusta.html", "_self");
        break;
        case "mis_listas":
            window.open("ver_Listas.html", "_self")
        break;
        case "usuarios":
            window.open("gente_que_sigo.html", "_self")
        break;
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
        tituloDePagina.innerHTML = 'Perfil';

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

        var cookies = document.getElementById("10");
        cookies.innerHTML = "";
        cookies.innerHTML += "Gracias por formar parte de la familia de Musicfy!";

        titulo = document.getElementsByClassName("tituloSongs");
        var listas = document.getElementById("17");
        if(usuarioAMostrar == usuarioLogin){
            titulo[0].innerHTML = "Mi perfil";
            listas.innerHTML = "";
            listas.innerHTML += "Mis listas";
        }else{
            titulo[0].innerHTML = "perfil de "+usuarioAMostrar;
        }

        var español = document.getElementById("11");
        español.innerHTML = "";
        español.innerHTML += "Español / ";

        var ingles = document.getElementById("12");
        ingles.innerHTML = "";
        ingles.innerHTML += "Ingles";

        var seguidos = document.getElementById("13");
        seguidos.innerHTML = "";
        seguidos.innerHTML += "Autores seguidos";

        var escuchadas = document.getElementById("14");
        escuchadas.innerHTML = "";
        escuchadas.innerHTML += "Mas escuchadas";

        var favoritas = document.getElementById("15");
        favoritas.innerHTML = "";
        favoritas.innerHTML += "Canciones favoritas";

        

        var Amigos = document.getElementById("16");
        Amigos.innerHTML = "";
        Amigos.innerHTML += "Amigos";

    }else{
        var tituloDePagina = document.getElementById("1");
        tituloDePagina.innerHTML = '';
        tituloDePagina.innerHTML = 'Profile';

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

        var cookies = document.getElementById("10");
        cookies.innerHTML = "";
        cookies.innerHTML += "Thank you for being part of the Musicfy family!";

        titulo = document.getElementsByClassName("tituloSongs");
        var listas = document.getElementById("17");
        if(usuarioAMostrar == usuarioLogin){
            titulo[0].innerHTML = "My profile";
            listas.innerHTML = "";
            listas.innerHTML += "My playlists";
        }else{
            titulo[0].innerHTML = usuarioAMostrar+"'s profile ";
        }

        var español = document.getElementById("11");
        español.innerHTML = "";
        español.innerHTML += "Spanish / ";

        var ingles = document.getElementById("12");
        ingles.innerHTML = "";
        ingles.innerHTML += "English";

        var seguidos = document.getElementById("13");
        seguidos.innerHTML = "";
        seguidos.innerHTML += "Followed authors";

        var escuchadas = document.getElementById("14");
        escuchadas.innerHTML = "";
        escuchadas.innerHTML += "Most listened songs";

        var favoritas = document.getElementById("15");
        favoritas.innerHTML = "";
        favoritas.innerHTML += "Favourite songs";

        var Amigos = document.getElementById("16");
        Amigos.innerHTML = "";
        Amigos.innerHTML += "Friends";

        
        
    }
}