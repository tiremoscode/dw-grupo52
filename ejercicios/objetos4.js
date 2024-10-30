// Accediendo a propiedades de un objeto


const vehiculoJennifer = new Object();
vehiculoJennifer.color = "Rojo";
vehiculoJennifer.modelo = 2024;
vehiculoJennifer.marca = "Nissan";
vehiculoJennifer.transmision = "Autómatico";
vehiculoJennifer.puertas = 4;
vehiculoJennifer.tamano = 'Mediano';
vehiculoJennifer.polarizado = true;
vehiculoJennifer.estaChocado = false;

// Notación de punto
console.log(vehiculoJennifer.modelo);

// Notación de Corchetes
console.log(vehiculoJennifer["color"]);

// Modificar Propiedades
console.log(vehiculoJennifer);

vehiculoJennifer.marca = "Volkswagen";

console.log(vehiculoJennifer);