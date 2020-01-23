// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
// Modificado por Juan Manuel Rivas Quiroz

(function($) {
	$ (function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		
		// Revisamos que crucigrama abrió el usuario con la variable en la URL
		var query = window.location.search.substring(1);
		var vars = query.split("=");
		var choi=vars[1];
		//console.log('test:' + choi);
		if(choi==1){
			var puzzleData = [
				{
					clue: '<img id="img1" class="img-fluid rounded" src="imagenes/img'+ choi + '1.png" height="30%" width="30%">',
					answer: "conejo",
					position: 1,
					orientation: "across",
					startx: 1,
					starty: 4
				},
			 	{
					clue: '<img id="img2" class="img-fluid rounded" src="imagenes/img'+ choi + '2.png" height="30%" width="30%">',
					answer: "raton",
					position: 2,
					orientation: "across",
					startx: 4,
					starty: 6
				},
				{
					clue: '<img id="img3" class="img-fluid rounded" src="imagenes/img'+ choi + '3.png" height="30%" width="30%">',
					answer: "gato",
					position: 3,
					orientation: "across",
					startx: 1,
					starty: 7
				},
				{
					clue: '<img id="img4" class="img-fluid rounded" src="imagenes/img'+ choi + '4.png" height="30%" width="30%">',
					answer: "perro",
					position: 4,
					orientation: "down",
					startx: 4,
					starty: 3 
				},
				{
					clue: '<img id="img6" class="img-fluid rounded" src="imagenes/img'+ choi + '6.png" height="30%" width="30%">',
					answer: "tigre",
					position: 6,
					orientation: "down",
					startx: 6,
					starty: 6
				},
				{
					clue: '<img id="img5" class="img-fluid rounded" src="imagenes/img'+ choi + '5.png" height="30%" width="30%">',
					answer: "delfin",
					position: 5,
					orientation: "down",	
					startx: 8,
					starty: 1
				},
			] ;
		}else if(choi==2){
			var puzzleData = [
				{
					clue: '<img id="img3" class="img-fluid rounded" src="imagenes/img'+ choi + '3.png" height="30%" width="30%">',
					answer: "cebra",
					position: 3,
					orientation: "across",
					startx: 6,
					starty: 3
				},
			 	{
					clue: '<img id="img2" class="img-fluid rounded" src="imagenes/img'+ choi + '2.png" height="30%" width="30%">',
					answer: "jirafa",
					position: 2,
					orientation: "across",
					startx: 1,
					starty: 4
				},
				{
					clue: '<img id="img5" class="img-fluid rounded" src="imagenes/img'+ choi + '5.png" height="30%" width="30%">',
					answer: "caballo",
					position: 5,
					orientation: "across",
					startx: 4,
					starty: 7
				},
				{
					clue: '<img id="img1" class="img-fluid rounded" src="imagenes/img'+ choi + '1.png" height="30%" width="30%">',
					answer: "vaca",
					position: 1,
					orientation: "down",
					startx: 6,
					starty: 1 
				},
				{
					clue: '<img id="img6" class="img-fluid rounded" src="imagenes/img'+ choi + '6.png" height="30%" width="30%">',
					answer: "foca",
					position: 6,
					orientation: "down",
					startx: 5,
					starty: 4
				},
				{
					clue: '<img id="img4" class="img-fluid rounded" src="imagenes/img'+ choi + '4.png" height="30%" width="30%">',
					answer: "rana",
					position: 4,
					orientation: "down",	
					startx: 7,
					starty: 6
				},
			] ;
		}else if(choi==3){
			var puzzleData = [
				{
					clue: '<img id="img1" class="img-fluid rounded" src="imagenes/img'+ choi + '1.png" height="30%" width="30%">',
					answer: "sandia",
					position: 1,
					orientation: "across",
					startx: 4,
					starty: 6
				},
			 	{
					clue: '<img id="img2" class="img-fluid rounded" src="imagenes/img'+ choi + '2.png" height="30%" width="30%">',
					answer: "platano",
					position: 2,
					orientation: "across",
					startx: 1,
					starty: 3
				},
				{
					clue: '<img id="img3" class="img-fluid rounded" src="imagenes/img'+ choi + '3.png" height="30%" width="30%">',
					answer: "melon",
					position: 3,
					orientation: "down",
					startx: 2,
					starty: 1
				},
				{
					clue: '<img id="img4" class="img-fluid rounded" src="imagenes/img'+ choi + '4.png" height="30%" width="30%">',
					answer: "manzana",
					position: 4,
					orientation: "down",
					startx: 5,
					starty: 2 
				},
				{
					clue: '<img id="img6" class="img-fluid rounded" src="imagenes/img'+ choi + '6.png" height="30%" width="30%">',
					answer: "pera",
					position: 6,
					orientation: "across",
					startx: 2,
					starty: 8
				},
				{
					clue: '<img id="img5" class="img-fluid rounded" src="imagenes/img'+ choi + '5.png" height="30%" width="30%">',
					answer: "uva",
					position: 5,
					orientation: "down",	
					startx: 9,
					starty: 4
				},
			] ;
		}else if(choi==5){
			var puzzleData = [
				{
					clue: '<img id="img1" class="img-fluid rounded" src="imagenes/img'+ choi + '1.png" height="30%" width="30%">',
					answer: "profesor",
					position: 1,
					orientation: "across",
					startx: 1,
					starty: 2
				},
			 	{
					clue: '<img id="img2" class="img-fluid rounded" src="imagenes/img'+ choi + '2.png" height="30%" width="30%">',
					answer: "doctor",
					position: 2,
					orientation: "across",
					startx: 5,
					starty: 5
				},
				{
					clue: '<img id="img3" class="img-fluid rounded" src="imagenes/img'+ choi + '3.png" height="30%" width="30%">',
					answer: "cartero",
					position: 3,
					orientation: "across",
					startx: 9,
					starty: 8
				},
				{
					clue: '<img id="img6" class="img-fluid rounded" src="imagenes/img'+ choi + '6.png" height="30%" width="30%">',
					answer: "bombero",
					position: 6,
					orientation: "down",
					startx: 3,
					starty: 1 
				},
				{
					clue: '<img id="img4" class="img-fluid rounded" src="imagenes/img'+ choi + '4.png" height="30%" width="30%">',
					answer: "astronauta",
					position: 4,
					orientation: "down",
					startx: 6,
					starty: 1
				},
				{
					clue: '<img id="img5" class="img-fluid rounded" src="imagenes/img'+ choi + '5.png" height="30%" width="30%">',
					answer: "veterinario",
					position: 5,
					orientation: "down",	
					startx: 10,
					starty: 1
				},
			] ;
		}else if(choi==4){
			var puzzleData = [
				{
					clue: '<img id="img1" class="img-fluid rounded" src="imagenes/img'+ choi + '1.png" height="30%" width="30%">',
					answer: "comedor",
					position: 1,
					orientation: "across",
					startx: 4,
					starty: 4
				},
			 	{
					clue: '<img id="img2" class="img-fluid rounded" src="imagenes/img'+ choi + '2.png" height="30%" width="30%">',
					answer: "playa",
					position: 2,
					orientation: "across",
					startx: 2,
					starty: 7
				},
				{
					clue: '<img id="img6" class="img-fluid rounded" src="imagenes/img'+ choi + '6.png" height="30%" width="30%">',
					answer: "balcon",
					position: 6,
					orientation: "across",
					startx: 1,
					starty: 2
				},
				{
					clue: '<img id="img3" class="img-fluid rounded" src="imagenes/img'+ choi + '3.png" height="30%" width="30%">',
					answer: "cocina",
					position: 3,
					orientation: "down",
					startx: 4,
					starty: 2 
				},
				{
					clue: '<img id="img5" class="img-fluid rounded" src="imagenes/img'+ choi + '5.png" height="30%" width="30%">',
					answer: "baño",
					position: 5,
					orientation: "down",
					startx: 9,
					starty: 1
				},
				{
					clue: '<img id="img4" class="img-fluid rounded" src="imagenes/img'+ choi + '4.png" height="30%" width="30%">',
					answer: "casa",
					position: 4,
					orientation: "down",	
					startx: 6,
					starty: 6
				},
			] ;
		}
		
	
		$('#puzzle-wrapper').crossword(puzzleData, choi);
		
	});

})(jQuery);
