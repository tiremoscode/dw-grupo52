function obtenerInfoPokemon() {
    const datosPokemon = document.getElementById('datosPokemon'); 
    const contenidoPokemon = document.getElementById ('resultadoPokemon');
    
    const url = 'https://pokeapi.co/api/v2/pokemon/' + datosPokemon.value.toLowerCase();
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(data => { 
       document.getElementById('resultadoPokemon').innerHTML =
            `<p>Nombre:${data.name.charAt(0).toUpperCase() + data.name.slice(1)}</p> 
            <img src="${data.sprites.front_default}" alt="${data.name}"/>
            <p>Tipo:${data.types[0].type.name}</p>
            <p>Habilidades:${data.abilities.map(ability => ability.ability.name).join(', ')}</p>
            <p>Velocidad:${data.stats[5].base_stat}</p>`;
    })

    .catch(error => {
        contenidoPokemon.innerHTML = `<p>Error: ${error.message}</p>`;
    }); 
};