function generarRFC() {
    // Obtener valores del formulario
    const nombre = document.getElementById("nombre").value.trim().toUpperCase();
    const apellidoPaterno = document.getElementById("apellidoPaterno").value.trim().toUpperCase();
    const apellidoMaterno = document.getElementById("apellidoMaterno").value.trim().toUpperCase();
    const diaNacimiento = document.getElementById("diaNacimiento").value.padStart(2, '0');
    const mesNacimiento = document.getElementById("mesNacimiento").value.padStart(2, '0');
    const anoNacimiento = document.getElementById("anoNacimiento").value.padStart(2, '0');

    // Validación de vocal en el apellido paterno
    const vocales = ['A', 'E', 'I', 'O', 'U'];
    let segundaLetra = '';
    for (let letra of apellidoPaterno.slice(1)) {
        if (vocales.includes(letra)) {
            segundaLetra = letra;
            break;
        }
    }
    if (!segundaLetra) {
        alert("El apellido paterno debe contener al menos una vocal después de la primera letra.");
        return;
    }

    // Construir las partes del RFC
    const rfc = `${apellidoPaterno[0]}${segundaLetra}${apellidoMaterno[0]}${nombre[0]}` +
                `-${anoNacimiento}${mesNacimiento}${diaNacimiento}-XXX`;

    // Mostrar el resultado en la página
    document.getElementById("resultadoRFC").innerText = rfc;
}
