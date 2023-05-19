function desplegable(){
    if (document.getElementById("nav").style.display == "none"){
    document.getElementById("nav").style.display = "block";
    }
    else{document.getElementById("nav").style.display = "none";}
}

function goTo_Index(){
    window.open("index.html", "_self")
}

const expresiones = {
	usuario: /^[a-zA-Z]/,
	contraseña: /^[a-z0-9]{0,8}/,
}
function setStorage(){
    var x = 1;
    var founded = false;
    var usu = document.getElementById("username").value;
    var contra = document.getElementById("password").value;
    var nomApe = document.getElementById("name_surname").value; 
    var correo = document.getElementById("correo").value; 
    var imagenPerfil = document.getElementById("img").value;
    var substrImagen = imagenPerfil.substr(11);
    var stringImagenes = "images"
    substrImagen = stringImagenes+substrImagen;
    if(!(imagenPerfil.includes('/'))){
        substrImagen = "images/pfp.png"
    }
    if(comprobar(usu, contra, correo)){
        while (founded == false){
            if(correo == localStorage.getItem("correo "+x)){
                alert("ya hay una cuenta con este correo");
                founded = true;
            } 
            if(usu == localStorage.getItem("usuario "+x)){
                alert("ya hay una cuenta con este usuario");
                founded = true;
            } 
            if(localStorage.getItem("usuario "+x) == null){

                localStorage.setItem("usuario "+x, usu);
                localStorage.setItem("contraseña "+x, contra);
                localStorage.setItem("nombre "+x, nomApe);
                localStorage.setItem("correo "+x, correo);
                localStorage.setItem("NumeroTotalCuentas", x);
                localStorage.setItem(usu+" imagenPerfil", substrImagen);
                founded = true;
                window.open("Log_In.html", "_self");
                
            }
            /*comprobamos si hay alguna cuenta con el mismo correo al recorrer todos los correos que existen */
            
            x++;
        }
    }
}
function alertLogIn(){
    if (confirm("Inicia sesion para eschar miles de canciones...")){
        window.open("Log_In.html", "_self");
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

function ponerImagenPerfil(){
    
}