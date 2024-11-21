

function obtenerInfoPokemon(name) {
    const url = 'https://pokeapi.co/api/v2/pokemon/nidorina';
    fetch(url)
        .then(respuesta => respuesta.json()) // Convirtiendo mi respiuesta en un objeto JSON
        .then(data => {
            // console.log(data);
            console.log('Nombre: ' + data.name + ' Tipo: ' + data.types[0].type.name + ' Habilidad: '+ data.abilities[1].ability.name + ' Algun movimiento: ' + data.moves[0].move.name )
        })
        .catch(error => {
            console.log('Hubo un error ' + error);
        });      
};


obtenerInfoPokemon();

