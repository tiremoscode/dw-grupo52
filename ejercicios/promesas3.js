const obtenerPokemonPromesas = (nombrePokemon) => {

    return new Promise((resolve, reject) => {
        // Simular una solicitu asincrona para obtener datos del pokemón
        const pokemonDatabase = {
            "pikachu": {
                "nombre": "Pikachu",
                "tipo": "Electrico",
                "habilidad": "Electricidad"
            },
            "bulbasaur": {
                nombre: "Bulbasaur",
                "tipo": "Planta",
                "habilidad": "Latigo Cepa"
            },
            "charmander": {
                nombre: "Charmander",
                "tipo": "Fuego",
                "habilidad": "Lanza Llamas"
            }
        }

        // Comprobar si el pokemon recibido existe en la base de datos.
        const pokemonEncontrado = pokemonDatabase[nombrePokemon.toLowerCase()];

        if (pokemonEncontrado) {
            resolve(pokemonEncontrado);
        } else {
            reject('No se encontro el pokemon con nombre ' + nombrePokemon);
        }

    });

};

obtenerPokemonPromesas('pikachu')
    .then((pokemon) => {
        console.log('si lo encontre');
    })
    .catch((error) => {
        console.log('error ', error);
    })
    .finally(() => {
        console.log('Se cierra la busqueda');
    });

obtenerPokemonPromesas('mewtwo')
    .then((pokemon) => {
        console.log('Si lo encontre');
    })
    .catch((error) => {
        console.log('error ', error);
    })
    .finally(() => {
        console.log('Se cierra la busqueda');
    });