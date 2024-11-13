function generarrfc () {
    var nombre = document.getElementById('nombre').value.toUpperCase();
    var paterno = document.getElementById('paterno').value.toUpperCase();
    var materno = document.getElementById('materno').value.toUpperCase();
    var cumpleanios = document.getElementById('cumpleanios').value;
    
    
    var rfcgenerado = paterno.substring(0, 2) + materno.substring(0, 1) + nombre.substring(0, 1) + cumpleanios.replace(/-/g, '').substring
    (2) + 'XXX' ;

    document.getElementById('rfc').textContent = 'RFC generado: ' + rfcgenerado;
    //const rfc = document.getElementById('resultado');
    //resultado.innerHTML = `resultado' ${rfcgenerado}`;

}