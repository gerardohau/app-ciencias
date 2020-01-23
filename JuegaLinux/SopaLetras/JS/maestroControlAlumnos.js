$(document).ready(function(){

	document.getElementById("crearAlumno").onclick = function () { solicitarCreacionAlumno(); };
	document.getElementById("desconectar").onclick = function () { desconectar(); };
	document.getElementById("eliminarAlumno").onclick = function () { eliminarAlumno(); };
	document.getElementById("modificarAlumno").onclick = function () { modificarAlumno(); };

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

	function modificarAlumno(){
		var alumnoVerificador = $("#listaAlumnosAModificar option:selected").val();
		if (alumnoVerificador != 0){
			var alumnoSeleccionado = $("#listaAlumnosAModificar option:selected").text();
			var idAlumno = alumnoSeleccionado.split("-")[0];
			var nombreAlumno = $("#nombreAlumnoModificar").val();
			var apellidoAlumno = $("#apellidoAlumnoModificar").val();
			$.ajax({ url: './MaestroController.php',
				data: {tipo: "modificarAlumno", idAlumno: idAlumno, nombreNuevo: nombreAlumno, apellidoNuevo: apellidoAlumno},
				type: 'post',
				success: function(output) {
					alert(output);
				}
			});
		}
	}

	function eliminarAlumno(){
		var alumnoVerificador = $("#listaAlumnosAEliminar option:selected").val();
		if (alumnoVerificador != 0){
			var alumnoSeleccionado = $("#listaAlumnosAEliminar option:selected").text();
			var idAlumno = alumnoSeleccionado.split("-")[0];
			$.ajax({ url: './MaestroController.php',
				data: {tipo: "eliminarAlumno", idAlumno: idAlumno},
				type: 'post',
				success: function(output) {
					alert(output);
				}
			});
		} else {
			alert("Seleccione un alumno");
		}
	}

	function solicitarCreacionAlumno(){
		var indiceGrupoSeleccionado = $("#listaGrupos option:selected").val();
		if (indiceGrupoSeleccionado != 0){
			var gradoYGrupo = $("#listaGrupos option:selected").text();
			var grado = gradoYGrupo.split("-")[0];
			var grupo = gradoYGrupo.split("-")[1];
			var nombreAlumno = $("#nombreAlumno").val();
			var apellidoAlumno = $("#apellidoAlumno").val();
			$.ajax({ url: './MaestroController.php',
				data: {tipo: "crearAlumno", grado: grado, grupo: grupo, nombreAlumno: nombreAlumno, apellidoAlumno: apellidoAlumno},
				type: 'post',
				success: function(output) {
					alert(output);
				}
			});
		} else {
			alert("Seleccione un grupo");
		}

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

	function obtenerGrupos(){
		$.ajax({ url: './MaestroController.php',
			data: {tipo: "obtenerGrupos"},
			type: 'post',
			success: function(output) {
				var listaGrupos = output.split(",");
				var htmlListas = "<option value = '0'> Seleccione Grupo </option>";
				for (var i = 0; i < listaGrupos.length - 1; i++) {
					htmlListas += "<option value=\""+(i+1)+"\">"+listaGrupos[i]+"</option>";
				}
				$("#listaGrupos").append(htmlListas);
				$("#listaEliminarGrupos").append(htmlListas);
				$("#listaModificarGrupos").append(htmlListas);
			}
		});
	}

	function obtenerAlumno(listaACambiar,listaGrupo){
		var gradoYGrupo = $(listaGrupo + " option:selected").text();
		var grado = gradoYGrupo.split("-")[0];
		var grupo = gradoYGrupo.split("-")[1];

		$.ajax({ url: './MaestroController.php',
			data: {tipo: "obtenerAlumnos", grado: grado, grupo: grupo},
			type: 'post',
			success: function(output) {
				var listaGrupos = output.split(",");
				var htmlListas = "<option value = '0'> Seleccione Alumno </option>";
				for (var i = 0; i < listaGrupos.length - 1; i++) {
					htmlListas += "<option value=\""+(i + 1)+"\">"+listaGrupos[i]+"</option>";
				}
				$(listaACambiar).empty();
				$(listaACambiar).append(htmlListas);
			}
		});
	}

	$("#listaEliminarGrupos").change(function(){
		obtenerAlumno("#listaAlumnosAEliminar", "#listaEliminarGrupos");
	});
	$("#listaModificarGrupos").change(function(){
		obtenerAlumno("#listaAlumnosAModificar", "#listaModificarGrupos");
	});

	obtenerGrupos();
	verificarInicioSesion();
});