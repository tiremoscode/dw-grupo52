
function generarRfc() {
    //Obtengo el id de html y con toUpperCase convierto en mayúscula las letras
    const nomCompleto = document.getElementById('nomCompleto').value.toUpperCase();
    const apellidoPat = document.getElementById('apellidoPat').value.toUpperCase();
    const apellidoMat = document.getElementById('apellidoMat').value.toUpperCase();
    const fechaNac = document.getElementById('fechaNac').value;

    //Extraigo las primer letra y vocal del apellido paterno
    const apellidoPaterno = apellidoPat.slice(0, 2);

    //Se extrae la primer letra del apellido materno
    const apellidoMaterno = apellidoMat.charAt(0);

    //Se extrae la primer letra del nombre
    const nombreCompleto = nomCompleto.charAt(0);

    //Formateo la fecha de nacimiento al ser un tipo Date
    const dosDigitosFecha = fechaNac.split('-');
    const anioNac = dosDigitosFecha[0].slice(2);
    const mesNac = dosDigitosFecha[1].padStart(2, '0');
    const diaNac = dosDigitosFecha[2].padStart(2, '0');

    //Uniendo RFC
    const UnirRfc = `${apellidoPaterno}${apellidoMaterno}${nombreCompleto}${anioNac}${mesNac}${diaNac}XXX`;

    document.getElementById('vistaRfc').innerHTML = "RFC: " + UnirRfc;
}

