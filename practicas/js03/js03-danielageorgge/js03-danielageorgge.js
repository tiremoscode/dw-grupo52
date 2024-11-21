const grupom1 = {
    nombre: 'Arctic Monkeys',
    genero: 'Rock indie',
    año: 2002,
    pais: 'Reino Unido',
    vocalista: 'Alex Turner',
    grammys: false,
}

const grupom2 = {
    nombre: 'Coldplay',
    genero: 'Rock alternativo',
    año: 1997,
    pais: 'Reino Unido',
    vocalista: 'Chris Martin',
    grammys: true,
}

const grupom3 = {
    nombre: 'Guns N Roses',
    genero: 'Hard Rock',
    año: 1985,
    pais: 'Estados Unidos',
    vocalista: 'Axl Rose',
    grammys: false,
}

//Se imprime un objeto
console.log(grupom1);

//Acceder a una propiedad
console.log(grupom1 ["genero"]);

//Modificar una propiedad
console.log(grupom1);
grupom1.genero = 'Rock clásico';

//Volver a imprimir el objeto 
console.log(grupom1);



