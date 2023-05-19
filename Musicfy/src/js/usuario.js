
//creando los perfiles de los usuarios predeterminados

//se crean los mg de cada usuario

localStorage.setItem("usu1 listaTodosMg", JSON.stringify([false, true, false, false, true, false, true, false, false, true, false, true, false, false]));
localStorage.setItem("usu2 listaTodosMg", JSON.stringify([true, true, true, false, true, true, true, true, false, true, true, true, true, false]));
localStorage.setItem("usu3 listaTodosMg", JSON.stringify([false, true, true, false, true, false, true, true, false, true, false, true, true, false]));
localStorage.setItem("usu4 listaTodosMg", JSON.stringify([false, false, true, true, true, false, false, true, true, true, false, false, true, true]));
localStorage.setItem("usu5 listaTodosMg", JSON.stringify([true, true, true, false, false, true, true, true, false, false, true, true, true, false]));

//se crean los "siguiendo" de cada usuario

localStorage.setItem("usu1 listaAutoresSiguiendo", JSON.stringify([false, true, false, false, true]));
localStorage.setItem("usu2 listaAutoresSiguiendo", JSON.stringify([true, true, true, false, true]));
localStorage.setItem("usu3 listaAutoresSiguiendo", JSON.stringify([false, true, true, false, true]));
localStorage.setItem("usu4 listaAutoresSiguiendo", JSON.stringify([false, false, true, true, true]));
localStorage.setItem("usu5 listaAutoresSiguiendo", JSON.stringify([true, true, true, false, false]));

//se crean las playlists de cada usuario

localStorage.setItem("usu1 playlist1", JSON.stringify({"tituloLista":"playlist1", "autores":["Jay-Z", "Ctangana", "LMFAO", "Bad Bunny", "Elton John"], "titulos":["Ni**as In Paris", "Tú Me Dejaste De Querer", "Sorry For Party Rocking", "Callaita", "I'm still standing"]}));
localStorage.setItem("usu1 playlist2", JSON.stringify({"tituloLista":"playlist2", "autores":["Jay-Z", "Elton John", "treyarch", "NF"], "titulos":["Ni**as In Paris", "I'm still standing", "Damned", "When I Grow Up"]}));
localStorage.setItem("usu2 playlist1", JSON.stringify({"tituloLista":"playlist1", "autores":["LMFAO", "Bad Bunny", "Elton John", "NF"], "titulos":["Sorry For Party Rocking", "Callaita", "I'm still standing", "When I Grow Up"]}));
localStorage.setItem("usu3 playlist1", JSON.stringify({"tituloLista":"playlist1", "autores":["Rosalia","Bad Bunny", "Quevedo"], "titulos":["Motomami","Callaita", "Bzrp Music Sessions,Vol.52"]}));
localStorage.setItem("usu3 playlist2", JSON.stringify({"tituloLista":"playlist2", "autores":["Ctangana", "LMFAO", "Bad Bunny"], "titulos":["Tú Me Dejaste De Querer", "Sorry For Party Rocking", "Callaita"]}));
localStorage.setItem("usu4 playlist1", JSON.stringify({"tituloLista":"playlist1", "autores":["Jay-Z", "Rosalia", "LMFAO","Elton John"], "titulos":["Ni**as In Paris", "Motomami", "Sorry For Party Rocking", "I'm still standing"]}));
localStorage.setItem("usu5 playlist1", JSON.stringify({"tituloLista":"playlist1", "autores":["Bad Bunny", "Bad Bunny"], "titulos":["Bichiyal","Callaita"]}));


//se introducen las listas de siguiendo amigos de cada usuario
listaSiguiendoUsus();
function listaSiguiendoUsus(){
    var listaTodosUsuarios = JSON.parse(localStorage.getItem("listaTodosUsuarios"));
    for(ii=1;ii<6;ii++){
        listaTrueFalse = []
        console.log(ii)
        for(jj=1;jj<listaTodosUsuarios.length+1;jj++){
            if(jj==listaTodosUsuarios.length+ii-5){
                listaTrueFalse.push(0);
            }else{
                listaTrueFalse.push(Math.round(Math.random()));
            }
        }
        localStorage.setItem("usu"+ii+" listaUsuariosSiguiendo", JSON.stringify(listaTrueFalse));
    }
}





x1 = JSON.parse(localStorage.getItem("listaTitulosTotal"));
if(x1 == null){
    localStorage.setItem("listaTitulosTotal", JSON.stringify(["usu1 playlist1", "usu1 playlist2", "usu2 playlist1", "usu3 playlist1", "usu3 playlist2", "usu4 playlist1", "usu5 playlist1"]));
}else{
    x1.push("usu1 playlist1", "usu1 playlist2", "usu2 playlist1", "usu3 playlist1", "usu3 playlist2", "usu4 playlist1", "usu5 playlist1");
    localStorage.setItem("listaTitulosTotal", JSON.stringify(x1));
}


//se introducen los siguiendo de cada usuario en la lista de siguiendo de todos los usuarios (para despues poder personalizar el perfil para cada usuario)

x3 = JSON.parse(localStorage.getItem("listaTodosNombresAutoresSiguiendo"));
if(x3 == null){
    localStorage.setItem("listaTodosNombresAutoresSiguiendo", JSON.stringify(["usu1 listaAutoresSiguiendo", "usu2 listaAutoresSiguiendo", "usu3 listaAutoresSiguiendo", "usu4 listaAutoresSiguiendo", "usu5 listaAutoresSiguiendo"]));
}else if(x3.length == 1){
    
    x3.push("usu1 listaAutoresSiguiendo", "usu2 listaAutoresSiguiendo", "usu3 listaAutoresSiguiendo", "usu4 listaAutoresSiguiendo", "usu5 listaAutoresSiguiendo");
    localStorage.setItem("listaTodosNombresAutoresSiguiendo", JSON.stringify(x3));
}


//se introducen los mg de cada usuario en la lista de Mg de todos los usuarios (para despues poder personalizar el perfil para cada usuario)

x2 = JSON.parse(localStorage.getItem("listaTodosNombresMg"));
if(x2 == null){
    localStorage.setItem("listaTodosNombresMg", JSON.stringify(["usu1 listaTodosMg", "usu2 listaTodosMg", "usu3 listaTodosMg", "usu4 listaTodosMg", "usu5 listaTodosMg"]));
}
