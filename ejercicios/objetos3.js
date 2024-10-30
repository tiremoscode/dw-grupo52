const alumna1 = {
    nombre: 'Celeste Venecia Blas Garcia',
    edad: 22,
    estadoRepublica: 'Puebla',
    profesion: 'Emprendedora',
    esSoltera: false,
    comidasFavoritas: {
        'hamburguesas': true,
        'pizza': true,
        'mole_de_olla': true,
    }
}

const alumna1igual = {
    nombre: 'Celeste Venecia Blas Garcia',
    edad: 22,
    estadoRepublica: 'Puebla',
    profesion: 'Emprendedora',
    esSoltera: false,
    comidasFavoritas: {
        'hamburguesas': true,
        'pizza': true,
        'mole_de_olla': true,
    }
}

const alumna2igual = {
    nombre: 'Celeste Venecia Blas Garcia',
    edad: 22,
    estadoRepublica: 'Puebla',
    profesion: 'Emprendedora',
    esSoltera: false,
    comidasFavoritas: {
        'hamburguesas': true,
        'pizza': true,
        'mole_de_olla': true,
    }
}

const alumna2 = {
    nombre: 'Lizbeth Guadalupe Marcial Blas',
    edad: 30,
    estadoRepublica: 'Ciudad de México',
    profesion: 'Amá de casa',
    esSoltera: false,
    comidasFavoritas: {
        'hamburguesas': true,
        'pizza': true,
        'mole_de_olla': false
    }
}

function sonIguales(obj1, obj2) {
    const claves1 = Object.keys(obj1);
    const claves2 = Object.keys(obj2);

    // Comparar cada valor y clave si tienen el mismo numero de claves.
    if (claves1.length !== claves2.length) {
        return false;
    }

    // Comparar cada clave y valor
    for (let clave of claves1) {
        // Comprobar si la clave existe en el segundo objeto
        if (!claves2.includes(clave)) {
            return false;
        }

        // Comprobar si los valores son objetos
        if (typeof obj1[clave] === 'object' && typeof obj2[clave] === 'object') {
            // Llamar recursivamente a la función creada
            if (!sonIguales(obj1[clave], obj2[clave])) {
                return false;
            }
        } else {
            // Comparar cada valor primitivo
            if (obj1[clave] !== obj2[clave]) {
                return false;
            }
        }
    }

    return true; // Que todas las comparaciones de mis 2 objetos sean iguales.
};

console.log(sonIguales(alumna1igual, alumna2igual));