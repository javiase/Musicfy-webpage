
function comprobarDatos(){
	correcto = false;
	var usuarioLogin = document.getElementById("username").value;

	var contraseñaLogin = document.getElementById("password").value;
	var x = localStorage.getItem("NumeroTotalCuentas");
	for(var ii=1; ii <= x; ii++){

		if(usuarioLogin === localStorage.getItem("usuario "+ii)){
			if (contraseñaLogin == localStorage.getItem("contraseña "+ii)){
				localStorage.setItem("loginAcc", usuarioLogin);
				window.open("index_logged_in.html", "_self");
				correcto = true;
			}
		}
	}
	if (!correcto){
		alert("Datos erroneos")
	}
}

