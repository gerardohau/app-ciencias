
const draggable_opciones = document.querySelectorAll(".draggable");
const droppable_espacio_respuesta = document.querySelectorAll(".droppable");

const boton =  document.getElementById("submit");
boton.addEventListener("click",checkAnswers);

for(var i=0; i < draggable_opciones.length; i++){
  console.log(draggable_opciones[i]);
  draggable_opciones[i].addEventListener("dragstart", dragStart);
}

for(var i=0; i < droppable_espacio_respuesta.length; i++){
  droppable_espacio_respuesta[i].addEventListener("dragover", dragOver); // Fires when a dragged item is being dragged over a valid drop target, repeatedly while the draggable item is within the drop zone
  //elem.addEventListener("dragleave", dragLeave); // Fires when a dragged item leaves a valid drop target
  droppable_espacio_respuesta[i].addEventListener("click",changeAnswer);
  
  droppable_espacio_respuesta[i].addEventListener("drop", drop); // Fires when an item is dropped on a valid drop target

}


function dragStart(event) {
  event.dataTransfer.setData("text", event.target.id); // or "text/plain" but just "text" would also be fine since we are not setting any other type/format for data value
}

//Events fired on the drop target

function dragEnter(event) {
  if(!event.target.classList.contains("dropped")) {
    event.target.classList.add("droppable-hover");
  }
}

function dragOver(event) {
  if(!event.target.classList.contains("dropped")) {
    event.preventDefault(); // Prevent default to allow drop
  }
}

function dragLeave(event) {
  if(!event.target.classList.contains("dropped")) {
    event.target.classList.remove("droppable-hover");
  }
}

function drop(event) {
  event.preventDefault(); // This is in order to prevent the browser default handling of the data
  const draggableElementData = event.dataTransfer.getData("text"); // Get the dragged data. This method will return any data that was set to the same type in the setData() method

  
  const actual_opcion = event.target.getAttribute("data-answer");
  
  if(actual_opcion !== "") {
    document.getElementById(actual_opcion).classList.remove("d-none")};
  
  
  event.target.setAttribute("data-answer",draggableElementData);
  
  
  
  event.target.innerHTML = draggableElementData;
  const draggableElement = document.getElementById(draggableElementData);
  draggableElement.classList.add("d-none");
}

function changeAnswer(event){
  const contenido = event.target.getAttribute("data-answer");
  const opcion_desa = document.getElementById(contenido);
  opcion_desa.classList.remove("d-none");
  event.target.innerHTML = "";
  event.target.setAttribute("data-answer","");

}

function checkAnswers(){
    console.log("Revisar respuestas");
    var correct_answer_number = 0;
    for(var i=0; i < droppable_espacio_respuesta.length; i++){
      droppable_espacio_respuesta[i].classList.remove("bad");
      droppable_espacio_respuesta[i].classList.remove("good");
      const correct_answer = droppable_espacio_respuesta[i].getAttribute("data-draggable-id");
      const recurrent_answer = droppable_espacio_respuesta[i].getAttribute("data-answer");
        
      if(correct_answer !== recurrent_answer){
        droppable_espacio_respuesta[i].classList.add("bad");
      }else{
        droppable_espacio_respuesta[i].classList.add("good");
        correct_answer_number++;
      }
      
    }
    var answer = droppable_espacio_respuesta.length;
    console.log("Crear modal", answer);
    const contentResult = selectContentResult(answer,correct_answer_number);
    //Add modal information result
    var modal_obj = $("#portfolioModal1");
    //debugger;
    if(modal_obj){
      modal_obj.remove();
    }
    const modal = createBasicModal((bodyModalBasic("Resultados",contentResult)));
    document.body.appendChild(modal);
    modal_obj = $("#portfolioModal1");
    modal_obj.modal('show');

    
}



function selectContentResult(total_answers, correct_answers){
  const half = (total_answers % 2 === 0) ? total_answers / 2: Math.round(total_answers/2) 
  
  if(total_answers === correct_answers){
    const button_reintentar = create_btn_a(window.location.href, "Reintentar","light");
    const buttton_siguiente_nivel = create_btn_a(getNextLevel(), "Siguiente nivel", "primary");
    const options_btn = button_reintentar + buttton_siguiente_nivel;
    return contentResult = templateContentSucess(
                            options_btn,
                            "Lo has hecho muy bien."
                            );
  }   

  if(correct_answers < half){
    const button_reintentar = create_btn_a(window.location.href, "Reintentar","light");
    const options_btn = button_reintentar;
    return contentResult = templateContentDanger(
                            options_btn,
                            "Vas cerca de la mitad, ¡Tu puedes no te desanimes!"
                            );
  }

  if(correct_answers >= half){
    const button_reintentar = create_btn_a(window.location.href, "Reintentar","light");
    const options_btn = button_reintentar;
    return contentResult = templateContentDanger(
                            options_btn,
                            "Vas sobre la mitad, ¡Tu puedes no te desanimes!"
                            );  
  }

  if(correct_answers === 0){
    const button_reintentar = create_btn_a(window.location.href, "Reintentar","light");
    const options_btn = button_reintentar;
    return contentResult = templateContentDanger(
                            options_btn,
                            "No te desanimes, intentalo de nuevo y pide ayuda,¡Puedes lograrlo!"
                            );
  }
  
  
}

function getNextLevel(){
  var nextLevel = "";
  var nivel = window.location.href.match(/(\d+)/g);
  if(nivel <4){
    nivel++;
    nextLevel = "../round"+nivel+"/index.html";
  }else {
    nextLevel = "../index.html";
  }
  return nextLevel;
}






