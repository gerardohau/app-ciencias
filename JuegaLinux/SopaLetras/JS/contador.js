var segundos = 480;
function conteoRegresivo(){

    $("#contador").empty();
    if (segundos > 0){
        segundos--;
        $("#contador").append("Quedan: " + segundos + " segundos.");
        setTimeout("conteoRegresivo()",1000);
    } else {
        $("#contador").append('0 Segundos ¡El tiempo se acabo!');
        irMenuPrincipal();
    }
}

function irMenuPrincipal(){
    var puntuacion = $("#puntosTotales").val();
    alert("¡Se acabo el tiempo! Tu puntuación fue: " + puntuacion);  
    window.location.href ="./SeleccionarNivel";
}

function mostrarDialogo(){
    $("#dialogoControl").show();
    setTimeout("esconderDialogo()", 6000);
}

function esconderDialogo(){
    $("#dialogoControl").hide();
}
$("#dialogoControl").hide();
conteoRegresivo();

