var nombreListaAMostrar = localStorage.getItem("listaAMostrar");
var acc = localStorage.getItem("loginAcc");
var diccionarioLista = JSON.parse(localStorage.getItem(acc+" "+nombreListaAMostrar));
var autores = diccionarioLista.autores;    
var titulos = diccionarioLista.titulos; 
localStorage.setItem("usuarioMostrado", acc);
llenarTabla(true);

function verLista(){
    window.open("ver_Listas.html", "_self");
}

function llenarTabla(a){

    const tableReg = document.getElementById('tablaTotalCanciones');

    var tbody = document.querySelector('#tablaTotalCanciones tbody');

    tbody.innerHTML = "";

    
    if (a){
        var nom = document.getElementById("tituloListaMostrada");
        nom.appendChild(document.createTextNode(nombreListaAMostrar));
    }
    

    var nCanciones = autores.length;

    for(ii=0; ii<nCanciones; ii++){
        var fila = document.createElement("tr");
        fila.setAttribute("draggable", true);
        fila.setAttribute("ondragstart", "dragit(event)");
        fila.setAttribute("ondragover", "dragover(event)");

        var celdaAutor = document.createElement("td");
        var celdaTitulo = document.createElement("td");
        var celdaBasura = document.createElement("td");

        var basura = document.createElement("input");
        basura.setAttribute("id", ii);
        basura.setAttribute("type", "button");
        basura.setAttribute("value", "eliminar");
        basura.setAttribute("onclick", "borrar('self.id')");
        
        var textoAutor = document.createTextNode(autores[ii]);
        var textoTitulo = document.createTextNode(titulos[ii]);
        
        celdaAutor.appendChild(textoAutor);
        celdaTitulo.appendChild(textoTitulo);
        celdaBasura.appendChild(basura)
    
        fila.appendChild(celdaAutor);
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

//para el drag and drop

var shadow
function dragit(event){
  shadow=event.target;
}

function dragover(e){
  let children=Array.from(e.target.parentNode.parentNode.children);
if(children.indexOf(e.target.parentNode)>children.indexOf(shadow))
  e.target.parentNode.after(shadow);
  else e.target.parentNode.before(shadow);
}
function borrar(index){
    result = window.confirm("¿Segur@ que quieres eliminar esta cancion?")
    if (result){
        autores.splice(index, 1);
        titulos.splice(index, 1);
    }
    localStorage.setItem(acc+" "+nombreListaAMostrar, JSON.stringify(diccionarioLista));
    llenarTabla(false)
}