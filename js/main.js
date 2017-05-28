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

 //archivos

 /*<input type="file" id="file">
	<img src="#" alt="mm" id="chilaquilLOL">*/

		var file = document.getElementById("file");

		file.addEventListener("change", manejarSubida); //de no tener archivo a tener un archivo

		function manejarSubida(){
			//console.log(this.files);
			var reader = new FileReader();
			reader.readAsDataURL(this.files[0]);

			reader.onload =function(){
				var imagenChilaquil = this.result;
				document.getElementById("chilaquilLOL").setAttribute("src", imagenChilaquil);
			}
		}