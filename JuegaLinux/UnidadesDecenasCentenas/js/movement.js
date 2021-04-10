window.onload = function() {
    hideLostPanel();
}

var thread;
var timer;

function initCounter(){
    thread = setInterval(incrementSeconds, 1000);
    timer = document.getElementById('seconds-counter');
}

function incrementSeconds() {

    if (seconds > 0) {
        seconds -= 1;
        timer.innerText = seconds;
        
    }else{
        fish_still_there = false;
        move_fish();
        stopLevel();
        //setInterval()
    }

}



function helpPlayer(){
    var help_panel = document.getElementById('initial-help-message');
    if(helpPanelCreated){
        help_panel.style.visibility='visible'; 
    }else{
        help_panel.innerHTML = " <h2 style='font-size: 2.2rem !important' class='help-pingu-title'> Ayuda a pingu </h2> <span style='font-size: 1.8rem !important' align='center'>Ayuda a Pingu a contar sus pescados</span> <div class='' style='display: flex;align-items: flex-end !important; height: 200px;'> <div class='col-4 letras'> <div class=''> <div class='ofish element'> <div class='ofish-body' style='background:red;' > <div class='oeye'> <div class='opupil'> </div></div></div><div class='ofin' style='background:red;'> </div><div class='ofin fin-bottom' style='background:red;'> </div></div></div>1 unidad </div><div class='col-4 letras'> <div class=''> <img class='medium_bag' height='150px' width='200px' src='images/saco1.png'> </div>1 decena </div><div class='col-4 letras'> <div class=''> <img class='big_bag' height='150px' width='200px' src='images/saco2.png'> </div>1 centena </div></div><center> <button id='close-help' class='help-button btn btn-info'>Cerrar panel de ayuda</button> </center> </div>";
        close_help_panel_button = document.getElementById("close-help").addEventListener("click", closeHelpPanel);
        helpPanelCreated=true;
        help_panel.style.visibility='visible'; 
    }
}

function closeHelpPanel(){
    var help_panel = document.getElementById('initial-help-message');
    help_panel.style.visibility='hidden'; 
}


function stopLevel() {
    seconds= 15;
    clearInterval(thread);
}

function myMove(movement, fish, cont) {
    var posX = 0;
    var posY = 0;
    var plus = cont/15;
    var fish_container = document.getElementById(fish.id);
    var id = setInterval(frame, 60);
    var dire=direction();
    var iteration=0;
    var height = Math.floor(Math.random() * 10)+70
    function frame() {
        var position = fish_container.getBoundingClientRect();
        if(fish.positionX<15){
            fish_container.style.top = position.top-plus -fish.aleatoriMovement(fish.positionX, position.top, direction(),height+cont*1.5)+cont+'px';
            fish_container.style.left = position.left+ cont+5 + 'px'; 
            fish.positionX++;
        }else if(fish.positionX< 25){
            if(detectOverlap(fish.id)){
                fish_container.style.top = position.top +cont+'px'; 
                fish_container.style.left = position.left+ cont + 'px'; 
                fish.positionX++;
            }
        }
    }
  }
  
var startButton = document.getElementById("start").addEventListener("click", start_level);
var help_button = document.getElementById("help-button").addEventListener("click", helpPlayer);
var close_help_panel_button;
function detectOverlap(id){
    var fish_container = document.getElementById(id);
    var fish = document.getElementsByClassName('fish_container');
    var count =fish.length;
    var num =0;
    for(var i=0; i< count; i++){
        var f = document.getElementById('animated-fish'+i);
        var position = fish_container.getBoundingClientRect();
        var fishPosition = f.getBoundingClientRect();

        if(distance(position.left, fishPosition.left, position.top, fishPosition.top) 
            == true && num>1){
            return true;
        }else{
            num++; 
        }

        
    }
    return false;
}

function distance(x,x2,y,y2){
    var newx = (x-x2)*(x-x2);
    var newy = (y-y2)*(y-y2);
    var total = newx+newy;
    var result = Math.sqrt(total);
    if(result<110){
        return true;
    }else{
        
        return false;
    }
}

function start_level(){
    hideLostPanel();
    initCounter();
    delete_elements("fish_container");
    elements = [];
    change_fase(actual_phase);

    var window = document.getElementById('initial-message');
    window.style.visibility='hidden'; 
    generateOptionPanel();

    setTimeout(function afterTwoSeconds() {
        penguin_state(0);
    }, 1000);

    setTimeout(function afterTwoSeconds() {
        penguin_state(1);
      }, 1000);
    
    setTimeout(function afterTwoSeconds() {
        penguin_state(2);
      }, 2000);
    
    setTimeout(function afterTwoSeconds() {
        penguin_state(3);
        move_pingu(-20);
      }, 3000);
    
    //penguin_state(0);
    setTimeout(function afterTwoSeconds() {
        move_pingu(20);
        generate_level();
      }, 3000);
}

function generate_level(){
    for (var i=0; i < num_fish; i++) {
        delete_elements('fish_container');
    }
    var cont=0;
    for(var i =0; i< num_fish ; i++){
        generateFish(cont);
        cont++;
    }
    for (var i=0; i < num_medium_bags; i++) {
        generateMediumBag(cont);
        cont++;

    }
    for (var i=0; i < num_big_bags; i++) {
        generateBigBag(cont);
        cont++;
    }

}

function disable(){
    document.getElementById("Button").disabled = true;
}

function generateOptionPanel(){
    var window = document.getElementById('panel-container');
    window.innerHTML = "<div id='control-panel' class='control-panel'>"+
                        "<h3 style='font-size: 2rem !important'> ¡Rápido!," + question + "  </h3> "+
                        "<div id='option-panel' class='option_panel'>" +
                        "<button id='option_a' value='1' class='button-option button-type'></button>" +
                        "<button id='option_b' value='2' class='button-option button-type'></button>" +
                        "<button id='option_c' value='3' class='button-option button-type'></button>" +
                        "</div>" +
                        "</div>";
    window.style.visibility='visible';

    var boton = document.getElementById('option_a');
    boton.addEventListener('click', check_answer);
    boton.innerHTML= answer_a;
    var boton = document.getElementById('option_b');
    boton.addEventListener('click', check_answer);
    boton.innerHTML= answer_b;
    var boton = document.getElementById('option_c');
    boton.addEventListener('click', check_answer);
    boton.innerHTML= answer_c; 
}

function generateLostPanel(){
    var window = document.getElementById("help-panel");
    window.style.visibility='visible';

}

function hideLostPanel(){
    var window = document.getElementById('help-panel');
    window.style.visibility='hidden';

}

function check_answer(){
    
    var boton = this;
    var answer_selected = boton.value;
    stopLevel();
    var window = document.getElementById('panel-container');
    window.style.visibility ="hidden";

    if(actual_phase >3){
        var points = document.getElementById("points").innerHTML;
        addPoints();
        window.location = "winPage.html?points="+ points;
    }

    if(answer_selected == value && fish_still_there && actual_phase <4){
        addPoints();

        var div = document.getElementById('winner');
        div.style.visibility='visible';

        setTimeout( next_level, 3000);

    }else if(actual_phase<4 ){
        
        generateLostPanel();
        setTimeout( next_level, 60000);
        
    }else{
        call();
    }
}



function win(){

}

function lose(){

}

function next_level(){
    var div = document.getElementById('winner');
    div.style.visibility='hidden';
    start_level();
}

function generateBigBag(cont){
    var movement = 0;
    var fish= new Fish('animated-fish'+cont);
    fish.paint_fish();
    var fish_container = document.createElement("div");
    fish_container.className = "fish_container";
    fish_container.innerHTML=
                "<div id='animated-fish"+cont +"' class='fish-container' "+
                "style='z-index:9; left: 524px;'>"+
                "<img class='big_bag' height='50px' width='75px' src='images/saco2.png'>"+
                "</div>";
    document.body.appendChild(fish_container);
    var movement= Math.floor(Math.random() * 3) + 2;
    myMove(movement, fish, cont);
}
function generateMediumBag(cont){
    var movement = 0;
    var fish= new Fish('animated-fish'+cont);
    fish.paint_fish();
    var fish_container = document.createElement("div");
    fish_container.className = "fish_container";
    fish_container.innerHTML=
                "<div id='animated-fish"+cont +"' class='fish-container' "+
                "style='z-index:10; left: 524px;'>"+
                "<img class='big_bag' height='40px' width='50px' src='images/saco1.png'>"+
                "</div>";
    document.body.appendChild(fish_container);
    var movement= Math.floor(Math.random() * 4) + 1;
    myMove(movement, fish, cont);

}
function generateFish(cont){
    var movement = 0;
    var fish= new Fish('animated-fish'+cont);
    fish.paint_fish();
    var fish_container = document.createElement("div");
    fish_container.className = "fish_container";
    fish_container.innerHTML=
                "<div id='animated-fish"+cont +"' class='fish-container' "+
                "style='z-index:12; left: 524px;'>"+
                "<div class='fish element'><div class='fish-body' style='background:"+ fish.color +";' ><div class='eye'><div class='pupil'></div></div></div><div class='fin' style='background:"+ fish.color +";'></div><div class='fin fin-bottom' style='background:"+ fish.color +";'>"+
                "</div></div></div>";
                document.body.appendChild(fish_container);
    var movement= Math.floor(Math.random() * 4) + 1;
    myMove(movement, fish, cont);
}
function delete_elements(class_name){
        var elements = document.getElementsByClassName(class_name);
        if(elements != null){
            while(elements.length > 0){
                elements[0].innerHTML= '';
                elements[0].parentNode.removeChild(elements[0]);
            }
        }
}
function delete_elements_by_id(class_name){
    var parent = document.getElementById("body");
    var child = document.getElementsByClassName("fish_container");
    parent.removeChild(child);
}

function direction(){
    return Math.random() < 0.5 ? -1 : 1;
}

function penguin_state(state){
    var penguin = document.getElementById("penguin-img");

    switch(state){
        case 0: penguin.src="images/p1.png"; break;
        case 1: penguin.src="images/p2.png"; break;
        case 2: penguin.src="images/p3.png"; break;
        case 3: penguin.src="images/p4.png"; break;
    }
}

function move_pingu(positionX){
    var penguin = document.getElementById("fishing-penguin-container");
    var position = penguin.getBoundingClientRect();
    penguin.style.left = position.left + positionX +'px';
}

function move_fish(){
    var fish = document.getElementsByClassName('fish-container');
    var num = fish.length;

    for(var i=0; i<num; i++){
        var element_id = 'animated-fish' + i;       
        move_one_fish(element_id);   
    }
    fishEscaped(); 
}

function fishEscaped(){
    generateLostPanel();
    setTimeout( next_level, 60000);
}

function move_one_fish(html_object_id){
    var id = setInterval(frame, 50);
    var fish;
    var fish_container;
    function frame(){
        if(fish_container != null){
        var position = fish_container.getBoundingClientRect();
        fish_container.style.top = position.top + direction()*fish.escape(position.left+30)+'px';
        fish_container.style.left = position.left +50+ 'px';     
        }else{
            fish= new Fish(html_object_id);
            fish_container = document.getElementById(html_object_id);
        }
    }
}

function addPoints(){
    var points = document.getElementById("points");
    var actualPoints = parseInt(points.innerHTML);
    var totalPoints;
    if(actualPoints == 0){
        totalPoints = seconds * 2;
    }else{
        totalPoints = actualPoints * seconds;
    }
    points.innerHTML = totalPoints;
}









