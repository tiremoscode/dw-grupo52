
function postreElegido(nombrePostre) {
    const postre = 'Elegi ' + nombrePostre + ' para ver la película';
    console.log(postre);
    const resultado = document.getElementById('postreElegido');
    resultado.innerHTML = postre;
}

function escogerPostre() {
    const peliculaSeleccionada = document.getElementById('nombrePelicula').value;
    console.log(peliculaSeleccionada);

    switch (peliculaSeleccionada) {
        case 'Titanic':
            postreElegido('Hot Cakes');
            break;
        case 'Ganar o morir':
            postreElegido('Galletas y Café');
            break;
        case 'La Sustancia':
            postreElegido('Cervezas y Alitas');
            break;
        case 'El planeta del tesoro':
            postreElegido('Paleta Payaso');
            break;
        case 'Sangre por sangre':
            postreElegido('Papas con mucho chamoy');
            break;
        default:
            postreElegido('Palomitas y Nachos');
            break;
    }
}