
function generarRFC() {
 
    const nombre = document.getElementById("nombre").value.trim().toUpperCase(); 
    const apellidoPaterno = document.getElementById("apellidoPaterno").value.trim().toUpperCase(); 
    const apellidoMaterno = document.getElementById("apellidoMaterno").value.trim().toUpperCase();
    const dia = document.getElementById("dia").value.padStart(2, "0"); 
    const mes = document.getElementById("mes").value.padStart(2, "0");
    const anio = document.getElementById("anio").value.padStart(2, "0");

    const rfc = apellidoPaterno.slice(0, 2) + apellidoMaterno.charAt(0) + nombre.charAt(0) + anio + mes + dia + "-XXX";

    document.getElementById("resultado").textContent = "RFC: " + rfc;}