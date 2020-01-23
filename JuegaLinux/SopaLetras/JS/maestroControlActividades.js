$(document).ready(function(){


	document.getElementById("desconectar").onclick = function () { desconectar(); };
	document.getElementById("crearDecenas").onclick = function () { crearActividadCompleta(1); };
	document.getElementById("crearSopa").onclick = function () { crearActividadCompleta(2); };

	function seleccionarActividad() {
		var tipoActividad = $("#listaTipo option:selected").text();
		var idTipoActividad = tipoActividad.split("-")[0];
		ocultarActividades();
		if (idTipoActividad != 0){
			switch (idTipoActividad){
				case "1": $("#apartadoDecenas").show(); break;
				case "2": $("#apartadoSopaLetras").show(); break;
				case "3": $("#apartadoCrucigrama").show(); break;
			}
		}
	}

	function ocultarActividades(){
		$("#apartadoDecenas").hide();
		$("#apartadoCrucigrama").hide();
		$("#apartadoSopaLetras").hide();
	}

	function crearActividadSopa(idActividad){
		var numeroPalabras = $("#numeroPalabras").val();
		if (numeroPalabras >= 1){
			for (var i = 0; i < numeroPalabras; i++) {
				var palabra = $("#input" + i).val();
				var descripcion = $("#descripPalabra" + i).val();
				cargarPalabra(palabra, descripcion, idActividad);
			}
		}
	}

	function cargarPalabra(palabra, descripcion, idActividad){
		$.ajax({ url: './MaestroController.php',
			data: {tipo: "cargarPalabra", palabra: palabra, descripcionPalabra: descripcion, idActividad: idActividad},
			type: 'post',
			success: function(output) {
				alert(output);
			}
		});
	}

	function crearActividadUnidades(idActividad){
		var unidades = $("#unidades").val();
		var decenas = $("#decenas").val();
		var centenas = $("#centenas").val();
		var respuestasD = $("#respuestasD").val();
		var descripcionRetro = $("#descripcionRetro").val();

		$.ajax({ url: './MaestroController.php',
			data: {tipo: "crearActividadUnidades", unidades: unidades, decenas: decenas, centenas: centenas, respuestasD: respuestasD, descripcionRetro: descripcionRetro, idActividad: idActividad},
			type: 'post',
			success: function(output) {
				alert(output);
			}
		});
	}

	function crearActividadDetalle(indiceActividad){
		var nombreActividad = $("#nombreActividad").val();
		var temaActividad = $("#temaActividad").val();
		var areaActividad = $("#listaArea option:selected").text();
		var idAreaActividad = areaActividad.split("-")[0];
		var descripcionActividad = $("#descripcionActividad").val();
		var fechaLiberacion = $("#fechaLiberacion").val();
		var tipoActividad = $("#listaTipo option:selected").text();
		var idTipoActividad = tipoActividad.split("-")[0];
		
		$.ajax({ url: './MaestroController.php',
			data: {tipo: "crearActividadDetalle", nombreActividad: nombreActividad, temaActividad: temaActividad, idAreaActividad: idAreaActividad, descripcionActividad: descripcionActividad, fechaLiberacion: fechaLiberacion, idTipoActividad: idTipoActividad},
			type: 'post',
			success: function(output) {
				if (output !== "Ya existe una actividad con ese nombre, tipo y area." && output !== "No existe el area educaional seleccionada." && output !== "No existe el tipo de actividad seleccionada." && output !== "Error en carga"){
					if (indiceActividad == 1){
						crearActividadUnidades(output);
					} else{
						if (indiceActividad == 2) {
							crearActividadSopa(output);
						}
					}
				} else {
					alert(output);
				}
				
			}
		});
		
	}

	function crearInputPalabras(){
		var numeroPalabras = $("#numeroPalabras").val();
		$("#almacenDePalabras").empty();
		var htmlGeneral = "";
		for (var i = 0; i < numeroPalabras; i++) {
			htmlGeneral += "Palabra #" + i + ": <Input type='text' id='input" + i + "'> Descripción: " + "<Input type='text' id='descripPalabra" + i + "'> <br>"; 
		}
		$("#almacenDePalabras").append(htmlGeneral);
	}

	function crearActividadCompleta(indice){
		if(verificarCampos()){
			crearActividadDetalle(indice);
		} else {
			alert("Rellene todos los campos");
		}
	}

	function verificarCampos(){
		var nombreActividad = $("#nombreActividad").val();
		var temaActividad = $("#temaActividad").val();
		var areaActividad = $("#listaAreas option:selected").val();
		var descripcionActividad = $("#descripcionActividad").val();
		var fechaLiberacion = $("#fechaLiberacion").val();
		var tipoActividad = $("#listaTipo option:selected").val();

		if(nombreActividad == "" || temaActividad == "" || descripcionActividad == "" || fechaLiberacion == "" || tipoActividad == 0 || areaActividad == 0){
			return false;
		} else {
			return true;
		}

	}

	function obtenerAreas(){
		$.ajax({ url: './MaestroController.php',
			data: {tipo: "obtenerAreas"},
			type: 'post',
			success: function(output) {
				var listaAreas = output.split(",");
				var htmlListas = "<option value = '0'> Seleccione Área </option>";
				for (var i = 0; i < listaAreas.length - 1; i++) {
					htmlListas += "<option value=\""+(i+1)+"\">"+listaAreas[i]+"</option>";
				}
				$("#listaArea").append(htmlListas);
			}
		});
	}
	function obtenerTipoActividades(){
		$.ajax({ url: './MaestroController.php',
			data: {tipo: "obtenerTipoActividades"},
			type: 'post',
			success: function(output) {
				var listaAreas = output.split(",");
				var htmlListas = "<option value = '0'> Seleccione Tipo Actividad </option>";
				for (var i = 0; i < listaAreas.length - 1; i++) {
					htmlListas += "<option value=\""+(i+1)+"\">"+listaAreas[i]+"</option>";
				}
				$("#listaTipo").append(htmlListas);
			}
		});
	}

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
	$("#numeroPalabras").change(function(){
		crearInputPalabras();
	});
	$("#listaTipo").change(function(){
		seleccionarActividad();
	});

	verificarInicioSesion();
	obtenerAreas();
	obtenerTipoActividades();
	ocultarActividades();
});