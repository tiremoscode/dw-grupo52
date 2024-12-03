function obtenerInfoPokemon(nameOrId) {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + nameOrId;

    fetch(url)
        .then(respuesta => {
            if (!respuesta.ok) throw new Error('Pokémon no encontrado');
            return respuesta.json();
        })
        .then(data => {
            mostrarResultado(data);
        })
        .catch(error => {
            mostrarError('Hubo un error: ' + error.message);
        });
}

function mostrarResultado(data) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
        <h3>Nombre: ${data.name}</h3>
        <p>Tipos: ${data.types.map(t => t.type.name).join(', ')}</p>
        <img src="${data.sprites.front_default}" alt="${data.name}">
    `;
}

function mostrarError(mensaje) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<p style="color: red;">${mensaje}</p>`;
}

document.getElementById('formulario').addEventListener('submit', function (e) {
    e.preventDefault();

    const parametro = document.getElementById('parametro').value.trim();

    if (!parametro) {
        mostrarError('Por favor, ingresa un nombre o ID de Pokémon.');
        return;
    }

    obtenerInfoPokemon(parametro.toLowerCase());
});