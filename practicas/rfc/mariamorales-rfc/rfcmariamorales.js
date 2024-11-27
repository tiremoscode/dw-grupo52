function aplicacionRFC() {
   
    const nombre = document.getElementById("nombre").value.toUpperCase();
    const apellidoPaterno = document.getElementById("apellidoPaterno").value.toUpperCase();
    const apellidoMaterno = document.getElementById("apellidoMaterno").value.toUpperCase();
    const dia = document.getElementById("dia").value.padStart(2, '0');
    const mes = document.getElementById("mes").value.padStart(2, '0');
    const anio = document.getElementById("año").value;
    const homoclave = "XXX";

    let rfc = '';

    rfc += apellidoPaterno[0];
    const vocales = apellidoPaterno.slice(1).match(/[AEIOU]/);
    rfc += vocales ? vocales[0] : 'X';
    rfc += apellidoMaterno[0] || 'X';
    rfc += nombre[0];
    rfc += anio + mes + dia;
    rfc += homoclave;

    document.getElementById("rfcR").innerText = rfc;
    document.getElementById("rfcOutput").style.display = "block";
}