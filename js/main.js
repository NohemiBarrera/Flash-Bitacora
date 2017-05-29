//Función que incializa los modales
$(document).ready(function(){
    $('.modal').modal();
});

//calendario
 $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 10, // Creates a dropdown of 15 years to control year
        onStart: () => {
            $('.picker').appendTo('body');
        }
    });

//limpiar modal
function cleanModal(id) {
	let inputs = document.querySelectorAll('#' + id + ' input');
	for (let input of inputs) {
		input.value = '';
	}
	inputs = document.querySelectorAll('#' + id + ' textarea');
	for (let input of inputs) {
		input.value = '';
	}
	$('#' + id).modal('close');
}

 //archivos
var newTxt = document.getElementById("modal-msj-message");
var publicar = document.getElementById("publicar");
var publicaciones = document.getElementById("publicaciones");
var titulo = document.getElementById("modal-msj-title");
var txt = document.getElementById("texto");

newTxt.addEventListener("keyup", contadorDeCaracteres);
publicar.addEventListener("click", publicarTexto);

function contadorDeCaracteres(){
  var numeroCaracteres = newTxt.value.length;
  document.getElementById("caracteres").innerText = numeroCaracteres;
}

function publicarTexto(){
  var articulo = document.createElement("article");
  var parrafo = document.createElement("p");
  var parrafo2 = document.createElement("h2");
  parrafo2.innerText = titulo.value;
  parrafo.innerText = newTxt.value;
  articulo.appendChild(parrafo2);
  articulo.appendChild(parrafo);
  publicaciones.insertBefore(articulo, publicaciones.firstChild);
  newTxt.value = "";
  titulo.value= "";
  cleanModal("modalMsj");
 };