function calcular() {
    const calcula = document.querySelector('#calcular');

    calcula.addEventListener('click', () => {
        const valor1 = parseInt(document.getElementById('numero1').value);
        const valor2 = parseInt(document.getElementById('numero2').value);
        const operacion = document.querySelector('#operaciones').value;

        let result;

        if (operacion === '+') {
            result = valor1 + valor2;
        } else if (operacion === '-') {
            result = valor1 - valor2;
        } else if (operacion === '*') {
            result = valor1 * valor2;
        } else if (operacion === '/') {
            result = valor1 / valor2;
        }

        const resultado = document.getElementById('resultado');
        resultado.innerHTML = `Resultado: ${result}`;

    });


}
