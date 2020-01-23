<?php 
/*
function ConectarBaseDatos($sql){

	$mysqli = new mysqli('127.0.0.1', 'root', '', 'proyectolinux');
	if(!$mysqli){
		return false; 
	}
	else{
		$resultado = $mysqli->query($sql);
		$mysqli->close();
		return $resultado;               
	}

}

function loadLevelData($id){
	$sql = "SELECT * FROM unidadesdescenascentenas WHERE idActividad = 6";
	$resultado = ConectarBaseDatos($sql);
	if ($resultado->num_rows > 0){
		
		$fila =  $resultado->fetch_array(MYSQLI_ASSOC);
		return $fila['idActividad'];

	} else {
		return "No hay datos";
	}
}

echo loadLevelData($_POST['level']);

*/
function render_php(){
	$id = intval($_POST['level']);
	/*
	switch($id){
	    case 1: echo 'const num_fish=1; const answer_a = 1; const answer_b = 5; const answer_c = 9;';
	            break;
	    case 2:  echo 'const num_fish=2; const answer_a = 2;const answer_b = 5;const answer_c = 9;';
	            break;
	    case 3:  echo 'const num_fish=3;const answer_a = 3;const answer_b = 5;const answer_c = 9;';
	            break;
	    case 4:  echo 'const num_fish=4;const answer_a = 4;const answer_b = 5;const answer_c = 9;';
	}
	*/
	$data = array();
	switch ($id) {
		case 1: 
			$data = generate_level(1,1,5,9);
			break;
		case 2:
			$data = generate_level(2,2,5,9);
			break;
		case 3:
			$data = generate_level(3,3,5,9);
			break;
		case 4:
			$data = generate_level(400,4,5,9);
			break;
		default: 
			

	}
    ob_start();
    include('../index.php');
    
}


function generate_level(num_fish, answer_a, answer_b, answer_c){
	$data = array();
	$data['num_fish'] =num_fish;
	$data['answer_a'] = answer_a;
	$data['answer_b'] = answer_b;
	$data['answer_c'] = answer_c;
	return $data;
}

$page = render_php();

?>