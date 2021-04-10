var instrucciones = ['Ayuda a Pingu a encontrar todas las palabras dadas en la sopa de letras.<br> <img src="./Recursos/IMG/ImagenJuego_01.png"  width="100%">','Para ello, debes hacer clic en la primera letra de la palabra y luego, otro clic en la última letra en la misma.<br><img src="./Recursos/IMG/ImagenJuego_02.jpeg"  width="100%">','En la parte inferior puedes encontrar la lista de palabras que necesita Pingu.<br><center><img src="./Recursos/IMG/ImagenJuego_03.png"  width="50%;"></center>','Recuerda que tienes tiempo limite para resolver la sopa de letras ¡Buena suerte!.<br><img src="./Recursos/IMG/ImagenJuego_04.png"  width="100%">'];

var contador = 0;

function siguienteFrase(){
	if (contador < 3){
		contador++;
		document.getElementById("textoInstrucciones").innerHTML = instrucciones[contador];
	}
	
	
}

function anteriorFrase(){
	if (contador > 0){
		contador--;
		document.getElementById("textoInstrucciones").innerHTML = instrucciones[contador];
	}
}

document.getElementById("textoInstrucciones").innerHTML = instrucciones[0];
document.getElementById("anterior").onclick = function () { anteriorFrase(); };
document.getElementById("siguiente").onclick = function () { siguienteFrase(); };