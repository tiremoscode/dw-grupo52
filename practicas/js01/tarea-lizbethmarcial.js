/**Suma y resta */

function calculadora (a, b, operacion) {
    console.log (operacion);
    return a + b;
}
const resultado = calculadora(5, 10, 'suma')
console.log(resultado);


function calculadoraR (a, b, operacion) {
    console.log (operacion);
    return a - b;
}
const resultadoR = calculadoraR(5, 10, 'resta')
console.log(resultadoR);

/**Multiplicación y división con función flecha */

const calculadoraM = (valor1, valor2, operacion) => {
    console.log(operacion);
    return valor1 * valor2;
}
const resultadoM = calculadoraM(9, 8, 'multiplicación');
console.log(resultadoM);

const calculadoraD = (valor3, valor4, operacion) => {
    console.log(operacion);

    return valor3 / valor4;
}
const resultadoD = calculadoraD(30, 2, 'División');
console.log(resultadoD);


