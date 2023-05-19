const lTitulos = JSON.parse(localStorage.getItem("listaTitulosTotal"));
const nTitulos = lTitulos.length;
login = localStorage.getItem("loginAcc");
localStorage.setItem("usuarioMostrado", login);
var listaTitulosDisplay = JSON.parse(localStorage.getItem("listaTitulosDisplay"))
listaTitulosDisplay = []

function crearLista(){
    window.open("crearLista.html", "_self");
}

//aqui se muestran en pantalla las listas personalizadas comprobando el nombre de cada lista coincida con el login
listasPersonalizadas();
function listasPersonalizadas(){
    if (listaTitulosDisplay == null || listaTitulosDisplay == "[]"){
        var listaTitulosDisplay = [];
        var acc = localStorage.getItem("loginAcc");
        for(ii=0; ii<nTitulos; ii++){
            var str = lTitulos[ii].substring(0, lTitulos[ii].indexOf(' '));
            
            if(str == acc){
                var length = lTitulos[ii].length;
                listaTitulosDisplay.push(lTitulos[ii].substring(lTitulos[ii].indexOf(' ')+1, length));
            }
            
        }
        localStorage.setItem("listaTitulosDisplay", JSON.stringify(listaTitulosDisplay));
    }
} 

llenarTabla();
function llenarTabla(){

    const tableReg = document.getElementById('tablaTotalCanciones');

    var tbody = document.querySelector('#tablaTotalCanciones tbody');

    tbody.innerHTML = "";
    
    var titulosDisplay = JSON.parse(localStorage.getItem("listaTitulosDisplay"));
    var ntitulosDisplay = titulosDisplay.length;
    
    for(ii=0; ii<ntitulosDisplay; ii++){
        var fila = document.createElement("tr");
        var tituloActual = titulosDisplay[ii];
        fila.setAttribute('id', tituloActual);
        

        var celdaTitulo = document.createElement("td");
        celdaTitulo.setAttribute('id', tituloActual);
        celdaTitulo.setAttribute('onclick', "guardarParametro(this.id)");
        
        var textoTitulo = document.createTextNode(tituloActual);

        var celdaBasura = document.createElement("td");

        var basura = document.createElement("input");
        basura.setAttribute("id", ii);
        basura.setAttribute("type", "button");
        basura.setAttribute("value", "eliminar");
        basura.setAttribute("onclick", "borrar(this.id)");
        
        celdaTitulo.appendChild(textoTitulo);
        celdaBasura.appendChild(basura);
    
        fila.appendChild(celdaTitulo);
        fila.appendChild(celdaBasura);
    
        tbody.appendChild(fila);
    }
}
function doSearch()
{
    const tableReg = document.getElementById('tablaTotalCanciones');
    const searchText = document.getElementById('searchTerm').value.toLowerCase();
    let total = 0;

    // Recorremos todas las filas con contenido de la tabla
    for (let i = 1; i < tableReg.rows.length; i++) {

        var found = false;
        var cellsOfRow = tableReg.rows[i].getElementsByTagName('td');
        // Recorremos todas las celdas
        for (let j = 0; j < cellsOfRow.length && !found; j++) {
            const celda = cellsOfRow[j].innerHTML.toLowerCase();
            // Buscamos el texto en el contenido de cada celda (si da -1, no lo hay)
            if (searchText.length == 0 || celda.indexOf(searchText) > -1) {
                found = true;
                total++;
            }
        }
        if (found) {
            tableReg.rows[i].style.display = '';
        } else {
            // si no ha encontrado ninguna coincidencia, esconde la
            // fila de la tabla
            tableReg.rows[i].style.display = 'none';
        }
        
    }
}
function guardarParametro(parametro){
    localStorage.setItem("listaAMostrar", parametro);
    window.open("mostrar_Lista.html", "_self");
}

function borrar(index){
    var titulosDisplay = JSON.parse(localStorage.getItem("listaTitulosDisplay"));
    var titulosTotal = JSON.parse(localStorage.getItem("listaTitulosTotal"));
    var acc = localStorage.getItem("loginAcc");
    result = window.confirm("¿Segur@ que quieres eliminar esta cancion?")
    if (result){
        //eliminamos tanto de display como de la lista de listas totales
        var arr = acc+" "+titulosDisplay[index]
        var ind = titulosTotal.indexOf(arr)
        titulosTotal.splice(ind, 1);
        titulosDisplay.splice(index, 1);

    }
    localStorage.setItem("listaTitulosDisplay", JSON.stringify(titulosDisplay));
    localStorage.setItem("listaTitulosTotal", JSON.stringify(titulosTotal));

    llenarTabla()
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
        tituloDePagina.innerHTML = 'Mis listas';

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
        footer.innerHTML += "Escucha MILES de canciones en musicfy!";

        var español = document.getElementById("11");
        español.innerHTML = "";
        español.innerHTML += "Español / ";

        var ingles = document.getElementById("12");
        ingles.innerHTML = "";
        ingles.innerHTML += "Ingles";

        var listas = document.getElementById("13");
        listas.innerHTML = "";
        listas.innerHTML += "Mis listas";

        var crear = document.getElementById("14");
        crear.innerHTML = "";
        crear.innerHTML += "Crear lista";

        var tit = document.getElementById("15");
        tit.innerHTML = "";
        tit.innerHTML += "Titulo";

    }else{
        var tituloDePagina = document.getElementById("1");
        tituloDePagina.innerHTML = '';
        tituloDePagina.innerHTML = 'My playlists';

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
        footer.innerHTML += "Listen to THOUSANDS of songs in Musicfy!";
        

        var español = document.getElementById("11");
        español.innerHTML = "";
        español.innerHTML += "Spanish / ";

        var ingles = document.getElementById("12");
        ingles.innerHTML = "";
        ingles.innerHTML += "English";

        var listas = document.getElementById("13");
        listas.innerHTML = "";
        listas.innerHTML += "My playlists";

        var crear = document.getElementById("14");
        crear.innerHTML = "";
        crear.innerHTML += "Create playlist";

        var tit = document.getElementById("15");
        tit.innerHTML = "";
        tit.innerHTML += "Title";
    }
}