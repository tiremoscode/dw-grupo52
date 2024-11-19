function generarRFC() {
    const Nombre = document.getElementById('cajaNombre').value.toUpperCase();
    const ApePate = document.getElementById('cajaApePate').value.toUpperCase();
    const ApeMate = document.getElementById('cajaApeMate').value.toUpperCase();
    const Fecha = document.getElementById('cajaFecha').value;

    const generaRFC = ApePate.substring(0, 2) + ApeMate.substring(0, 1) +
    Nombre.substring(0, 1) + Fecha.replace(/-/g, '').substring(2) + 'XXX';

   

   document.getElementById('mostrarRFC').textContent = 'Su RFC es: ' + generaRFC; 

    

  
}