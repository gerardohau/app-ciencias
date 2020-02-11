

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
  elem.addEventListener("dragenter", dragEnter); // Fires when a dragged item enters a valid drop target
  elem.addEventListener("dragover", dragOver); // Fires when a dragged item is being dragged over a valid drop target, repeatedly while the draggable item is within the drop zone
  elem.addEventListener("dragleave", dragLeave); // Fires when a dragged item leaves a valid drop target
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
  event.target.classList.remove("droppable-hover");
  const draggableElementData = event.dataTransfer.getData("text"); // Get the dragged data. This method will return any data that was set to the same type in the setData() method

  event.target.setAttribute("data-answer",draggableElementData);
  event.target.innerHTML = draggableElementData;
  //const droppableElementData = event.target.getAttribute("data-draggable-id");
// const isCorrectMatching = draggableElementData === droppableElementData;
    const draggableElement = document.getElementById(draggableElementData);
    event.target.classList.add("dropped");
    // event.target.style.backgroundColor = draggableElement.style.color; // This approach works only for inline styles. A more general approach would be the following: 
    //event.target.style.backgroundColor = window.getComputedStyle(draggableElement).color;
   // draggableElement.classList.add("dragged");
    //draggableElement.setAttribute("draggable", "false");
    event.target.insertAdjacentHTML("afterbegin", `<i class="fas fa-${draggableElementData}"></i>`);
  
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
    const button_reintentar = create_btn_a("youtube.com", "Reintentar","bg-red");
    const buttton_siguiente_nivel = create_btn_a("figma.com", "Siguiente nivel", "bg-green");

    const parent = boton.parentElement;
    parent.appendChild(button_reintentar);
    parent.appendChild(buttton_siguiente_nivel);
}

function create_btn_a(url, texto_a, color_btn){
  var elemento = document.createElement("a");
  elemento.setAttribute("href", url);
  elemento.innerHTML = texto_a;
  elemento.className =  "btn btn-light m-2 ";
  return elemento;
}

