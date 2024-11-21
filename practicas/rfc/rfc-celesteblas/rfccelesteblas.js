function generarRFC() {
    const nombre = document.getElementById("nombre").value.trim().toUpperCase();
    const apellidoPaterno = document.getElementById("apellidoPaterno").value.trim().toUpperCase();
    const apellidoMaterno = document.getElementById("apellidoMaterno").value.trim().toUpperCase();
    const diaNacimiento = document.getElementById("diaNacimiento").value.padStart(2,'0');
    const mesNacimiento = document.getElementById("mesNacimiento").value.padStart(2,'0');
    const anoNacimiento= document.getElementById("anoNacimiento").value.padStart(2,'0');

    const vocales = ['A', 'E', 'I', 'O', 'U'];
    const segundaLetra = Array.from(apellidoPaterno.slice(1)).find((letra) => vocales.includes (letra));

    if (!segundaLetra) {alert("El apellido paterno debe tener al menos una vocal despuies de la primera letra"); return;
    }

    function formatearDosCodigos(campo){
        campo.value = campo.value.padStart(2,'0').slice(-2);
    }

    const rfc = `${apellidoPaterno [0]}${segundaLetra}${apellidoMaterno [0]}${nombre [0]}` + `-${anoNacimiento}${mesNacimiento}${diaNacimiento}-XXX`;

    document.getElementById("resultadoRFC").innerText = rfc;

    alert("RFC generado con exito!");
}