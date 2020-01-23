var cont = 1;

window.addEventListener('load', function(){
	animaLetrero();
	animaNinja();

	document.getElementById("btFacil").addEventListener("click", function(){
		document.location.href= 'juegoFacil.html';
	});

	document.getElementById("btNormal").addEventListener("click", function(){
		document.location.href= 'juegoNormal.html';
	});

	document.getElementById("btDificil").addEventListener("click", function(){
		document.location.href= 'juegoDificil.html';
	});
});

function animaLetrero(){
	
	actualizar();
	setInterval(actualizar, 4200);

	function actualizar(){
		var a = Math.floor(Math.random() * 9) + 1;
		var b = Math.floor(Math.random() * 9) + 1;
		var c = a + b;

		var sa = document.getElementById("s1");
		var sb = document.getElementById("s2");
		var sc = document.getElementById("resul");

		sa.innerHTML = '<h1>' + a +'</h1>' ;
		sb.innerHTML = '<h1>' + b +'</h1>' ;
		sc.innerHTML = '<h1>' + c +'</h1>' ;
	}

	
}

function animaNinja(){
	animar();
	setInterval(animar, 400);

	function animar(){
		var ninja = document.getElementById("imgPinguino").childNodes[1];
		var i = (cont % 2) + 1;
		ninja.src = "img/Pinguino ninja " + i +".png";
		cont++;
	}
}

