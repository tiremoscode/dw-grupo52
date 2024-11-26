document.getElementById('formApi').addEventListener('submit', function (evento) {
    evento.preventDefault(); // Evitar recargar la página

    // Obtener el nombre ingresado, en minúsculas y sin espacios.
    const nombre = document.getElementById('nombre').value.toLowerCase().trim();

    const apiUrl = `https://api.api-onepiece.com/v2/characters/en`;

    // Consultar la API
    fetch(apiUrl)
        .then((respuesta) => {
            if (!respuesta.ok) {
                throw new Error('No se pudo obtener la información');
            }
            return respuesta.json();
        })
        .then((data) => {
            // Buscar el personaje ingresado
            const personaje = data.find(
                (char) => char.name.toLowerCase().includes(nombre)
            );

            if (!personaje) {
                throw new Error('Personaje no encontrado');
            }

            // Mostrar datos del personaje
            document.getElementById('resultado').innerHTML = `
                <h2>Datos del Personaje</h2>
                <p><strong>Nombre:</strong> ${personaje.name}</p>
                <p><strong>Edad:</strong> ${personaje.age || 'Desconocida'}</p>
                <p><strong>Recompensa:</strong> ${personaje.bounty || 'Desconocida'}</p>
                <p><strong>Akuma no Mi:</strong> ${personaje.fruit?.roman_name || 'Ninguna'}</p>
                <p><strong>Tipo de Akuma no Mi:</strong> ${personaje.fruit?.type || 'Ninguna'}</p>
                <p><strong> Descripción de la Akuma no Mi:</strong> ${personaje.fruit?.description || 'No aplica'}</p>
                <p><strong>Rango:</strong> ${personaje.job || 'Desconocido'}</p>`;
        })
        .catch((error) => {
            document.getElementById('resultado').innerHTML = `<p style="color: red;">Hubo un error: ${error.message}</p>`;
        });
});
