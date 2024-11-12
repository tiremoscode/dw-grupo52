const lenguaje1 = {
    nombre: 'Python',
    lanzamiento: 1991,
    paradigma: 'Multiparadigma',
    creador: 'Guido van Rossum',
    usoPrincipal: 'Desarrollo web, ciencia de datos, inteligencia artificial',
    popularidad: true,
    orientadoWeb: true
}

const lenguaje2 = {
    nombre: 'JavaScript',
    lanzamiento: 1995,
    paradigma: 'Multiparadigma',
    creador: 'Brendan Eich',
    usoPrincipal: 'Desarrollo web, aplicaciones interactivas',
    popularidad: true,
    orientadoWeb: true
}

const lenguaje3 = {
    nombre: 'Java',
    lanzamiento: 1995,
    paradigma: 'Orientado a objetos',
    creador: 'James Gosling',
    usoPrincipal: 'Aplicaciones empresariales, Android',
    popularidad: true,
    orientadoWeb: false
}

const lenguaje4 = {
    nombre: 'C++',
    lanzamiento: 1985,
    paradigma: 'Multiparadigma',
    creador: 'Bjarne Stroustrup',
    usoPrincipal: 'Desarrollo de sistemas, videojuegos',
    popularidad: true,
    orientadoWeb: false
}

// Se imprimen todos los objetos
console.log(lenguaje1);
console.log(lenguaje2);
console.log(lenguaje3);
console.log(lenguaje4);

// Se accede a una propiedad
console.log(lenguaje2.nombre); // Muestra el nombre del lenguaje2
console.log(lenguaje2);

// Se modifica la propiedad
lenguaje2.popularidad = false;
lenguaje2.nuevaCaracteristica = 'Tipado dinámico'; // Agrega una nueva propiedad
console.log(lenguaje2);
console.log(lenguaje2.nuevaCaracteristica);

