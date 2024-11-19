const obtenerPokemonPromesas = (nombrePokemon) => {

    return new Promise((resolve, reject) => {
        // Simular una solicitu asincrona para obtener datos del pokemón
        const pokemonDatabase = {
            "pikachu": {
                "nombre": "Pikachu",
                "tipo": "Electrico",
                "habilidad": "Electricidad"
            },
            "charmander": {
                nombre: "Charmander",
                "tipo": "Fuego",
                "habilidad": "Lanza Llamas"
            },
            "ditto": {
                nombre: "ditto",
                "tipo": "Normal",
                "habilidad": "Flexibilidad"
            },
            "caterpie": {
                nombre: "caterpie",
                "tipo": "bicho",
                "habilidad": "Polvo escudo"
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
        console.log(`si lo encontre: Nombre: ${pokemon.nombre}, Tipo: ${pokemon.tipo}, Habilidad: ${pokemon.habilidad}` );
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

    //Pokemones agregados 
obtenerPokemonPromesas('Pidgeotto') //no se encuentra en la base de datos
.then((pokemon) => {
    console.log(`si lo encontre: Nombre: ${pokemon.nombre}, Tipo: ${pokemon.tipo}, Habilidad: ${pokemon.habilidad}` );
})
.catch((error) => {
    console.log('error ', error);
})
.finally(() => {
    console.log('Se cierra la busqueda');
});

obtenerPokemonPromesas('Raichu') //no se encuentra en la base de datos
.then((pokemon) => {
    console.log(`si lo encontre: Nombre: ${pokemon.nombre}, Tipo: ${pokemon.tipo}, Habilidad: ${pokemon.habilidad}` );
})
.catch((error) => {
    console.log('error ', error);
})
.finally(() => {
    console.log('Se cierra la busqueda');
});

obtenerPokemonPromesas('caterpie') //si se encuentra en la base de datos
.then((pokemon) => {
    console.log(`si lo encontre: Nombre: ${pokemon.nombre}, Tipo: ${pokemon.tipo}, Habilidad: ${pokemon.habilidad}` );
})
.catch((error) => {
    console.log('error ', error);
})
.finally(() => {
    console.log('Se cierra la busqueda');
});

obtenerPokemonPromesas('ditto') //si se encuentra en la base de datos
.then((pokemon) => {
    console.log(`si lo encontre: Nombre: ${pokemon.nombre}, Tipo: ${pokemon.tipo}, Habilidad: ${pokemon.habilidad}` );
})
.catch((error) => {
    console.log('error ', error);
})
.finally(() => {
    console.log('Se cierra la busqueda');
});