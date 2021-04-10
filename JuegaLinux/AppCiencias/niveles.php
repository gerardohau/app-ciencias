<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>Diviertete, juega y aprende con Linux</title>

  <!-- Custom fonts for this theme -->
  <link href="css/animate.min.css" rel="stylesheet"> 
  <link href="../../fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
  <link href="../../fontawesome-free/css/Montserrat.css" rel="stylesheet" type="text/css">
  <link href="../../fontawesome-free/css/Lato.css" rel="stylesheet" type="text/css">
  


  <!-- Theme CSS -->
  <link href="../../css/freelancer.min.css" rel="stylesheet" type="text/css">

</head>

<body id="page-top">

  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg bg-secondary" id="mainNav">
    <div class="container">
      <a class="navbar-brand js-scroll-trigger" href="#page-top">Diviertete, juega y aprende con Linux</a>
    </div>
  </nav>

  <!-- Masthead -->
  <div class="container text-center padding wow fadeIn mt-5" data-wow-duration="1000ms" data-wow-delay="300ms">
    <?php $level = $_GET['levels']; 
      echo "<h1>Niveles: $level</h1>"
      ?>
  </div>
  <section id="levels">
      <?php 
        //$level = $_GET['levels'];
        $filas = ($level / 4) < 1 ? 1 : $level/4;
        $themes = $level;
        while($filas >0){
          $columnas = $level < 4 ? $level : 4;
          echo "<div class='row align-items-center' style='margin-top: 80px'>";
          while($columnas >0){
            $theme = ($themes+1)-$level;
            echo "<div class='col-sm-3 text-center padding wow fadeIn' data-wow-duration='1000ms' data-wow-delay='1000ms'>
            <div class='wow scaleIn' data-wow-duration='500ms' data-wow-delay='600ms'>
              <div class='contenedor' Style='text-align:-webkit-center;'><div class='card' style='width: 18rem'>
            <img class='card-img-top' src='../../img/portfolio/game.png' alt='Card image cap'>
            <div class='card-body'>
              <h5 class='card-title'>Tema ".$theme."</h5>
              <p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href='#' class='btn btn-primary'>Jugar Ahora</a>
            </div>
          </div>
          </div>
            </div>
          </div>";
            /*echo "<div class='col-md-3 text-center padding wow fadeIn' data-wow-duration='1000ms' data-wow-delay='1000ms'>
            <div class='wow scaleIn' data-wow-duration='500ms' data-wow-delay='600ms'>
              <div class='contenedor'>
                <a href='../AppCiencias/dificultad.html'><h2>Tema ".$theme."</h2></a>
              </div>
            </div>
          </div>";*/
          $level--;
          $columnas--;
          }
          echo "</br></div>";
          $filas--;
        }
      ?>
  </section>

  <!-- Bootstrap core JavaScript -->
  <script src="../../jquery/jquery.min.js"></script>
  <script src="../../bootstrap/bootstrap.bundle.min.js"></script>

  <!-- Plugin JavaScript -->
  <script src="../../jquery-easing/jquery.easing.min.js"></script>

  <!-- Contact Form JavaScript -->
  <script src="../../js/jqBootstrapValidation.js"></script>
  <!--<script src="../../js/contact_me.js"></script>-->

  <!-- Custom scripts for this template -->
  <script src="../../js/freelancer.min.js"></script>

    <script type="text/javascript" src="js/lightbox.min.js"></script>
    <script type="text/javascript" src="js/wow.min.js"></script>
    <script type="text/javascript" src="js/main.js"></script>   

</body>

</html>