/*## Tarea de Objetos

- A partir de la rama main, crea una nueva rama para hacer este ejercicio con tu nombre. Ejemplo: feature/js03-celesteblas
- Crear una carpeta en la carpeta practicaS/js03 con tu nombre. Ejemplo. js03-celesteblas.
- Basado en lo que aprendimos de Objetos, vas a crear una aplicación que genere objetos
 de el tema que tu desees. Por ejemplo: futbol, peliculas, series, comidas favoritas, etc.
- Ese objeto deseamos imprimirlo
- Ese objeto deseamos modificar una propiedad, tu eliges cual
- Volver a imprimir el objeto.*/

const color1 = {
    nombre: 'rojo',
    significado: 'Pasion, energía, amor, peligro',
    caracteristicas: 'Se asocia con fuerza y accion',

}

const color2 = {
    nombre: 'azul',
    significado: 'Tranquilidad, confianza, estabilidad, tristeza',
    caracteristicas: 'Representa profesionalidad y fiabilidad',
}

const color3 = {
    nombre: 'blanco',
    significado: 'Pureza, inocencia, limpieza, paz',
    caracteristicas: 'Representa frescura y simplicidad',
}

const color4 = {
    nombre: 'verde',
    significado: 'Naturaleza, crecimiento, frescura, salud',
    caracteristicas: 'Asociado con la naturaleza y la paz',
}

const color5 = {
    nombre: 'rosa',
    significado: 'Amor, dulzura, feminidad, ternura',
    caracteristicas: 'Se usa para simbolizar afecto y cuidado',
}

console.log(color2);
console.log(color5);

color2.significado = 'calma,confianza, sabiduria';

console.log(color2);