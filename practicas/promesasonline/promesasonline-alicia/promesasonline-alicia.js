
const personajes = document.getElementById("resultado")

fetch("https://rickandmortyapi.com/api/character")
.then((response)=>response.json())
.then((datos)=>{

    console.log(datos)
    console.log(datos.results)

    datos.results.forEach((elementos)=> {

        const contenedorCreado = document.createElement('div')

        contenedorCreado.innerHTML = `
        
        <center>
        <img src="${elementos.image}">
        <h3>${elementos.name}</h3>
        <li>${elementos.status}</li>
         <li>${elementos.species}</li>
          <li>${elementos.gender}</li>
        </center>
        `
        ;
            personajes.append(contenedorCreado)
        
    });

})

