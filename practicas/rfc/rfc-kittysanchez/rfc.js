
function generarRFC() {
    
    const apellidoPaterno = document.getElementById('apellidoPaterno').value.trim();
    const apellidoMaterno = document.getElementById('apellidoMaterno').value.trim();
    const nombre = document.getElementById('nombre').value.trim();
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;

    const mensaje = document.getElementById('message');

    
    if (!apellidoPaterno || !apellidoMaterno || !nombre || !fechaNacimiento) {
        mensaje.textContent = "Por favor, complete todos los campos.";
        mensaje.classList.remove('valid-message');
        return;
    }

    const primeraLetraPaterno = apellidoPaterno.charAt(0).toUpperCase();
    const primeraVocalPaterno = obtenerPrimeraVocalInterna(apellidoPaterno).toUpperCase();
    const primeraLetraMaterno = apellidoMaterno.charAt(0).toUpperCase();
    const primeraLetraNombre = nombre.charAt(0).toUpperCase();

    const fecha = new Date(fechaNacimiento);
    const dia = String(fecha.getDate()).padStart(2, '0');
    const mes = String(fecha.getMonth() + 1).padStart(2, '0');
    const anio = String(fecha.getFullYear()).slice(2); 

    const fechaFormateada = dia + mes + anio;

    
    const rfcBase = `${primeraLetraPaterno}${primeraVocalPaterno}${primeraLetraMaterno}${primeraLetraNombre}${fechaFormateada}`;
    mensaje.textContent = `RFC Generado: ${rfcBase}`;
    mensaje.classList.add('valid-message');
}


function obtenerPrimeraVocalInterna(apellido) {
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 1; i < apellido.length; i++) {
        if (vocales.includes(apellido.charAt(i).toLowerCase())) {
            return apellido.charAt(i);
        }
    }
    return '';
}
