// Clases
// es una manera de crear ojetos y manejar la POO (Programación Orientada a Objetos)

// Características
// Sintaxis Clara. Permite crear objetos de una forma más comprensible en comparación de una función de tipo constructor.
// Herencia. Podemos heredar propiedades y métodos de otra clase.
// Métodos. Las clases pueden contener métodos que pueden ser invocados en las instancias de clae.
// Constructor. un Método especial llamado constructor, el cual se ejecutará de manera automática cuando creamos unanueva intancia en clase.

// Sintaxis base de una clase.
class NombreDeLaClase {
    constructor(parametros) {
        // Inicializaciar sus propiedades
    }

    metodo() {
        // Definición de métodos
    }
}

class Persona {
    constructor(nombre, edad, genero, estatura, tieneNovio, estudios) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
        this.estatura = estatura;
        this.tieneNovio = tieneNovio;
        this.estudios = estudios;
    }

    saludar() {
        console.log('Hola, mi nombre es: ' + this.nombre + ' y tengo ' + this.edad + ' años');
    }

    obtenerEstatura() {
        if (this.estatura > 1.6) {
            console.log(this.nombre + ' es de estatura alta');
        } else {
            console.log(this.nombre + ' tiene una estatura baja');
        }
    }

    buscarNovio() {
        if (this.tieneNovio) {
            console.log(this.nombre + ' pronto se va a casar');
        } else {
            console.log(this.nombre + ' bajará tinder');
        }
    }

    mostrarEstudios() {
        for (const tieneEstudios in this.estudios) {
            console.log(`${tieneEstudios}: ${this.estudios[tieneEstudios]}`);
        }
    }
}

// Creando una instancia de esta clase.
const persona1 = new Persona('Gema', 28, 'Femenino', 1.56, true, { primaria: true, secundaria: true, prepa: true, universidad: true, maestria: false });
const persona2 = new Persona('Yadir', 24, 'Femenino', 1.64, false, { primaria: true, secundaria: true, prepa: true, universidad: false, maestria: false });

persona1.saludar();
persona2.saludar();
persona1.obtenerEstatura();
persona2.obtenerEstatura();
persona1.buscarNovio();
persona2.buscarNovio();
persona1.mostrarEstudios();
persona2.mostrarEstudios();