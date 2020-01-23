$(document).ready(function(){
	document.getElementById("registrarse").onclick = function () { solicitarRegistroMaestro(); };
	document.getElementById("iniciar").onclick = function () { solicitarInicioMaestro(); };

	function solicitarRegistroMaestro(){
		var usuarioM = $("#usuario").val();
		var claveM = $("#clave").val();
		$.ajax({ url: './LoginControl.php',
			data: {usuario: usuarioM, clave: claveM, tipo: 1},
			type: 'post',
			success: function(output) {
				alert(output);
			}
		});
	}

	function solicitarInicioMaestro(){
		var usuarioM = $("#usuario").val();
		var claveM = $("#clave").val();
		$.ajax({ url: './LoginControl.php',
			data: {usuario: usuarioM, clave: claveM, tipo: 2},
			type: 'post',
			success: function(output) {
				if (output === "0"){
					location.href="./PanelControl";
				} else {
					alert(output);
				}
			}
		});
	}

	function verificarInicioSesion(){
		$.ajax({ url: './auth.php',
			data: {tipo: "verificar"},
			type: 'post',
			success: function(output) {
				if (output === "0"){
					
				} else {
					location.href="./PanelControl";
				}
			}
		});
	} 
	
	verificarInicioSesion(); 
	
});