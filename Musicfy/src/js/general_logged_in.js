acc = localStorage.getItem("loginAcc");

imgAcc = localStorage.getItem(acc+' imagenPerfil');
imgPerfill = document.getElementById('pfp');
imgPerfill.setAttribute('src', imgAcc);
//cambiar color

tema = localStorage.getItem("tema");
if(tema == null){
    localStorage.setItem("tema", "oscuro");
}

claroscuro=document.getElementById('claroscuro');
titulo=document.getElementById('boton_claroscuro');
if(localStorage.getItem('tema')== "claro"){
    claroscuro.href="style/style_logged_oscuro.css"
    titulo.innerHTML += "Modo noche";


}
else{
    claroscuro.href="style/style_logged_in.css"
    titulo.innerHTML += "Modo luminoso";
}

function cambiar_color(){
    claroscuro=document.getElementById('claroscuro');
    titulo=document.getElementById('boton_claroscuro');
    if(localStorage.getItem('tema')== "claro"){
        localStorage.setItem("tema", "oscuro");
        claroscuro.href="style/style_logged_in.css"
        titulo.innerHTML = "Modo Luminoso";

    }else{
        localStorage.setItem("tema", "claro");
        claroscuro.href="style/style_logged_oscuro.css"
        titulo.innerHTML = "Modo Noche";
    }

}


function ponerCuentaOriginal(){
    localStorage.setItem("usuarioMostrado", acc);

}
function desplegable(){
    if (document.getElementById("nav").style.display == "none"){
    document.getElementById("nav").style.display = "block";
    }
    else{document.getElementById("nav").style.display = "none";}
}

function goTo_CrearLista(){
    window.open("crearLista.html", "_self");
}

function goTo_Cuenta(){
    localStorage.setItem("usuarioMostrado", acc)
    window.open("", "_self");
}

function goTo_IndexLoggedIn(){
    localStorage.setItem("usuarioMostrado", acc)
    window.open("index_logged_in.html", "_self");
}

function goTo_Perfil(){
    localStorage.setItem("usuarioMostrado", acc)
    window.open("perfil.html", "_self");
}

function goTo_MostrarLista(){
    localStorage.setItem("usuarioMostrado", acc)
    window.open("mostrar_Lista.html", "_self");
}

function goTo_VerListas(){
    localStorage.setItem("usuarioMostrado", acc)
    window.open("ver_Listas.html", "_self");
}

function alertLogOut(){
    if (confirm("Are you sure you want to log out?")){
        var cerrar = document.getElementById("cerrar-sesion");
        cerrar.setAttribute("href", "index.html");
    }
}
setImgProfile();
function setImgProfile(){
    var imgPerfilPoner = localStorage.getItem("imagenPerfil");
    if (imgPerfilPoner != null){
        var imgPerfil = document.getElementById("pfp");
        imgPerfil.setAttribute("src", imgPerfilPoner);
    }
}

function irArtista(artista){
    switch (artista){
        case "Bad Bunny":
            window.open("Bad Bunny.html", "_self");
        break;
        case "Quevedo":
            window.open("Quevedo.html", "_self");
        break;
        case "Rosalia":
            window.open("Rosalia.html", "_self");
        break;
        case "Jay-Z":
            window.open("Jay-Z.html", "_self");
        break;
        case "Ctangana":
            window.open("Ctangana.html", "_self");
        break;
    }
}