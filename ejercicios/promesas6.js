function obtenerInfoPokemon(name) {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + name;
    fetch(url)
        .then(respuesta => respuesta.json()) // Convirtiendo mi respiuesta en un objeto JSON
        .then(data => {
            // console.log(data);
            console.log('Nombre: ' + data.name + ' Tipo: ' + data.types[0].type.name)
        })
        .catch(error => {
            console.log('Hubo un error ' + error);
        });
};

const nombrePokemon = 'charmander';
obtenerInfoPokemon(nombrePokemon);