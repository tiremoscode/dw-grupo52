const libro1 = {
    titulo: 'Fábrica de colores.',
    publicacion: 2020,
    tema: 'Ciencia',
    autor: 'Carlos Chimal',
    editorial: 'Fondo de cultura económica',
    leido: true,
    nacional: true

}

const libro2 = {
    titulo: 'Diseñar para un mundo complejo.',
    publicacion: 2013,
    tema: 'Diseño',
    autor: 'John Thackara',
    editorial: 'Designio',
    leido: false,
    nacional: false
    
}

const libro3 = {
    titulo: 'Museo vivo. La creatividad femenina.',
    publicacion: 2008,
    tema: 'Arte y cultura',
    autor: 'Eli Bartra',
    editorial: 'UAM Xochimilco',
    leido: false,
    nacional: true

}

const libro4 = {
    titulo: 'Mondrian',
    publicacion: 2016,
    tema: 'Arte y cultura',
    autor: 'Hajo Düchting',
    editorial: 'Place des Victoires',
    leido: true,
    nacional: false
    
}

console.log(libro2);

libro2.leido = true;

console.log(libro2);

