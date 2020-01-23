globos = [0, 0, 0];
sumag = [0, 0];

result = 0;
total = 0;
contg = 0;
isBala = false;
ganaste = false;
isAnim = false;
isHit = -1;
isHelp = false;

var tmAyuda;

window.addEventListener('load', function(){
   randomNum();
   animaJugador_Hola();
   mueveGlobo("g1", 12, 25, 0.10);
   mueveGlobo("g2", 38, 47, 0.13);
   mueveGlobo("g3", 59, 70, 0.11);

   document.getElementById("Breiniciar").addEventListener("click", function(){
      reiniciarJuego();
   });

   document.getElementById("btAyuda").addEventListener("click", function(){
      if(!isAnim){
         if(!isHelp){
            mostrarAyuda();
         }else{
            esconderAyuda();
         }
         
      }     
   });

   document.getElementsByTagName("html")[0].onkeydown = function(e){
      accionJugador(e);   
   };  
});

function randomNum(){
   var id = "";
   var cont = 0;

   total = 0;
   contg = 0;

   for(var i = 1; i <= 3; i++){
      idg = "g" + i;

      var element = document.getElementById("pg" + i);  
      var width = document.body.getBoundingClientRect().right;
      var height = document.body.getBoundingClientRect().bottom;

      var inix = element.getBoundingClientRect().right/width*100;
      var iniy = (height - element.getBoundingClientRect().bottom + document.getElementById(idg).offsetHeight/2)/height*100;
   }

   globos[0] = Math.floor(Math.random() * 5) + 1;
   globos[1] = Math.floor(Math.random() * 5) + 1;
   globos[2] = Math.floor(Math.random() * 5) + 1;

   cont = Math.floor(Math.random() * 3);
   result = globos[cont] + globos[(cont+1)%3];
   sumag[0] = cont;
   sumag[1] = (cont+1)%3;

   for(var i = 0; i< 3; i++){
      id = "pg" + (i+1);
      document.getElementById(id).innerHTML = globos[i];
   }
   
   document.getElementById("resul").innerHTML = '<h1>' + result +'</h1>' ;
}

function mueveGlobo(id, ini, fin, vel) {
   var elem = document.getElementById(id);   
   var pos = ini;
   var bool = true;
   pos = pos + vel; 
   elem.style.left = pos + '%';

   var id = setInterval(frame, 20);
   function frame() {
      if(!isAnim){
        if(pos <= fin && bool){
         pos = pos + vel; 
         elem.style.left = pos + '%';
      }else{
         bool = false;
      }

      if(pos >= ini && !bool){
         pos= pos - vel; 
         elem.style.left = pos + '%'; 
      }else{
         bool = true;
      }  
      }
        
   }
}

function accionJugador(e){
   if(!ganaste && !isAnim){
     if(e.which == 32 && !isBala){
         atacaJugador();
      }else{
         mueveJugador(e);
      } 
   }
}

function atacaJugador(){
   var jugador = document.getElementById("Ninja");   
   var jugadorImg = document.getElementById("NinjaImg") 
   var width = document.body.getBoundingClientRect().right;
   var height = document.body.getBoundingClientRect().bottom;
   var pos = jugador.getBoundingClientRect().left/width*100;
   var bala = document.getElementById("bala");  
   var vel = 1.0;
   var fin = 100.0;

   var itx = 1.0/(width/150.0)*100;
   var ity = 1.0/(height/145.0)*100;

   var bx = pos + itx;
   var by = 13.3;

   isBala = true;
   bala.style.left = bx + '%';
   bala.style.bottom = by + '%';
   bala.style.visibility = "visible";
   jugadorImg.src = "img/Pinguino ninja 7.png";
   
   var t = setInterval(mueveBala, 20);
   function mueveBala() {
      isHit = comprueba(bx, by);
      if(isHit == -1){
         if(by <= fin){
            by = by + vel; 
            bala.style.bottom = by + '%'; 
         }else{
            clearInterval(t);
            bala.style.visibility = "hidden";
            jugadorImg.src = "img/Pinguino ninja 6.png";
            isBala = false;
         }
      }else{
         clearInterval(t);
         bala.style.visibility = "hidden";
         jugadorImg.src = "img/Pinguino ninja 6.png";
         rompeGlobo(isHit);
         isBala = false;
      }
   }
}

function mueveJugador(e){
   var jugador = document.getElementById("Ninja");   
   var width = document.body.getBoundingClientRect().right;
   var pos = jugador.getBoundingClientRect().left/width*100;
   var vel = 3.5;

   if(e.which == 37){
      //Izquierda
      if(pos >= 15){
         pos = pos - vel; 
         jugador.style.left = pos + '%';
      }
   }else if(e.which == 39){
      //Derecha
      if(pos <= 58){
         pos = pos + vel; 
         jugador.style.left = pos + '%';
      }
      
   }
}

function animaJugador_Hola(){
   isAnim = true;
   var jugadorImg = document.getElementById("NinjaImg") 

   var cont = 1;
   var anim = setInterval(animaNinja_Hola, 15);
   
   function animaNinja_Hola() {
      if(cont <= 6){
         jugadorImg.src = "img/Pinguino ninja " + cont + ".png";
         cont++;
      }else{
         clearInterval(anim);
         isAnim = false;
      } 
   }
}

function comprueba(bx, by){
   var width = document.body.getBoundingClientRect().right;
   var height = document.body.getBoundingClientRect().bottom;

   for(var i = 1; i <= globos.length; i++){
      var elem = document.getElementById("g" + i); 

      var gx = elem.getBoundingClientRect().left/width*100;
      var gy = (height - elem.getBoundingClientRect().bottom)/height*100;

      var itgx = 1.0/(width/145.0)*100;
      var itbx = 1.0/(width/20.0)*100;
      var ittx = itgx + itbx;

      var itgy = 1.0/(height/145.0)*100;
      var itby = 1.0/(height/20.0)*100;
      var itty = itgy + itby;

      if(gx - itbx <= bx && gx  + ittx >= bx && gy <= by && gy  + itty >= by){
         return i;
      }
   }
   return -1;
}

function rompeGlobo(i){
   
   var elem = document.getElementById("g" + i); 
   var elemimg = document.getElementById("ig" + i); 
   var elemp = document.getElementById("pg" + i);

   elemimg.src = "img/Pinguino ninja globo roto.png";
   elemp.hidden = true;

   total = total + globos[i-1];
   contg = contg + 1;

   var st = setTimeout(animaGlobo_Roto, 750);

   function animaGlobo_Roto(){
      elem.hidden = true;

      var suma = document.getElementById("s" + contg); 
      suma.innerHTML = '<h1>' + globos[i-1] +'</h1>' ;

   }

   if(contg == 2){
      popup = document.getElementById("Background");
      popupwindow = document.getElementById("Popup_Ganaste");
      popupwindowtext = document.getElementById("Popup_GanasteText");

      if(total == result){
         popupwindowtext.innerHTML =  "¡Ganaste!";
         popupwindow.style.visibility = "visible"; 
         popup.style.visibility = "visible"; 
      }else{
         popupwindowtext.innerHTML = "¡Más suerte a la proxima!. <br> La respuesta era: <br>" + globos[sumag[0]] + 
         " + " + globos[sumag[1]] + " = " + result ;
         popupwindow.style.visibility = "visible"; 
         popup.style.visibility = "visible";   
      }
      ganaste = true;
   }
}

function reiniciarJuego(){
   var elem, elemimg, elemp;
   var popup, popupwindow;

   for(var i = 1; i <= globos.length; i++){
      elem = document.getElementById("g" + i); 
      elemimg = document.getElementById("ig" + i); 
      elemp = document.getElementById("pg" + i);
      elemimg.src = "img/Pinguino ninja globo.png";

      elem.hidden = false;
      elemp.hidden = false;
   }

   contg = 0;
   ganaste = false;
   isHit = -1;

   randomNum();

   popup = document.getElementById("Background");
   popupwindow = document.getElementById("Popup_Ganaste");

   popupwindow.style.visibility = "hidden"; 
   popup.style.visibility = "hidden"; 

   document.getElementById("s1").innerHTML = "";
   document.getElementById("s2").innerHTML = "";

   document.getElementsByTagName("html")[0].focus();
}

function mostrarAyuda(){
   var bgAyuda = document.getElementById("bgAyuda");
   var ayuda = document.getElementById("Ayuda");
   var titulo = document.getElementById("thAyuda");
   var texto = document.getElementById("tpAyuda");

   bgAyuda.style.visibility = "visible";
   ayuda.style.visibility = "visible";
   
   titulo.innerHTML = "¿Cómo se juega?";

   texto.innerHTML = "Ayuda al pinguino ninja a resolver la suma mostrada en el letrero " +
   "de la derecha, revienta los globos que tengan los numeros que acompleten correctamente la suma.";

   tmAyuda = setTimeout(esconderAyuda, 5000);
   isHelp = true;
}

function esconderAyuda(){
   var bgAyuda = document.getElementById("bgAyuda");
   var ayuda = document.getElementById("Ayuda");

   bgAyuda.style.visibility = "hidden";
   ayuda.style.visibility = "hidden";

   isHelp = false;
   clearTimeout(tmAyuda);
}