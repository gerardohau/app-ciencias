
const draggable_opciones = document.querySelectorAll(".draggable");
const droppable_espacio_respuesta = document.querySelectorAll(".droppable");

const boton =  document.getElementById("submit");
boton.addEventListener("click",checkAnswers);

draggable_opciones.forEach(elem => {
  elem.addEventListener("dragstart", dragStart); // Fires as soon as the user starts dragging an item - This is where we can define the drag data
  // elem.addEventListener("drag", drag); // Fires when a dragged item (element or text selection) is dragged
  // elem.addEventListener("dragend", dragEnd); // Fires when a drag operation ends (such as releasing a mouse button or hitting the Esc key) - After the dragend event, the drag and drop operation is complete
});

droppable_espacio_respuesta.forEach(elem => {
  //elem.addEventListener("dragenter", dragEnter); // Fires when a dragged item enters a valid drop target
  elem.addEventListener("dragover", dragOver); // Fires when a dragged item is being dragged over a valid drop target, repeatedly while the draggable item is within the drop zone
  //elem.addEventListener("dragleave", dragLeave); // Fires when a dragged item leaves a valid drop target
  elem.addEventListener("click",changeAnswer);
  
  elem.addEventListener("drop", drop); // Fires when an item is dropped on a valid drop target
});

// Drag and Drop Functions

//Events fired on the drag target

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
  console.log("Uff")
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


function checkAnswers(){

    droppable_espacio_respuesta.forEach(elem => {
        debugger
        const correct_answer = elem.getAttribute("data-draggable-id");
        const recurrent_answer = elem.getAttribute("data-answer");
        
        if(correct_answer !== recurrent_answer){
            elem.classList.add("bad");
        }else{
            elem.classList.add("good");
        }

    

    });


    boton.classList.add("d-none");
    const button_reintentar = create_btn_a("youtube.com", "Reintentar","light");
    const buttton_siguiente_nivel = create_btn_a("figma.com", "Siguiente nivel", "primary");

    const parent = boton.parentElement;
    parent.appendChild(button_reintentar);
    parent.appendChild(buttton_siguiente_nivel);
}

function changeAnswer(event){
  console.log("cambio res");
  const contenido = event.target.getAttribute("data-answer");
  const opcion_desa = document.getElementById(contenido);
  opcion_desa.classList.remove("d-none");
  event.target.innerHTML = "";
  event.target.setAttribute("data-answer","");

}


function create_btn_a(url, texto_a, color_btn){
  var elemento = document.createElement("a");
  elemento.setAttribute("href", url);
  elemento.innerHTML = texto_a;
  elemento.className =  "btn btn-"+color_btn+" m-2";
  return elemento;
}

function create_list_item(texto_a){
  var elemento = document.createElement("li");
  elemento.setAttribute("id", texto_a);
  elemento.setAttribute("draggable","true");
  elemento.innerHTML = texto_a;
  elemento.className =  "list-group-item m-1 draggable";
  return elemento;
}




