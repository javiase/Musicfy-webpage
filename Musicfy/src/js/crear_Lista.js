
login = localStorage.getItem("loginAcc");
localStorage.setItem("usuarioMostrado", login);
llenarTabla();


 
function verListas(){
    window.open("ver_Listas.html", "_self");
}
//Se llena la tabla donde se van a buscar las canciones con el total de canciones de la pagina web
function llenarTabla(){

    const tableReg = document.getElementById('tablaTotalCanciones');



    var tbody = document.querySelector('#tablaTotalCanciones tbody');

    tbody.innerHTML = "";

    var titulos = JSON.parse(localStorage.getItem("listaTodosTitulos"));
    var autores = JSON.parse(localStorage.getItem("listaTodosAutores"));
    var nCanciones = localStorage.getItem("nCanciones");
    
    for(ii=0; ii<nCanciones; ii++){
        var fila = document.createElement("tr");
    
        var celdaAutor = document.createElement("td");
        var celdaTitulo = document.createElement("td");
        var celdaCheckbox = document.createElement("td");
        
        var input = document.createElement("input");
        input.setAttribute('id', "checkbox"+ii);
        input.setAttribute('name', titulos[ii]);
        input.setAttribute('type',"checkbox");
        input.setAttribute('class',"checkbox");
        input.setAttribute('onClick', "añadirElemento(this)");
        
        var textoAutor = document.createTextNode(autores[ii]);
        var textoTitulo = document.createTextNode(titulos[ii]);
        
        celdaAutor.appendChild(textoAutor);
        celdaTitulo.appendChild(textoTitulo);
        celdaCheckbox.appendChild(input);
    
        fila.appendChild(celdaAutor);
        fila.appendChild(celdaTitulo);
        fila.appendChild(celdaCheckbox);
    
        tbody.appendChild(fila);
    
    }
}

//Funcion para buscar en una tabla el texto que se escriba en el text input
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

//Esta funcion añade canciones a la tabla donde se muestra la seleccion de canciones para la nueva playlist comprobando si el checkbox está true/false
function añadirElemento(elemento){
    const tableReg = document.getElementById('tablaLista');

    var tbody = document.querySelector('#tablaLista tbody');
    //si esta checkeada
    var bool = elemento.checked;
    if (bool){
        var fila = document.createElement("tr");
        fila.setAttribute('id', elemento.parentNode.parentNode.children[1].innerHTML);

        var celdaAutor = document.createElement("td");
        var celdaTitulo = document.createElement("td");
        
        
        var textoAutor = document.createTextNode(elemento.parentNode.parentNode.children[0].innerHTML);
        var textoTitulo = document.createTextNode(elemento.parentNode.parentNode.children[1].innerHTML);
        
        celdaAutor.appendChild(textoAutor);
        celdaTitulo.appendChild(textoTitulo);
    
        fila.appendChild(celdaAutor);
        fila.appendChild(celdaTitulo);
    
        tbody.appendChild(fila);
    }else{
        tbody.removeChild(document.getElementById(elemento.parentNode.parentNode.children[1].innerHTML));
    }
}

//Esta funcion guarda en el localstore la playlist creada
function nuevaLista(){
    var diccionario = {};

    var tableReg = document.getElementById('tablaLista');
    var nombreLista = document.getElementById("tituloLista").value;
    if(localStorage.getItem(nombreLista) == null){

        var numeroFilas = document.getElementById("tablaLista").rows.length;

        var autores = [];
        var titulos = [];
    
        diccionario["tituloLista"]=nombreLista;
        //Llenamos diccionario con las canciones y sus artistas
        for (ii =0; ii<numeroFilas; ii++){
            var fila = tableReg.rows[ii].getElementsByTagName('td');
            for (jj = 0; jj < fila.length; jj++) {
                
                if (jj%2 == 0){
                    autores.push(fila[jj].innerHTML);
                }else{
                    titulos.push(fila[jj].innerHTML);
                } 
            }
        }
        diccionario["autores"]=autores;
        diccionario["titulos"]=titulos;
        var acc = localStorage.getItem("loginAcc");
        var str = acc+" "+nombreLista;
        localStorage.setItem(str, JSON.stringify(diccionario));
        
        //creamos una lista en el localstore con todos los titulos de las listas creadas en caso de que ya exista, le añadimos un nuevo titulo
        var listaTotal = [];
        
        if (JSON.parse(localStorage.getItem("listaTitulosTotal")) == null){
            localStorage.setItem("listaTitulosTotal", JSON.stringify(listaTotal));       
        }
        listaTotal = JSON.parse(localStorage.getItem("listaTitulosTotal"));
        //meter en la lista de listas creadas solamente las listas que tengan como primera palabra el mismo nombre que el loginacc

        listaTotal.push(str);
        localStorage.setItem("listaTitulosTotal", JSON.stringify(listaTotal));

        //convertimos todos los checkboxes en false para comenzar con la siguiente lista
        var checkboxes = document.getElementsByClassName("checkbox");
        var nCheckboxes = localStorage.getItem("nCanciones");
        
        for (ii = 0; ii<nCheckboxes; ii++){
            if (checkboxes[ii].checked == true){
                checkboxes[ii].checked = false;
                añadirElemento(checkboxes[ii]);
            }
        }
        

    }else{
        alert("ya hay una lista con ese nombre");
    }
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
        tituloDePagina.innerHTML = 'Crear listas';

        var volver = document.getElementById("2");
        volver.innerHTML = "";
        volver.innerHTML += "buscador";

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

        var cookies = document.getElementById("8");
        cookies.innerHTML = "";
        cookies.innerHTML += "Politica de cookies";

        var footer = document.getElementById("10");
        footer.innerHTML = "";
        footer.innerHTML += "Crea las MEJORES listas con Musicfy!";

        var español = document.getElementById("11");
        español.innerHTML = "";
        español.innerHTML += "Español / ";

        var ingles = document.getElementById("12");
        ingles.innerHTML = "";
        ingles.innerHTML += "Ingles";

        var crear = document.getElementById("13");
        crear.innerHTML = "";
        crear.innerHTML += "Crear lista";

        var listas = document.getElementById("14");
        listas.innerHTML = "";
        listas.innerHTML += "Mis listas";

        var aut = document.getElementById("15");
        aut.innerHTML = "";
        aut.innerHTML += "Autor";

        var tit = document.getElementById("16");
        tit.innerHTML = "";
        tit.innerHTML += "Titulo";

        var aut = document.getElementById("17");
        aut.innerHTML = "";
        aut.innerHTML += "Autor";

        var tit = document.getElementById("18");
        tit.innerHTML = "";
        tit.innerHTML += "Titulo";

    }else{
        var tituloDePagina = document.getElementById("1");
        tituloDePagina.innerHTML = '';
        tituloDePagina.innerHTML = 'Create playlists';

        var buscador = document.getElementById("2");
        buscador.innerHTML = "";
        buscador.innerHTML += "search";

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
        footer.innerHTML += "Create the BEST playlists in Musicfy!";
        

        var español = document.getElementById("11");
        español.innerHTML = "";
        español.innerHTML += "Spanish / ";

        var ingles = document.getElementById("12");
        ingles.innerHTML = "";
        ingles.innerHTML += "English";

        var crear = document.getElementById("13");
        crear.innerHTML = "";
        crear.innerHTML += "Create playlist";

        var listas = document.getElementById("14");
        listas.innerHTML = "";
        listas.innerHTML += "My playlists";

        var aut = document.getElementById("15");
        aut.innerHTML = "";
        aut.innerHTML += "Author";

        var tit = document.getElementById("16");
        tit.innerHTML = "";
        tit.innerHTML += "Title";

        var aut = document.getElementById("17");
        aut.innerHTML = "";
        aut.innerHTML += "Author";

        var tit = document.getElementById("18");
        tit.innerHTML = "";
        tit.innerHTML += "Title";
    }
}