
(function ($) {
    var puntos = 0;
    var palabrasEncontradas = [""];
    var contadorPalabrasEncontradas = 0;
    Sopa = function ($el, options, configuracion) {
        $t = $("<table border='1'>");

        var defaults = configuracion;
        var aciertos = 0;
        var activarhover = false;
        var miradorpalabras = "";
        var miserrores = 0;
        var palabrasencontradas = new Array();
        var dejapasar = false;

        $.extend(defaults, options);

        var letras = new Array();
        letras[0] = "A";
        letras[1] = "B";
        letras[2] = "C";
        letras[3] = "D";
        letras[4] = "E";
        letras[5] = "F";
        letras[6] = "G";
        letras[7] = "F";
        letras[8] = "H";
        letras[9] = "J";
        letras[10] = "K";
        letras[11] = "L";
        letras[12] = "M";
        letras[13] = "N";
        letras[14] = "Ñ";
        letras[15] = "O";
        letras[16] = "P";
        letras[17] = "Q";
        letras[18] = "R";
        letras[19] = "S";
        letras[20] = "T";
        letras[21] = "U";
        letras[22] = "V";
        letras[23] = "W";
        letras[24] = "X";
        letras[25] = "Y";
        letras[26] = "Z";

        this.init = function () {
            var contadorpalabras = 0;
            var comienzoy = Math.floor((Math.random() * (defaults.complejo + 2)) - 1);
            var comienzoyar = new Array();
            for (var i = 0; i < defaults.palabras.length; i++) {
                while (true) {
                    var cc = Math.floor((Math.random() * (defaults.complejo + 2)) - 1);
                    var existe = false
                    for (var j = 0; j < defaults.palabras.length; j++) {
                        if (cc == -1) {
                            cc = 0;
                        }
                        if (comienzoyar[j] == cc) {
                            existe = true;
                        }
                    }
                    if (!existe) {
                        comienzoyar[i] = cc;
                        break;
                    }

                }
            }

            comienzoyar = comienzoyar.sort(function (a, b) { return a - b });
            var totalvertical = defaults.palabras.length / 2;
            if (totalvertical > 2) {
                totalvertical = totalvertical - 1;
            }

            for (var j = 0; j < defaults.complejo + 1; j++) {
                $header = $("<tr>");

                var contadorletras = 0;
                var comienzox = Math.floor((Math.random() * (defaults.complejo + 2)) - 1);
                var enquepos = 0;

                if (j == comienzoyar[contadorpalabras]) {
                    enquepos = (defaults.complejo + 1 - defaults.palabras[contadorpalabras].name.length);
                    enquepos = Math.floor((Math.random() * enquepos));
                }


                if (enquepos == -1) {
                    enquepos = 0;
                }

                for (var i = 0; i < defaults.complejo + 1; i++) {
                    var pos = Math.floor((Math.random() * (defaults.complejo + 3)) - 1);
                    var letraelegidapos = Math.floor(Math.random() * 27);

                    if (pos == -1)
                        { pos = 0; }

                    if (comienzoy == -1) {
                        comienzoy = 0;
                    }
                    if (comienzox == -1) {
                        comienzox = 0;
                    }

                    var $g = this;

                    if (comienzoyar[contadorpalabras] == j) {

                        //Aca pongo las palabras que vienen de la DB.
                        if (enquepos == i) {
                            if (contadorletras < defaults.palabras[contadorpalabras].name.length) {
                                $("<td>").attr("nocruzar", "S").html(defaults.palabras[contadorpalabras].name.charAt(contadorletras)).appendTo($header).attr("pos", i.toString() + ";" + j.toString()).css("cursor", "pointer").hover(function () {
                                    if (activarhover) {
                                        $(this).css("color", "red");
                                    }
                                }
                                ).click(function () {
                                    $g.click(this);
                                }).addClass("noes").css("font-weight");
                                //}).addClass("noes").css("font-weight", "bold");
                                contadorletras++;
                                enquepos++;
                            }
                            else {
                                $("<td>").attr("nocruzar", "F").html(letras[letraelegidapos]).appendTo($header).attr("pos", i.toString() + ";" + j.toString()).css("cursor", "pointer").hover(function () {
                                    if (activarhover) {
                                        $(this).css("color", "red");
                                        if ($(this).attr("nocruzar") != "S"){
                                            $(this).addClass("seleccionado");
                                        }
                                    }
                                }
                                ).click(function () {
                                    $g.click(this);
                                }).addClass("noes");
                            }


                        }
                        else {

                            $("<td>").attr("nocruzar", "F").html(letras[letraelegidapos]).appendTo($header).attr("pos", i.toString() + ";" + j.toString()).css("cursor", "pointer").hover(function () {
                                if (activarhover) {
                                    $(this).css("color", "red");
                                    if ($(this).attr("nocruzar") != "S"){
                                        $(this).addClass("seleccionado");
                                    }
                                }
                            }
                            ).click(function () {
                                $g.click(this);
                            }).addClass("noes");

                        }
                    }
                    else {

                        $("<td>").attr("nocruzar", "F").html(letras[letraelegidapos]).appendTo($header).attr("pos", i.toString() + ";" + j.toString()).css("cursor", "pointer").hover(function () {
                            if (activarhover) {
                                $(this).css("color", "red");
                                if ($(this).attr("nocruzar") != "S"){
                                    $(this).addClass("seleccionado");
                                }
                                
                            }
                        }
                        ).click(function () {
                            $g.click(this);
                        }).addClass("noes");

                    }
                }

                $t.append($header);
                $el.append($t);

                if (j == comienzoyar[contadorpalabras]) {
                    if (contadorpalabras < totalvertical) {
                        contadorpalabras++;
                    }
                }
            }

            var posy = Math.floor((Math.random() * (defaults.complejo + 2)) - 1);
            var posx = Math.floor((Math.random() * (defaults.complejo + 2)) - 1);
            var total = 0;

            if (posy == -1)
                { posy = 0; }
            if (posx == -1)
                { posx = 0; }

            var caminadorvertical = contadorpalabras + 1;


            var cantidadvueltas = 0;
            for (var v = caminadorvertical; v < defaults.palabras.length; v++) {
                var pospalabra = 0;
                var posyv = 0;
                while (true) {
                    cantidadvueltas++;
                    if (cantidadvueltas == 100)
                        { return; }
                    if ((posy + defaults.palabras[v].name.length) < defaults.complejo) {
                        posyv = posy;
                        for (var i = 0; i < defaults.palabras[v].name.length; i++) {

                            if ($("td[pos='" + posx.toString() + ";" + posyv.toString() + "']").attr("nocruzar") == "S") {
                                total++;
                                break;
                            }
                            posyv++;
                        }

                    }
                    else {
                        total = 1;
                    }

                    if (total > 0) {
                        posy = Math.floor((Math.random() * (defaults.complejo + 2)) - 1);
                        posx = Math.floor((Math.random() * (defaults.complejo + 2)) - 1);
                        if (posy == -1)
                            { posy = 0; }
                        if (posx == -1)
                            { posx = 0; }
                    }
                    else {
                        break;
                    }
                    total = 0;
                }

                for (var i = 0; i < defaults.palabras[v].name.length; i++) {

                    $("td[pos='" + posx.toString() + ";" + posy.toString() + "']").html(defaults.palabras[v].name.charAt(i)).attr("nocruzar", "S").css("font-weight");
                    //$("td[pos='" + posx.toString() + ";" + posy.toString() + "']").html(defaults.palabras[v].name.charAt(i)).attr("nocruzar", "S").css("font-weight", "bold");
                    posy++;
                }
            }
        };

        var cantidadclicks = 0;
        var posicionx = 0;
        var posiciony = 0;
        var posicionx1 = 0;
        var posiciony1 = 0;
        this.click = function (td) {
            if (!dejapasar)
                { return; }
            var $g = this;
            cantidadclicks += 1;
            $(td).css("color", "red");
            if (cantidadclicks == 1) {
                posicionx = $(td).attr("pos").split(";")[0];
                posiciony = $(td).attr("pos").split(";")[1];
                activarhover = true; //hay que cambiar aca
            }
            else {
                posicionx1 = $(td).attr("pos").split(";")[0];
                posiciony1 = $(td).attr("pos").split(";")[1];
                cantidadclicks = 0;
                activarhover = false;
                var selecion = "";
                var y = posiciony;
                var x = posicionx;
                var i = 1;
                var total = posicionx1 - posicionx;


                if (total < 0) {
                    var $tdlocal = $("td[pos='" + posicionx.toString() + ";" + posiciony.toString() + "']");
                    if (!$tdlocal.hasClass("noborrar")) {
                        //$(td).css("color", "");
                        $("td[pos='" + posicionx.toString() + ";" + posiciony.toString() + "']").css("color", "");
                    }
                    $(".noes").css("color", "");
                    return;
                }

                if (posiciony != posiciony1) {
                    total = posiciony1 - posiciony
                    if (total < 0) {
                        var $tdlocal = $("td[pos='" + posicionx.toString() + ";" + posiciony.toString() + "']");
                        if (!$tdlocal.hasClass("noborrar")){
                            $("td[pos='" + posicionx.toString() + ";" + posiciony1.toString() + "']").css("color", "");
                        }
                        //$(td).css("color", "");

                        
                        $(".noes").css("color", "");
                        return;
                    }

                    while (true) {
                        var $tdlocal = $("td[pos='" + x.toString() + ";" + y.toString() + "']");
                        selecion += $tdlocal.html();

                        $tdlocal.css("color", "red");
                        $tdlocal.css("font-weight", "bold");
                        $tdlocal.removeClass("noes");

                        if (i == total + 1) {
                            break;
                        }

                        y++;
                        i++;
                    }
                }
                else {

                    while (true) {
                        var $tdlocal = $("td[pos='" + x.toString() + ";" + y.toString() + "']");
                        selecion += $tdlocal.html();

                        $tdlocal.css("color", "red");
                        $tdlocal.css("font-weight", "bold");
                        $tdlocal.removeClass("noes");

                        if (i == total + 1) {
                            break;
                        }

                        x++;
                        i++;
                    }
                }

                var existe = false;

                $.each(defaults.palabras, function () {
                    if (selecion == this.name) {
                        //console.log(selecion);
                        existe = true;
                        var verificar = false;
                        $("td[class='']").addClass("noborrar");
                        if (palabrasencontradas.length == 0) {
                            palabrasencontradas[0] = this.name;
                            aciertos += 1;
                        }

                        else {
                            for (var i = 0; i < palabrasencontradas.length; i++) {
                                if (palabrasencontradas[i] == this.name) {
                                    verificar = true;
                                }
                            }
                            if (!verificar) {
                                palabrasencontradas.push(this.name);
                                aciertos += 1;
                            }
                        }

                        //alert("Encontraste la palabra: " + selecion);
                        $(".seleccionado").css("color", "");
                        var elementos = document.getElementsByClassName("seleccionado");
                        for (var i = 0; i < elementos.length; i++) {
                            elementos[i].classList.remove("seleccionado");
                        }
                        var darPuntos = true;
                        
                        for(var i = 0; i < palabrasEncontradas.length; i++){
                            if (palabrasEncontradas[i].localeCompare(selecion) == 0){
                                darPuntos = false;
                                break;
                            }
                        }

                        if (darPuntos){
                            puntos += 20;
                            palabrasEncontradas[contadorPalabrasEncontradas] = selecion;
                            contadorPalabrasEncontradas++;
                        }
                        
                        $("#puntos").empty();
                        $("#puntosTotales").val(puntos); 
                        $("#puntos").append("Puntos: " + puntos);
                        $("#texto").empty();
                        $("#texto").append("Has encontrado la palabra " + selecion);
                        setTimeout("mostrarDialogo()", 1);
                        $("#" + selecion).empty();
                        $("#" + selecion).append("<strike>" + selecion + "</strike>");
                        /*
                        if (!verificar) {
                            miradorpalabras += selecion + ", ";
                            $g.cantidadpalabras();
                        }
                        */
                        if (aciertos == defaults.palabras.length) {
                            irMenuPrincipal();
                            //$g.onWin();
                        }
                        
                    }
                });

                if (!existe) {
                    var elementos = document.getElementsByClassName("seleccionado");
                    for (var i = 0; i < elementos.length; i++) {
                        elementos[i].classList.remove("seleccionado");
                    }

                    miserrores += 1;
                    y = posiciony;
                    x = posicionx;
                    i = 1;
                    total = posicionx1 - posicionx;

                    if (posiciony != posiciony1) {
                        total = posiciony1 - posiciony
                        while (true) {
                            var $tdlocal = $("td[pos='" + x.toString() + ";" + y.toString() + "']");
                            if (!$tdlocal.hasClass("noborrar")) {
                                selecion += $tdlocal.html();
                                $tdlocal.css("color", "");
                                $tdlocal.css("font-weight", "normal");
                                $tdlocal.addClass("noes");
                            }
                            if (i == total + 1) {
                                break;
                            }
                            y++;
                            i++;
                        }
                    }
                    else {

                        while (true) {
                            var $tdlocal = $("td[pos='" + x.toString() + ";" + y.toString() + "']");
                            if (!$tdlocal.hasClass("noborrar")) {
                                selecion += $tdlocal.html();
                                $tdlocal.css("color", "");
                                $tdlocal.css("font-weight", "normal");
                                $tdlocal.addClass("noes");
                            }
                            if (i == total + 1) {
                                break;
                            }
                            x++;
                            i++;
                        }
                    }
                    
                    $(".noes").css("color", "");
                }

                var elementos = document.getElementsByClassName("noes");
                for (var i = 0; i < elementos.length; i++) {
                    elementos[i].style.color = "#000000";
                }
            }
        }

        this.onWin = function () { if (defaults.onWin != "") { eval(defaults.onWin + "('" + miradorpalabras + "-" + miserrores + "')"); } }

        this.enabled = function () { dejapasar = true; }

        this.cantidadpalabras = function () { eval("nogano('" + aciertos + "')"); eval("noganopalabras('" + miradorpalabras + "')"); }

        this.init();
    };

    var sopas = null;
    $.fn.SopaLetras = function (options) {
        var esto = this;
        
        var urlCompleto = window.location + "";

        var idActividad = urlCompleto.split("=")[1];
        var colores = ["#FF0000","#138d75","#9b59b6","#5dade2", "#2ecc71"];
        var palabras = obtenerPalabras(idActividad);
        var htmlTabla = "<table> <tr><td style='font-size: 30px !important;' class ='palabraschidas'> Palabras a encontrar: </td></tr>";

        for (var i = 0; i < palabras.length; i++) {
            if ((i + 1)%2==0){
                htmlTabla +="<tr><td class ='palabraschidas' id=\""+ palabras[i] +"\"><a style='color:"+ colores[i]+"';>" + palabras[i] + "</a></td></tr>";
            }
            
        }
        for (var i = 0; i < palabras.length; i++) {
            if ((i + 1)%2==1){
                htmlTabla +="<tr><td class ='palabraschidas' id=\""+ palabras[i] +"\"><a style='color:"+ colores[i]+"';>" + palabras[i] + "</a></td></tr>";
            }
        }

        htmlTabla += "</table>";
        $("#tablaPalabras").empty();
        $("#tablaPalabras").append(htmlTabla);

        var arregloPalabras = [];
        for (var i = 0; i < palabras.length - 1; i++) {
            var miObjeto = new Object();
            miObjeto.name = palabras[i];
            arregloPalabras[i] = miObjeto;
        }

        var tempo = {palabras : [], complejo: 15, vertical: 'S', onWin: "" };
        tempo.palabras = arregloPalabras;
        sopas = new Sopa(esto, options, tempo);
        sopas.enabled();

        
    };

    function obtenerPalabras(idActividad){

        switch (idActividad){
            case "1":
            var listaPalabras = ["UNO","DOS","TRES","CUATRO", "CINCO",""];
            return listaPalabras;
            case "2": 
            var listaPalabras = ["ROSA","AMARILLO","AZUL","VERDE","BLANCO",""];
            return listaPalabras;
            case "3": 
            var listaPalabras = ["PANTALÓN","VESTIDO","BLUSA","SHORT","CAMISA",""];
            return listaPalabras;
            case "4": 
            var listaPalabras = ["MELÓN","SANDÍA","NARANJA","FRESA","PIÑA",""];
            return listaPalabras;
            case "5": 
            var listaPalabras = ["LÁPIZ","COLORES","LIBRETA","MOCHILA","REGLA",""];
            return listaPalabras;
            case "6": 
            var listaPalabras = ["MOUSE","TECLADO","MONITOR","USB","IMPRESORA",""];
            return listaPalabras;
        }
    }
    function irMenuPrincipal(){
        var puntuacion = $("#puntosTotales").val();
        alert("¡Encontraste todas las palabras! Tu puntuación fue: " + puntuacion);  
        window.location.href ="./SeleccionarNivel";
    }

})(jQuery);