function create_btn_a(url, texto_a, color_btn){
  var btn = "<a class='btn btn-"+color_btn+" m-2' href='"+url+"' >"+texto_a+"</a>"
  return btn;
}

function create_list_item(texto_a){
  var elemento = document.createElement("li");
  elemento.setAttribute("id", texto_a);
  elemento.setAttribute("draggable","true");
  elemento.innerHTML = texto_a;
  elemento.className =  "list-group-item m-1 draggable";
  return elemento.innerText;
}
