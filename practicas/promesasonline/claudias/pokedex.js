function obtenerInfoPokemon() {
    const nombrePokemon = document.getElementById('pokemon');
    const url = 'https://pokeapi.co/api/v2/pokemon/' + nombrePokemon.value.toLowerCase();
    fetch(url)
        .then(respuesta => respuesta.json()) // Convirtiendo mi respiuesta en un objeto JSON
        .then(data => {
            imagenes.innerHTML+=`<img src='${data.sprites["front_default"]}'>`;
            resultadoid.innerHTML+=('ID: '+ data.id);
            resultadoname.innerHTML+=(data.name.toUpperCase());
            resultadotype.innerHTML+=('Tipo: '+ data.types[0].type.name);
            resultadopeso.innerHTML+=('Peso: ' + data.weight);
            resultadoability.innerHTML+=('Habilidad: ' +data.abilities[1].ability.name);
        })
        .catch(error => {
            alert('Pokemon no encontrado ' + error);
        }); 
};
function limpiar(){
    document.getElementById('pokemon').innerHTML="";
    document.getElementById('resultadoid').innerHTML="";
    document.getElementById('resultadoname').innerHTML="";
    document.getElementById('resultadotype').innerHTML="";
    document.getElementById('resultadopeso').innerHTML="";
    document.getElementById('resultadoability').innerHTML="";
    document.getElementById('imagenes').innerHTML="";
};