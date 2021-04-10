$(document).ready(function(){

	document.getElementById("crearGrupo").onclick = function () { solicitarCrearGrupo(); };
	document.getElementById("modificarGrupo").onclick = function () { modificarGrupo(); };
	document.getElementById("eliminarGrupo").onclick = function () { eliminarGrupo(); };
	document.getElementById("desconectar").onclick = function () { desconectar(); };


	function desconectar(){
		$.ajax({ url: './auth.php',
			data: {tipo: "desconectar"},
			type: 'post',
			success: function(output) {
				alert(output);
				location.href="./index";
			}
		});
	}

	function solicitarCrearGrupo(){
		var grado = $("#grado").val();
		var grupo = $("#grupo").val();
		$.ajax({ url: './MaestroController.php',
			data: {grado : grado, grupo: grupo, tipo: "crearGrupo"},
			type: 'post',
			success: function(output) {
				alert(output);
			}
		});
	}

	function eliminarGrupo(){
		var gradoYGrupo = $("#listaAEliminarGrupos option:selected").text();
		var gradoAEliminar = gradoYGrupo.split("-")[0];
		var grupoAEliminar = gradoYGrupo.split("-")[1];
		$.ajax({ url: './MaestroController.php',
			data: {grado: gradoAEliminar, grupo: grupoAEliminar, tipo: "eliminarGrupo"},
			type: 'post',
			success: function(output) {

				alert(output);
				
			}
		});
			
	}



	function modificarGrupo(){
		var gradoYGrupo = $("#listaGrupos option:selected").text();
		var gradoAModificar = gradoYGrupo.split("-")[0];
		var grupoAModificar = gradoYGrupo.split("-")[1];
		var gradoNuevo = $("#gradoNuevo").val();
		var grupoNuevo = $("#grupoNuevo").val();
		$.ajax({ url: './MaestroController.php',
			data: {gradoAModificar : gradoAModificar, grupoAModificar: grupoAModificar, gradoNuevo: gradoNuevo, grupoNuevo: grupoNuevo, tipo: "modificarGrupo"},
			type: 'post',
			success: function(output) {
				alert(output);
			}
		});
	}

	function obtenerGrupos(){
		$.ajax({ url: './MaestroController.php',
			data: {tipo: "obtenerGrupos"},
			type: 'post',
			success: function(output) {
				var listaGrupos = output.split(",");
				var htmlListas = "";
				for (var i = 0; i < listaGrupos.length - 1; i++) {
					htmlListas += "<option value=\""+listaGrupos[i]+"\">"+listaGrupos[i]+"</option>";
				}
				$("#listaGrupos").append(htmlListas);
				$("#listaAEliminarGrupos").append(htmlListas);
			}
		});
	}


	function verificarInicioSesion(){
		$.ajax({ url: './auth.php',
			data: {tipo: "verificar"},
			type: 'post',
			success: function(output) {
				if (output === "0"){
					location.href="./index";
				} else {
					$("#nombreUsuario").append(output);
				}
			}
		});
	} 
	
	verificarInicioSesion();
	obtenerGrupos();
});