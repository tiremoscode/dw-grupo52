function hacerSaludo() {
    const obtenerNombre = document.getElementById('cajaSaludo').value;
    console.log(obtenerNombre);

    const generarSaludo = document.getElementById('mostrarSaludo');
    generarSaludo.innerHTML = `Hola: ${obtenerNombre}`;
}