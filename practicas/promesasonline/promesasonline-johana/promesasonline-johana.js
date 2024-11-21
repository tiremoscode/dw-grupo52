document.getElementById('formApi').addEventListener('submit', function (infopokemon) {
    infopokemon.preventDefault();//evitar que la pagina se recargue para no perder los datos
    // Obtener el nombre ingresado, en minúsculas y sin espacios.
    const nombre = document.getElementById('nombre').value.toLowerCase().trim();

    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${nombre}`;

    // Consultar la API.
    fetch(apiUrl)
        .then((respuesta) => respuesta.json())
        .then((data) => {
            // Mostrar datos del Pokémon
            document.getElementById('resultado').innerHTML = `
                <h2>Datos del Personaje</h2>
                <p><strong>Nombre:</strong> ${data.name}</p>
                <p><strong>Tipo:</strong> ${data.types[0].type.name}</p>
                <p><strong>ID:</strong> ${data.id}</p>
                <p><strong>Altura:</strong> ${data.height} decímetros</p>
                <p><strong>Peso:</strong> ${data.weight} hectogramos</p>
                <p><strong>Habilidades:</strong> ${data.abilities.map(ability => ability.ability.name).join(', ')}</p>
                <p><strong>HP:</strong> ${data.stats[0].base_stat}</p>
                <p><strong>Attack:</strong> ${data.stats[1].base_stat}</p>
                <p><strong>Defense:</strong> ${data.stats[2].base_stat}</p>
                <p><strong>Speed:</strong> ${data.stats[5].base_stat}</p>
                <img src="${data.sprites.front_default}" alt="${data.name}" />
            `;
        })
        .catch((error) => {
            document.getElementById('resultado').innerHTML = `<p style="color: red;">Hubo un error: ${error.message}</p>`;
        });
});
