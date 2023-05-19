//codigo de Alvaro footer
var audio;
var todosLosAudios = document.querySelectorAll('audio');
var todosLosBTNs = document.querySelectorAll('PPbutton');
var actualID;

function pauseAudios(){
	todosLosAudios.forEach(function(audio){
    audio.currentTime = 0
		audio.pause();
	});
}
function playSong(audioID, songName) {
    const PlayPauseButton = document.getElementsByClassName("PPbutton")[audioID]; //EL ID DEL AUDIO ES EL MISMO QUE EL DEL BOTON
    const footerButton = document.getElementById("footerButton"); //EL ID DEL BOTON DEL FOOTER
    if(audioID != actualID || actualID == null){
        pauseAudios();
        actualID = audioID;
        audio = document.getElementsByClassName("audio")[audioID];
        document.getElementById("nameOfSong").innerHTML = songName;
        audio.play();
        PlayPauseButton.textContent = "| |";
        footerButton.textContent = "| |";
        for(var i = 0; i < 10; i++){
            if(i!=audioID){
                document.getElementsByClassName("PPbutton")[i].textContent = "▶";
            }
        }
    }
    const rangoCancion = document.querySelector('input[type="range"]');
    let ratonEnSlider = false;
    audio.addEventListener("loadeddata", () => {
        rangoCancion.value = 0;
    });

    audio.addEventListener("timeupdate", () => {
        if (!ratonEnSlider) {
        rangoCancion.value = audio.currentTime / audio.duration * 100;
        }
    });

    audio.addEventListener("ended", () => {
        PlayPauseButton.textContent = "▶";
        footerButton.textContent = "▶";
    });


    PlayPauseButton.addEventListener("click", () => {
        if(audio.paused){
        audio.play();
        PlayPauseButton.textContent = "| |";
        footerButton.textContent = "| |";
        for(var i = 0; i < 10; i++){
            if(i!=audioID){
                document.getElementsByClassName("PPbutton")[i].textContent = "▶";
            }
        }
        }else{
        audio.pause();
        PlayPauseButton.textContent = "▶";
        footerButton.textContent = "▶";
        for(var i = 0; i < 10; i++){
            if(i!=audioID){
                document.getElementsByClassName("PPbutton")[i].textContent = "▶";
            }
        }
        }
    });
    footerButton.addEventListener("click", () => {
        if(audio.paused){
        audio.play();
        PlayPauseButton.textContent = "| |";
        footerButton.textContent = "| |";
        for(var i = 0; i < 10; i++){
            if(i!=audioID){
                document.getElementsByClassName("PPbutton")[i].textContent = "▶";
            }
        }
        }else{
        audio.pause();
        PlayPauseButton.textContent = "▶";
        footerButton.textContent = "▶";
        for(var i = 0; i < 10; i++){
            if(i!=audioID){
                document.getElementsByClassName("PPbutton")[i].textContent = "▶";
            }
        }
        }
    });

    rangoCancion.addEventListener("change", () => {
        const pct = rangoCancion.value / 100;
        audio.currentTime = (audio.duration || 0) * pct;
    });

    rangoCancion.addEventListener("mousedown", () => {
        ratonEnSlider = true;
    });

    rangoCancion.addEventListener("mouseup", () => {
        ratonEnSlider = false;
    });
}
    
function cambiarVolumen(){
    audio.volume=document.getElementById("volumenCancion").value;
}