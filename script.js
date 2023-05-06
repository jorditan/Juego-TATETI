let turno = 1;
let fichasPosibles = ["O", "X"];
let fichasPuestas = 0;
let partidaFinalizada = false;
let textoVictoria = document.getElementById("texto");
let botones = 
Array.from(document.getElementsByTagName("button"))

botones.forEach(x => x.addEventListener("click", ponerFicha));

function ponerFicha(event) {
    let botonPulsado = event.target;
    if(!partidaFinalizada && botonPulsado.innerHTML == ""){
        botonPulsado.innerHTML = fichasPosibles[turno];
        fichasPuestas += 1;
    }

    let estadoPartida = estado();
    if (estadoPartida == 0) {
        cambiarTurno();
        if (fichasPuestas > 9) {
        ia();
        estadoPartida = estado();
        puestas += 1;
        cambiarTurno(); 
        }
    }

    if(estadoPartida == 1){
        textoVictoria.innerHTML = "Ganaste ;)"
        textoVictoria.style.visibility = "visible";
        partidaAcabada = true;
    }
    else if(estadoPartida == -1){
        textoVictoria.innerHTML = "Has perdido ;("
        partidaAcabada = true;
        textoVictoria.style.visibility = "visible";
    }	
}

function cambiarTurno() {
    if (turno ==1){
        turno = 0;
    }
    else {
        turno = 1;
    }
}

function estado() {
    let posicionVictoria = 0;
    let nEstado = 0;

    function sonIguales(...args){
        valores = args.map(x=>x.innerHTML);
        if (valores[0] != "" && valores.every((x, i, arr) => x===arr[0])) {
            args.forEach(x=> x.style.backgroundColor = "#f09580")
            return true;
        }
        else {
            return false;
        }
    }


if (sonIguales(botones[0], botones[1], botones [2])) {
    posicionVictoria = 1;
}

if (sonIguales(botones[3], botones[4], botones [5])) {
    posicionVictoria = 2;
}

if (sonIguales(botones[6], botones[7], botones [8])) {
    posicionVictoria = 3;
}
if (sonIguales(botones[0], botones[3], botones [6])) {
    posicionVictoria = 4;
}
if (sonIguales(botones[1], botones[4], botones [7])) {
    posicionVictoria = 5;
}
if (sonIguales(botones[2], botones[5], botones [8])) {
    posicionVictoria = 6;
}
if (sonIguales(botones[0], botones[4], botones [8])) {
    posicionVictoria = 7;
}
if (sonIguales(botones[2], botones[4], botones [6])) {
    posicionVictoria = 8;
}

if (posicionVictoria > 0) {
    if (turno == 1) {
        nEstado = 1;
    }
    else {
        nEstado= -1;
    }  
    }
    return nEstado;

}

function ia(){
	function aleatorio(min, max) {
  		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	let valores = botones.map(x=>x.innerHTML);
	let pos = -1;

	if(valores[4]==""){
		pos = 4;
	}
	else{
		let n = aleatorio(0, botones.length-1);
		while(valores[n]!=""){
			n = aleatorio(0, botones.length-1); 
		}
		pos = n;
	}

	botones[pos].innerHTML = "O";
	return pos;
}


