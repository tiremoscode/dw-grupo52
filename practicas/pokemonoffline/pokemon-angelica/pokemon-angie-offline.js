const obtenerPokemonPromesas = (nombrePokemon) => {
    return new Promise((resolve, reject) => {
        // Simular una solicitud asíncrona para obtener datos del Pokémon
        const pokemonDatabase = {
            "pikachu": {
                "nombre": "Pikachu",
                "tipo": "Eléctrico",
                "habilidad": "Electricidad Estática",
                "ataque": "Impactrueno"
            },
            "bulbasaur": {
                "nombre": "Bulbasaur",
                "tipo": "Planta",
                "habilidad": "Espesura",
                "ataque": "Latigazo"
            },
            "charmander": {
                "nombre": "Charmander",
                "tipo": "Fuego",
                "habilidad": "Mar Llamas",
                "ataque": "Arañazo Scratch"
            },
            "jigglypuff": {
                "nombre": "Jigglypuff",
                "tipo": "Normal/Hada",
                "habilidad": "Gran Encanto",
                "ataque": "Canto"
            },
            "eevee": {
                "nombre": "Eevee",
                "tipo": "Normal",
                "habilidad": "Adaptabilidad",
                "ataque": "Fuga"
            }
        };

        // Comprobar si el Pokémon recibido existe en la base de datos.
        const pokemonEncontrado = pokemonDatabase[nombrePokemon.toLowerCase()];

        if (pokemonEncontrado) {
            resolve(pokemonEncontrado);
        } else {
            reject('No se encontró el Pokémon con nombre ' + nombrePokemon);
        }
    });
};

// Ejemplo de uso
obtenerPokemonPromesas('pikachu')
    .then((pokemon) => {
        console.log(`Sí encontré al Pokémon con Nombre: ${pokemon.nombre}, Tipo: ${pokemon.tipo}, Ataque: ${pokemon.ataque}`);
    })
    .catch((error) => {
        console.log('Error:', error);
    })
    .finally(() => {
        console.log('Búsqueda terminada.');
    });

obtenerPokemonPromesas('jigglypuff') // Pokémon nuevo, se encuentra en la base de datos
    .then((pokemon) => {
        console.log(`Sí encontré al Pokémon con Nombre: ${pokemon.nombre}, Tipo: ${pokemon.tipo}, Habilidad: ${pokemon.habilidad}, Ataque: ${pokemon.ataque}`);
    })
    .catch((error) => {
        console.log('Error:', error);
    })
    .finally(() => {
        console.log('Búsqueda terminada.');
    });

obtenerPokemonPromesas('eevee') // Pokémon nuevo, se encuentra en la base de datos
    .then((pokemon) => {
        console.log(`Sí encontré al Pokémon con Nombre: ${pokemon.nombre}, Tipo: ${pokemon.tipo}, Habilidad: ${pokemon.habilidad}, Ataque: ${pokemon.ataque}`);
    })
    .catch((error) => {
        console.log('Error:', error);
    })
    .finally(() => {
        console.log('Búsqueda terminada.');
    });

obtenerPokemonPromesas('mewtwo') // No se encuentra en la base de datos
    .then((pokemon) => {
        console.log(`Sí encontré al Pokémon con Nombre: ${pokemon.nombre}, Tipo: ${pokemon.tipo}, Habilidad: ${pokemon.habilidad}, Ataque: ${pokemon.ataque}`);
    })
    .catch((error) => {
        console.log('Error:', error);
    })
    .finally(() => {
        console.log('Búsqueda terminada.');
    });

obtenerPokemonPromesas('bulbasaur') // Sí se encuentra en la base de datos
    .then((pokemon) => {
        console.log(`Sí encontré al Pokémon con Nombre: ${pokemon.nombre}, Tipo: ${pokemon.tipo}, Habilidad: ${pokemon.habilidad}, Ataque: ${pokemon.ataque}`);
    })
    .catch((error) => {
        console.log('Error:', error);
    })
    .finally(() => {
        console.log('Búsqueda terminada.');
    });
