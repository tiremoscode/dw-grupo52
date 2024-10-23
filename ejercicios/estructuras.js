// Estructuras while y do while.

// Cuando usar un while.
// Cuando no sabes cuántas veces necesitarás ejecutar un bucle


let contador = 0;
while (contador < 5) {
    console.log(contador);
    contador++;
}

// Cuando es útil usar un while.
// Cuando quiero asegurarme de que el código solo se ejecutará si una condición es verdadera desde el inicio.
// Al leer entradas del usuario hasta que ingresé un valor válido.

/*
let entradaUsuario = '';
while (entradaUsuario !== 'exit') {
    // ToDo 
    // entradaUsuario = 
}
    */

// Cuando usar un do while.
// Un do while siempre ejecutará el bloque de código AL MENOS UNA VEZ.
// porque la condición es evaluada después de ejecutar el bloque.

// Cuando necesite que el bloque de código se ejecute almenos una vez
// sin importar si la condición es verdadera o falsa desde el inicio.

let contador2 = 5;
do {
    console.log(contador2);
    contador2++;
} while (contador2 < 5);