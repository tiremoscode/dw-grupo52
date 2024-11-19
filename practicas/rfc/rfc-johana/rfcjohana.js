function generarRFC() {
    /*captura de los datos del formulario */
    const nombre = document.getElementById("nombre").value.trim().toUpperCase(); /* .trim() elimina los espacios en blanco*/
    const apellidoP = document.getElementById("apellidoP").value.trim().toUpperCase(); /* .toUpperCase() convierte el texto en mayusculas */
    const apellidoM = document.getElementById("apellidoM").value.trim().toUpperCase();
    const dia = document.getElementById("dia").value.padStart(2, "0"); /*.padStart(2, 0) asegura que solo sean 2 dijitos si se escribe 6 agrega un 0 y sera 06 */
    const mes = document.getElementById("mes").value.padStart(2, "0");
    const an = document.getElementById("an").value.padStart(2, "0");

    const rfc = apellidoP.slice(0, 2) + apellidoM.charAt(0) + nombre.charAt(0) + an + mes + dia + "-XXX";
    /*.slice(0, 2) toma las 2 primeras letas del apellido p y m , .charAt(0) toma la primer letra  */
    document.getElementById("resultado").textContent = "RFC: " + rfc;}