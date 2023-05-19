var pUsuario = document.getElementById("printUsuario");
var pContraseña = document.getElementById("printContraseña");
var pNombre = document.getElementById("printNombreApellidos");
var pCorreo = document.getElementById("printCorreo");
var x = localStorage.getItem("listaTodosUsuarios");
login = localStorage.getItem("loginAcc");
localStorage.setItem("usuarioMostrado", login);
encontrarii(1);

function encontrarii(orden){
    var usuarioLogin = localStorage.getItem("loginAcc");
    var sol = 0;
    for(var ii=0; ii <= x.length; ii++){
        if(usuarioLogin == localStorage.getItem("usuario "+ii)){


            if (orden == 2){
                pUsuario.removeChild(pUsuario.childNodes.item(0));
                pContraseña.removeChild(pContraseña.childNodes.item(0));
                pNombre.removeChild(pNombre.childNodes.item(0));
                pCorreo.removeChild(pCorreo.childNodes.item(0));
            }
            if (orden == 1 || orden == 2){
                pUsuario.appendChild(document.createTextNode(usuarioLogin));
                pContraseña.appendChild(document.createTextNode(localStorage.getItem("contraseña "+ii)));
                pNombre.appendChild(document.createTextNode(localStorage.getItem("nombre "+ii)));
                pCorreo.appendChild(document.createTextNode(localStorage.getItem("correo "+ii)));
                orden = 0;
            }
            sol = ii;
        }
    }
    return sol;
}
mostrarFotoPerfil();
function mostrarFotoPerfil(){
    var usua = localStorage.getItem('loginAcc');
    var imgPerfilPrint = document.getElementById('printImgPerfil');    
    var imgPerfil = localStorage.getItem(usua+' imagenPerfil');
    imgPerfilPrint.innerHTML = '';
    imgPerfilPrint.innerHTML += `<div id = "imgPerf"> <img src="${imgPerfil}" class="cuenta-img"><div>`;
}

function nuevaFotoPerfil(){
    var usua = localStorage.getItem('loginAcc');
    var nuevaImagenPerfil = document.getElementById("img").value;
    var substrImagen = nuevaImagenPerfil.substr(11);
    var stringImagenes = "images"
    substrImagen = stringImagenes+substrImagen;
    localStorage.setItem(usua+' imagenPerfil', substrImagen);
    mostrarFotoPerfil();
}
function guardar(elemento){
    var x = encontrarii(0);
    switch (elemento){
        case "usuario":
            var usu = document.getElementById("editarUsuario").value;
            var repetido = false;
            var ii = 0;
            while (ii < x && !repetido){
                if (usu == localStorage.getItem("usuario "+ ii)){
                    alert("este usuario ya existe")
                    repetido = true;
                }
                ii++;
            }
            if (!repetido){
                if (comprobar(usu, "a", "a@a.com")){
                    localStorage.setItem("usuario "+x, usu);
                    localStorage.setItem("loginAcc", usu);
                    encontrarii(2);
                }
            }
            break;
        case "contraseña":
            var contra = document.getElementById("editarContraseña").value;
            if (comprobar("a", contra, "a@a.com")){
                localStorage.setItem("contraseña "+x, contra);
                encontrarii(2);
            }
            
            break;
        case "nombre":
            var nombre = document.getElementById("editarNombreApellidos").value;
            localStorage.setItem("nombre "+x, nombre);
            encontrarii(2);
            break;
        case "correo":
            var correo = document.getElementById("editarCorreo").value;
            var repetido = false;
            var ii = 0;
            while (ii < x && !repetido){
                if (correo == localStorage.getItem("correo "+ ii)){
                    alert("este correo ya existe")
                    repetido = true;
                }
                ii++;
            }
            if (!repetido){
                if (comprobar("a", "a", correo)){
                    localStorage.setItem("correo "+x, correo);
                    encontrarii(2);
                }
            }
            break;
        case "imagen":
            nuevaFotoPerfil();
            window.location.href = window.location.href;
            break;
    }
}

function comprobar(usu, contra, correo){
    if(!(/^[a-zA-Z]/.test(usu))){
        window.alert("El usuario solo puede contener letras mayusculas y minusculas");
        return false;
    }
    if(!(/^[a-z0-9]/.test(contra))){
        window.alert("Solo los siguientes caracteres están aceptados: (a-z, 0-9)");    
        return false;
    }
    if(!(/^[a-z0-9]{0,8}$/.test(contra))){
        window.alert("La contraseña debe de ser como maximo de 8 caracteres");  
        return false;
    }
    if(!(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}$/.test(correo))){
        window.alert("El correo debe tener el formato correcto");  
        return false;
    }
    return true;
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
        tituloDePagina.innerHTML = 'Mi cuenta';

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

        var footer = document.getElementById("10");
        footer.innerHTML = "";
        footer.innerHTML += "Gracias por formar parte de la familia Musicfy!";

        var español = document.getElementById("11");
        español.innerHTML = "";
        español.innerHTML += "Español / ";

        var ingles = document.getElementById("12");
        ingles.innerHTML = "";
        ingles.innerHTML += "Ingles";

        var cuen = document.getElementById("13");
        cuen.innerHTML = "";
        cuen.innerHTML += "Cuenta";

        var us = document.getElementById("14");
        us.innerHTML = "";
        us.innerHTML += "Usuario:&nbsp;&nbsp;";

        var cont = document.getElementById("15");
        cont.innerHTML = "";
        cont.innerHTML += "Contraseña:&nbsp;&nbsp;";

        var nya = document.getElementById("16");
        nya.innerHTML = "";
        nya.innerHTML += "Nombre y apellidos:&nbsp;&nbsp;";

        var correo = document.getElementById("17");
        correo.innerHTML = "";
        correo.innerHTML += "Correo:&nbsp;&nbsp;";

        var im = document.getElementById("18");
        im.innerHTML = "";
        im.innerHTML += "Imagen de Perfil:  ";


    }else{
        var tituloDePagina = document.getElementById("1");
        tituloDePagina.innerHTML = '';
        tituloDePagina.innerHTML = 'My Account';

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

        var footer = document.getElementById("10");
        footer.innerHTML = "";
        footer.innerHTML += "Thank you for being part of the Musicfy family!";

        var español = document.getElementById("11");
        español.innerHTML = "";
        español.innerHTML += "Spanish / ";

        var ingles = document.getElementById("12");
        ingles.innerHTML = "";
        ingles.innerHTML += "English";

        var cuen = document.getElementById("13");
        cuen.innerHTML = "";
        cuen.innerHTML += "Cuenta";

        var us = document.getElementById("14");
        us.innerHTML = "";
        us.innerHTML += "Username:&nbsp;&nbsp;";

        var cont = document.getElementById("15");
        cont.innerHTML = "";
        cont.innerHTML += "Password:&nbsp;&nbsp;";

        var nya = document.getElementById("16");
        nya.innerHTML = "";
        nya.innerHTML += "Name and surname:&nbsp;&nbsp;";

        var correo = document.getElementById("17");
        correo.innerHTML = "";
        correo.innerHTML += "Mail:&nbsp;&nbsp;";

        var im = document.getElementById("18");
        im.innerHTML = "";
        im.innerHTML += "Profile image:  ";
    }
}