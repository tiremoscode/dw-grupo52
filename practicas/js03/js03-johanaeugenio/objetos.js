

const gallina = {
    nombre: "gallina",
    tipo: "ave",
    color: "café",
    salud: "buena",
    alimentacion: "heno",
    habitat: "gallinero",
    poneHuevos: true,
    huevosDiaros: 1,
  };
  


//se imprimen todos los objetos
console.log(gallina)

//   se accede a una propiedad
console.log(gallina.color);
console.log(gallina);

//se modifica la propiedad
gallina.color = "amarillo";
gallina.huevosDiaros = 3;
console.log(gallina);