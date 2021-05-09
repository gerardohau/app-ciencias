function createBasicModal(content){
  var modal =
              '<div class="modal-dialog modal-lg" role="document">' +
                '<div class="modal-content">' +
                  '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
                    '<span aria-hidden="true">' +
                      '<i class="fas fa-times"></i>' +
                      '<h6>Cerrar</h6>' +
                    '</span>' +
                  '</button>' +
                  content +
                '</div>' +
              '</div>';
    var elemento = document.createElement("div");
    elemento.classList.add("portfolio-modal", "modal", "fade");
    elemento.setAttribute("id","portfolioModal1");
    elemento.setAttribute("tabindex","-1");
    elemento.setAttribute("aria-labelledby","portfolioModal1Label");
    elemento.setAttribute("haria-hidden","true");
    elemento.innerHTML = modal;
  return elemento;
}

function bodyModalBasic(title,content) {
  var body = '<div class="modal-body text-center">' +
                '<div class="container">' +
                  '<div class="row justify-content-center">' +
                    '<div class="col-lg-8">' +
                      '<h5 class="text-secondary text-uppercase mb-0">'+title+'</h5>' +
                      '<div class="divider-custom">' +
                        '<div class="divider-custom-line"></div>' +
                        '<div class="divider-custom-icon">' +
                        '</div>' +
                        '<div class="divider-custom-line"></div>' +
                      '</div>' +
                          content +
                    '</div>' +
                  '</div>' +
                '</div>' +
              '</div>';

  return body;
}

function templateContentSucess(options,text){
  var content = '<div class="alert alert-success" role="alert">' +
                '<i class="good-icon far fa-check-circle"></i>' +
                '<p class="mb-3 mt-3">'+text+'</p>' +
                  '<div id="result-options">'+options+'</div>' +
              '</div>';
  return content;
}

function templateContentDanger(options,text){
  var content = '<div class="alert alert-danger" role="alert" id="resultDanger">' +
                '<i class="bad-icon fas fa-times"></i>' +
                '<p class="mb-3 mt-3">'+text+'</p>' +
                  '<div id="result-options">'+options+'</div>' +
              '</div>';
  return content;
}