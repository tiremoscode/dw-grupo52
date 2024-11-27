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
            },
            "cyndaquil" : {
                "nombre": "Cyndaquil",
                "tipo": "Raton Fuego",
                "habilidad": "Mar Llamas"
            },
            "butterfree" : {
                "nombre": "Butterfree",
                "tipo": "Bicho",
                "habilidad": "Ojo compuesto "
            },
            "gengar" : {
                "nombre": "Gengar",
                "tipo": "Fantasma",
                "habilidad": "Cuerpo maldito "
            },
            "arcaine" : {
                "nombre": "Arcaine",
                "tipo": "Fuego",
                "habilidad": "Intimidacion"
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
        console.log(`Si lo encontré: Nombre: ${pokemon.nombre}, Tipo: ${pokemon.tipo}, Habilidad: ${pokemon.habilidad}`);
    })
    .catch((error) => {
        console.log('error ', error);
    })
    .finally(() => {
        console.log('Se cierra la busqueda');
    });

obtenerPokemonPromesas('mewtwo')
    .then((pokemon) => {
        console.log(`Si lo encontre: Nombre: ${pokemon.nombre}, Tipo: ${pokemon.tipo}, Habilidad: ${pokemon.habilidad}`);
    })
    .catch((error) => {
        console.log('error ', error);
    })
    .finally(() => {
        console.log('Se cierra la busqueda');
    });
obtenerPokemonPromesas('cyndaquil')
    .then((pokemon) => {
        console.log(`Si lo encontre: Nombre: ${pokemon.nombre}, Tipo: ${pokemon.tipo}, Habilidad: ${pokemon.habilidad}`);
    })
    .catch((error) => {
        console.log('error ', error);
    })
    .finally(() => {
        console.log('Se cierra la busqueda');
    });
obtenerPokemonPromesas('zubat')
    .then((pokemon) => {
        console.log(`Si lo encontre: Nombre: ${pokemon.nombre}, Tipo: ${pokemon.tipo}, Habilidad: ${pokemon.habilidad}`);
    })
    .catch((error) => {
        console.log('error ', error);
    })
    .finally(() => {
        console.log('Se cierra la busqueda');
    });
obtenerPokemonPromesas('gengar')
    .then((pokemon) => {
        console.log(`Si lo encontre: Nombre: ${pokemon.nombre}, Tipo: ${pokemon.tipo}, Habilidad: ${pokemon.habilidad}`);       
    })
    .catch((error) => {
        console.log('error ', error);
    })
    .finally(() => {
        console.log('Se cierra la busqueda');
    });
obtenerPokemonPromesas('Persian')
    .then((pokemon) => {
        console.log(`Si lo encontre: Nombre: ${pokemon.nombre}, Tipo: ${pokemon.tipo}, Habilidad: ${pokemon.habilidad}`);        
    })
    .catch((error) => {
        console.log('error ', error);
    })
    .finally(() => {
        console.log('Se cierra la busqueda');
    });
obtenerPokemonPromesas('Mankey')
    .then((pokemon) => {
        console.log(`Si lo encontre: Nombre: ${pokemon.nombre}, Tipo: ${pokemon.tipo}, Habilidad: ${pokemon.habilidad}`);
    })
    .catch((error) => {
        console.log('error ', error);
    })
    .finally(() => {
        console.log('Se cierra la busqueda');
    });
obtenerPokemonPromesas('arcaine')
    .then((pokemon) => {
        console.log(`Si lo encontre: Nombre: ${pokemon.nombre}, Tipo: ${pokemon.tipo}, Habilidad: ${pokemon.habilidad}`);
    })
    .catch((error) => {
        console.log('error ', error);
    })
    .finally(() => {
        console.log('Se cierra la busqueda');
    });