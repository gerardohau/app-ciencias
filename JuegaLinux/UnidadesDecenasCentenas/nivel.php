<!DOCTYPE html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="css/styles.css">
    <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
    <title>Document</title>
</head>
<body id="body" class="body">


    <!--
    efecto de nieve
        http://codeconvey.com/make-css-snow-animation-effect-using-css3/


     -->

    <!-- Inicio de navBar -->
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark mynav">
        <!-- Brand/logo -->
        <a class="navbar-brand" href="#">Nivel <?php echo intval($_POST['level']); ?> </a>

        <!-- Links -->
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link">Puntos: </a>
            </li>
            <li class="nav-item">
                <a  class="nav-link" id="points"> 0</a>
            </li>
            <li class="nav-item">
                <a class="nav-link">te quedan: </a> 
            </li>
            <li class="nav-item">
               <a class="nav-link" id='seconds-counter'> </a>
            </li>
             <li class="nav-item">
               <a class="nav-link" id='seconds-counter' style="margin-left: 10px;"> segundos</a>
            </li>
            <li class="nav-item">
               <a class="nav-link" id='seconds-counter' style="margin-left: 10px;"></a>
            </li>
            <li class="nav-item">
               <button class="btn btn-info" id='help-button' style="margin-left: 10px;"> Ayuda </button>
            </li>
            
        </ul>

        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                          </li>
            <li class="nav-item">
            </li>
        </ul>
    </nav><!-- Fin de navBar -->




    <DIV class="snow-container">



<div class="snowflakes" aria-hidden="true">
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❆
  </div>
  <div class="snowflake">
  ❄
  </div>
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❆
  </div>
  <div class="snowflake">
  ❄
  </div>
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❆
  </div>
  <div class="snowflake">
  ❄
  </div>
</div>






    </DIV>
        <div id="initial-message" class="initial-message">
                <h2 style='font-size: 2.2rem !important' class="help-pingu-title">  Ayuda  a  pingu </h2>
                <span style='font-size: 1.8rem !important' align="center">Ayuda  a  Pingu  a  contar
                sus  pescados</span>
                <div class="" style="display: flex;align-items: flex-end !important; height: 200px;">
                    <div class="col-4 letras">
                        <div class=''>
                           <div class='ofish element'>
                                <div class='ofish-body' style='background:red;' >
                                    <div class='oeye'>
                                        <div class='opupil'>                                            
                                        </div>
                                    </div>
                                </div>
                                <div class='ofin' style='background:red;'>
                                </div>
                                <div class='ofin fin-bottom' style='background:red;'>
                                </div>
                            </div>
                        </div>
                        1 unidad
                    </div>
                
                <div class="col-4 letras">
                    <div class=''>
                        <img class="medium_bag" height="150px" width="200px" src='images/saco1.png'>
                    </div>
                        1 decena
                </div>
                <div class="col-4 letras">
                    <div class=''>
                        <img class="big_bag" height="150px" width="200px" src='images/saco2.png'>
                        </div>
                        1 centena
                </div>
                    
                </div>
                <center>
                <button id="start" class='start-button btn btn-info'>Entendido</button>
                </center>
            </div>

<div id='initial-help-message' class='player-help-panel'>

</div> 



        <div id="help-panel" class="help">
            <div class='row help-title'>
                <h1 class="title">¡Vuelve a intentarlo!, Recuerda que ...</h1>
            </div>
                <span class="letras" align="center">Hay que determinar la cantidad
                    de peces antes de que se acabe el tiempo. Para eso recordemos:
                </span>
                    <span class="help-row">
                        1 unidad = 1 pez =<div class='fish element'>
                                <div class='fish-body' style='background:red;' >
                                    <div class='eye'>
                                        <div class='pupil'>                                            
                                        </div>
                                    </div>
                                </div>
                                <div class='fin' style='background:red;'>
                                </div>
                                <div class='fin fin-bottom' style='background:red;'>
                                </div>
                            </div>
                        
                        </span>
                    
    
                <span class="help-row">
                    3 unidades = 
                    <div class="next">
                        <div class='fish element'>
                                <div class='fish-body' style='background:red;' >
                                    <div class='eye'>
                                        <div class='pupil'>                                            
                                        </div>
                                    </div>
                                </div>
                                <div class='fin' style='background:red;'>
                                </div>
                                <div class='fin fin-bottom' style='background:red;'>
                                </div>
                        </div>
                    </div>
                    <font class="next">
                    + 
                    </font>
                    <div class="next">                          
                        <div class='fish element'>
                                <div class='fish-body' style='background:blue;' >
                                    <div class='eye'>
                                        <div class='pupil'>                                            
                                        </div>
                                    </div>
                                </div>
                                <div class='fin' style='background:blue;'>
                                </div>
                                <div class='fin fin-bottom' style='background:blue;'>
                                </div>
                        </div>
                    </div>
                    <font class="next">
                    +
                    </font>
                    <div class="next">                          
                        <div class='fish element'>
                                <div class='fish-body' style='background:white;' >
                                    <div class='eye'>
                                        <div class='pupil'>                                            
                                        </div>
                                    </div>
                                </div>
                                <div class='fin' style='background:white;'>
                                </div>
                                <div class='fin fin-bottom' style='background:white;'>
                                </div>
                        </div>
                    </div>
                </span>
                <span class="help-row">
                10 peces
                    <font class="next">
                    =
                    </font>
                    <div class="next">                          
                        <div class='fish element'>
                                <div class='fish-body' style='background:white;' >
                                    <div class='eye'>
                                        <div class='pupil'>                                            
                                        </div>
                                    </div>
                                </div>
                                <div class='fin' style='background:white;'>
                                </div>
                                <div class='fin fin-bottom' style='background:white;'>
                                </div>
                        </div>
                    </div>
                    <font class="next">
                    +
                    </font>
                    <div class="next">                          
                        <div class='fish element'>
                                <div class='fish-body' style='background:white;' >
                                    <div class='eye'>
                                        <div class='pupil'>                                            
                                        </div>
                                    </div>
                                </div>
                                <div class='fin' style='background:white;'>
                                </div>
                                <div class='fin fin-bottom' style='background:white;'>
                                </div>
                        </div>
                    </div>
                    <font class="next">
                    +
                    </font>
                    <div class="next">                          
                        <div class='fish element'>
                                <div class='fish-body' style='background:white;' >
                                    <div class='eye'>
                                        <div class='pupil'>                                            
                                        </div>
                                    </div>
                                </div>
                                <div class='fin' style='background:white;'>
                                </div>
                                <div class='fin fin-bottom' style='background:white;'>
                                </div>
                        </div>
                    </div>
                    <font class="next">
                    +
                    </font>
                    <div class="next">                          
                        <div class='fish element'>
                                <div class='fish-body' style='background:white;' >
                                    <div class='eye'>
                                        <div class='pupil'>                                            
                                        </div>
                                    </div>
                                </div>
                                <div class='fin' style='background:white;'>
                                </div>
                                <div class='fin fin-bottom' style='background:white;'>
                                </div>
                        </div>
                    </div>
                    <font class="next">
                    +
                    </font>
                    <div class="next">                          
                        <div class='fish element'>
                                <div class='fish-body' style='background:white;' >
                                    <div class='eye'>
                                        <div class='pupil'>                                            
                                        </div>
                                    </div>
                                </div>
                                <div class='fin' style='background:white;'>
                                </div>
                                <div class='fin fin-bottom' style='background:white;'>
                                </div>
                        </div>
                    </div>
                    <font class="next">
                    +
                    </font>
                    <div class="next">                          
                        <div class='fish element'>
                                <div class='fish-body' style='background:white;' >
                                    <div class='eye'>
                                        <div class='pupil'>                                            
                                        </div>
                                    </div>
                                </div>
                                <div class='fin' style='background:white;'>
                                </div>
                                <div class='fin fin-bottom' style='background:white;'>
                                </div>
                        </div>
                    </div>
                    <font class="next">
                    +
                    </font>
                    <div class="next">                          
                        <div class='fish element'>
                                <div class='fish-body' style='background:white;' >
                                    <div class='eye'>
                                        <div class='pupil'>                                            
                                        </div>
                                    </div>
                                </div>
                                <div class='fin' style='background:white;'>
                                </div>
                                <div class='fin fin-bottom' style='background:white;'>
                                </div>
                        </div>
                    </div>
                                        <font class="next">
                    +
                    </font>
                    <div class="next">                          
                        <div class='fish element'>
                                <div class='fish-body' style='background:white;' >
                                    <div class='eye'>
                                        <div class='pupil'>                                            
                                        </div>
                                    </div>
                                </div>
                                <div class='fin' style='background:white;'>
                                </div>
                                <div class='fin fin-bottom' style='background:white;'>
                                </div>
                        </div>
                    </div>
                                        <font class="next">
                    +
                    </font>
                    <div class="next">                          
                        <div class='fish element'>
                                <div class='fish-body' style='background:white;' >
                                    <div class='eye'>
                                        <div class='pupil'>                                            
                                        </div>
                                    </div>
                                </div>
                                <div class='fin' style='background:white;'>
                                </div>
                                <div class='fin fin-bottom' style='background:white;'>
                                </div>
                        </div>
                    </div>
                                        <font class="next">
                    +
                    </font>
                    <div class="next">                          
                        <div class='fish element'>
                                <div class='fish-body' style='background:white;' >
                                    <div class='eye'>
                                        <div class='pupil'>                                            
                                        </div>
                                    </div>
                                </div>
                                <div class='fin' style='background:white;'>
                                </div>
                                <div class='fin fin-bottom' style='background:white;'>
                                </div>
                        </div>
                    </div> <FONT CLASS="next">=</FONT> 
                           <img src="images/saco1.png" height="30px" width="30px">
                                                <font class="next">
                    =
                    </font>
                         1 decena
                        
                </span>
                <span class="help-row">
                    100 peces 
                    <font class="next">
                    =
                    </font>
                        <img src="images/saco1.png" height="30px" width="30px">
                        <font class="next">
                            +
                        </font>
                        <img src="images/saco1.png" height="30px" width="30px">
                        <font class="next">
                            +
                        </font>
                        <img src="images/saco1.png" height="30px" width="30px">
                        <font class="next">
                            +
                        </font>
                        <img src="images/saco1.png" height="30px" width="30px">
                        <font class="next">
                            +
                        </font>
                        <img src="images/saco1.png" height="30px" width="30px">
                        <font class="next">
                            +
                        </font>
                        <img src="images/saco1.png" height="30px" width="30px">
                        <font class="next">
                            +
                        </font>
                        <img src="images/saco1.png" height="30px" width="30px">
                        <font class="next">
                            +
                        </font>
                        <img src="images/saco1.png" height="30px" width="30px">
                        <font class="next">
                            +
                        </font>
                        <img src="images/saco1.png" height="30px" width="30px">
                        <font class="next">
                            +
                        </font>
                        <img src="images/saco1.png" height="30px" width="30px">
                        <font class="next">
                            =
                        </font>
                        <img src="images/saco2.png" height="30px" width="30px">
                        
                       
                        <font class="next">
                            =
                        </font>
                        1 centena
                </span>
<span class="center">Cargando siguiente nivel</span>
                </div>
                
        </div>

    <div class="main-container"> 


        <div class="first-row row" >

            <div id="winner" class='winner'>
               
           <span class="letras" style='color: #4285f4'>felicidades</span> 
           <span class="letras" style='color: #ea4335'>has</span> 
           <span class="letras" style='color: #fbbc05'>ganado</span> 
           <span class="letras" style='color: #4285f4'>el</span> 
           <span class="letras" style='color: #4285f4'>nivel</span> 

           <img src='images/cara.png'/ height="100px" width="100px">

       </div>  
            <div id="background-wrap">
                <div class="textContainer">


                </div>
                    <div class="x1">
                        <div class="cloud"></div>
                    </div>
                
                    <div class="x2">
                        <div class="cloud"></div>
                    </div>
                
                    <div class="x3">
                        <div class="cloud"></div>
                    </div>
            </div>
    </div>
        <div class="row" >

            <!--
            <div class="hills-container ">
                <div class='nearest-hills'>

                        <div class="hill hill-1">
                            <div class="snow"></div>
                        </div>
                        <div class="hill hill-2">
                            <div class="snow"></div>
                        </div>
                        <div class="hill hill-3">
                            <div class="snow"></div>
                        </div>
                </div>
                <div class='farest-hills'>
                        <div class="hill hill-4">
                            <div class="snow"></div>
                        </div>
                        <div class="hill hill-5">
                            <div class="snow"></div>
                        </div>
                        </div>
                </div>
-->

            </div>
        <div class=" row" >
            <div class="background">
                <div class="ground"></div>
                <div class="group-penguin-container">
                        <div class="npc-penguin-container">
                                <div class="penguin-body"></div>
                                <div class="penguin-body-inside"></div>
                                <div class="penguin-right-wing"></div>
                                <div class="penguin-left-wing"></div>
                                <div class="penguin-right-eye"></div>
                                <div class="penguin-left-eye"></div>
                                <div class="penguin-nose"></div>
                                <div class="penguin-left-foot"></div>
                                <div class="penguin-right-foot"></div>
                                <div class="shadow"></div>
                        </div>
                        <div class="npc-penguin-container">
                            <div class="penguin-body"></div>
                            <div class="penguin-body-inside"></div>
                            <div class="penguin-right-wing"></div>
                            <div class="penguin-left-wing"></div>
                            <div class="penguin-right-eye"></div>
                            <div class="penguin-left-eye"></div>
                            <div class="penguin-nose"></div>
                            <div class="penguin-left-foot"></div>
                            <div class="penguin-right-foot"></div>
                            <div class="shadow"></div>
                        </div>
                </div>
            </div>
                <div class="ground">

                </div >
            <div class="animation">
                <div class="walking-penguin">
                    <div class="penguin-container">
                        <div class="penguin-body"></div>
                        <div class="penguin-body-inside"></div>
                        <div class="penguin-right-wing"></div>
                        <div class="penguin-left-wing"></div>
                        <div class="penguin-right-eye"></div>
                        <div class="penguin-left-eye"></div>
                        <div class="penguin-nose"></div>
                        <div class="penguin-left-foot"></div>
                        <div class="penguin-right-foot"></div>
                        <div class="shadow"></div>
                      </div>
                </div>
                <div id="fishing-penguin-container" style="left: 410px;" class="fishing-penguin-container">
                    <img  id="penguin-img" class="penguin-img" src="images/p1.png">
                </div>

                    <div class="jumping-penguin"></div>
                    <div class="water"></div>
            </div>

            <div id="hole" class="hole">   
            </div>

            <div id="panel-container">
                

        </div> 
        </div>
        <script>
<?php
    $level = intval($_POST['level']);
    $data = array();
    switch ($level) {
        case 1: 
            $data = generate_level(1);
            break;
        case 2:
            $data = generate_level(2);
            break;
        case 3:
            $data = generate_level(3);
            break;
        case 4:
            $data = generate_level(4);
            break;
        default: 
    }
   
function generate_level($level){
    $data = array();
    switch ($level) {
        case 1: 
            $data['phase_1'] = generate_phase(5,1,0,    
                "10 peces" ,  
                "5 peces",
                "15 peces",
                15,
                3, "¿Cuántos peces consiguió pescar Pingu?"
            );
            $data['phase_2'] = generate_phase(11,0,1,   
                "11 peces",
                "100 peces",
                "111 peces",
                111,
                3,"¿Cuántos peces consiguió pescar  pingu?");
            $data['phase_3'] = generate_phase(8,0,0,    
                "12 unidades de peces",
                "8 unidades de peces",
                "8 decenas de peces",
                8,
                2,"¿Cuántas unidades de peces consiguió  Pingu?");
            $data['phase_4'] = generate_phase(2,0,0,     
                "2 unidades de peces",
                "0 unidades de peces",
                "10 unidades de peces",
                2,
                1,"¿Cuántas unidades de peces consiguió Pingu?");
            break;
        case 2:
            $data['phase_1'] = generate_phase(15,0,0,
                "15 decenas de peces",
                "15 unidades de peces",
                "Una decena de peces",
                15,
                3,
                "¿Cuántas decenas de peces obtuvo  pingu?");
            $data['phase_2'] = generate_phase(15,3,0,
                "15 decenas de peces",
                "4 decenas de peces",
                "30 decenas de peces",
                45,
                2,"¿Cuántas decenas de peces obtuvo  pingu?");
            $data['phase_3'] = generate_phase(0,2,1,
                "12 decenas de peces",
                "2 decenas de peces",
                "Una decena de peces",
                120,
                1 ,"¿Cuántas decenas de peces obtuvo  pingu?");
            $data['phase_4'] = generate_phase(0,0,3,
                600,
                100,
                300,
                300,
                3, "¿Cuántas unidades de peces obtuvo  pingu?");
            break;
        case 3:
            $data['phase_1'] = generate_phase(6,0,6,
                "6 centenas de peces",
                "9 centenas de peces",
                "3 centenas de peces",
                606,
                1,"¿Cuántas centenas de peces obtuvo  pingu?");
            $data['phase_2'] = generate_phase(8,0,5,
                "8 centenas",
                "13 centenas",
                "5 centenas",
                5,
                3, "¿Cuántas centenas de peces obtuvo  pingu?");
            $data['phase_3'] = generate_phase(0,2,1,
                "120 centenas de peces",
                "2 centenas de peces",
                "Una centena de peces",
                120,
                3, "¿Cuántas centenas de peces obtuvo  pingu?");
            $data['phase_4'] = generate_phase(0,1,1,
                "120 unidades de peces",
                "110 unidades de peces",
                "2 unidades de peces",
                110,
                2, "¿Cuántas unidades de peces obtuvo  pingu?");
            break;
        case 4:
            $data['phase_1'] = generate_phase(12,6,0,
                "12 peces",
                "72 peces",
                "60 peces",
                72,
                2, "¿Cuántos peces obtuvo  pingu?");
            $data['phase_2'] = generate_phase(0,5,2,
                "2 decenas",
                "25 decenas",
                "5 decenas",
                250,
                2, "¿Cuántas decenas de peces obtuvo  pingu?");
            $data['phase_3'] = generate_phase(4,0,4,
                "4 peces",
                "404 peces",
                "44 peces",
                404,
                2, "¿Cuántos peces obtuvo  pingu?");
            $data['phase_4'] = generate_phase(0,3,5,
                "5 centenas",
                "70 centenas",
                "30 centenas",
                530,
                1, "¿Cuántas centenas de peces obtuvo  pingu?");
            break;
        default: 
    }
    return $data;
}


function generate_phase($num_fish,$num_medium_bags, $num_big_bags, $answer_a, $answer_b, $answer_c, $answer, $value, $question){
    $data = array();
    $data['num_fish'] = $num_fish;
    $data['num_medium_bags'] = $num_medium_bags;
    $data['num_big_bags'] = $num_big_bags;
    $data['answer_a'] = $answer_a;
    $data['answer_b'] = $answer_b;
    $data['answer_c'] = $answer_c;
    $data['answer'] = $answer;
    $data['value'] = $value;
    $data['question'] = $question;
    return $data;
}?>

    var helpPanelCreated=false;
    var game_points;
    var elements;
    var num_fish;
    var num_medium_bags;
    var num_big_bags;
    var answer_a;
    var answer_b;
    var answer_c;
    var answer;
    var question="";
    var value="";
    var actual_phase = 0;
    const time_before_escape = 100000;// en ms
    var seconds = time_before_escape/1000;
    var fish_still_there= true;

    function change_fase(phase){
        fish_still_there = true;
        seconds = time_before_escape/1000;
        actual_phase++;
        switch(actual_phase){
            case 1:
                num_fish =  "<?php echo $data['phase_1']['num_fish']; ?>";
                num_medium_bags =  "<?php echo $data['phase_1']['num_medium_bags']; ?>";
                num_big_bags =  "<?php echo $data['phase_1']['num_big_bags']; ?>";
                answer_a = "<?php echo $data['phase_1']['answer_a']; ?>";
                answer_b = "<?php echo $data['phase_1']['answer_b']; ?>";
                answer_c = "<?php echo $data['phase_1']['answer_c']; ?>";
                answer = "<?php echo $data['phase_1']['answer']; ?>";
                value = "<?php echo $data['phase_1']['value']; ?>";
                question = "<?php echo $data['phase_1']['question']; ?>";
                break;
            case 2:
                num_fish =  "<?php echo $data['phase_2']['num_fish']; ?>";
                num_medium_bags =  "<?php echo $data['phase_2']['num_medium_bags']; ?>";
                num_big_bags =  "<?php echo $data['phase_2']['num_big_bags']; ?>";
                answer_a = "<?php echo $data['phase_2']['answer_a']; ?>";
                answer_b = "<?php echo $data['phase_2']['answer_b']; ?>";
                answer_c = "<?php echo $data['phase_2']['answer_c']; ?>";
                answer = "<?php echo $data['phase_2']['answer']; ?>";
                value = "<?php echo $data['phase_2']['value']; ?>";
                question = "<?php echo $data['phase_2']['question']; ?>";
                break;
            case 3:
                num_fish =  "<?php echo $data['phase_3']['num_fish']; ?>";
                num_medium_bags =  "<?php echo $data['phase_3']['num_medium_bags']; ?>";
                num_big_bags =  "<?php echo $data['phase_3']['num_big_bags']; ?>";
                answer_a =" <?php echo $data['phase_3']['answer_a']; ?>";
                answer_b = "<?php echo $data['phase_3']['answer_b']; ?>";
                answer_c = "<?php echo $data['phase_3']['answer_c']; ?>";
                answer = "<?php echo $data['phase_3']['answer']; ?>";
                value = "<?php echo $data['phase_3']['value']; ?>";
                question = "<?php echo $data['phase_3']['question']; ?>";
                break;
            case 4:
                num_fish =  "<?php echo $data['phase_4']['num_fish']; ?>";
                num_medium_bags =  "<?php echo $data['phase_4']['num_medium_bags']; ?>";
                num_big_bags =  "<?php echo $data['phase_4']['num_big_bags']; ?>";
                answer_a = "<?php echo $data['phase_4']['answer_a']; ?>";
                answer_b = "<?php echo $data['phase_4']['answer_b']; ?>";
                answer_c = "<?php echo $data['phase_4']['answer_c']; ?>";
                answer = "<?php echo $data['phase_4']['answer']; ?>";
                value = "<?php echo $data['phase_4']['value']; ?>";
                question = "<?php echo $data['phase_4']['question']; ?>";
                break;
        }
    }

    function call(){
        var points = document.getElementById("points").innerHTML;
        window.location = "winPage.html?points=" + points;
}
    </script>
    <script src="js/movement.js"></script>   
    <script src="js/fish.js"></script>
    <script src="js/time.js"></script>    
</body>
</html>