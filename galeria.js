var indice = 1;
mostrarFoto(indice);

// Next/previous controls
function navegarFoto(n) {
  mostrarFoto(indice += n);
}

// Thumbnail image controls
function fotoActual(n) {
  mostrarFoto(indice = n);
}

function mostrarFoto(n) {
  var i;
  var fotos = document.getElementsByClassName("foto");
  var circulos = document.getElementsByClassName("circulo");
  if (n > fotos.length) {indice = 1}
  if (n < 1) {indice = fotos.length}
  for (i = 0; i < fotos.length; i++) {
      fotos[i].style.display = "none";
  }
  for (i = 0; i < circulos.length; i++) {
      circulos[i].className = circulos[i].className.replace(" active", "");
  }
  fotos[indice-1].style.display = "block";
  circulos[indice-1].className += " active";
}