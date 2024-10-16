function sumar() {
  const valor1 = parseInt(document.getElementById("numero1").value);
  const valor2 = parseInt(document.getElementById("numero2").value);

  const suma = valor1 + valor2;

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `Resultado: ${suma}`;
}
function restar() {
  const valor1 = parseInt(document.getElementById("numero1").value);
  const valor2 = parseInt(document.getElementById("numero2").value);

  const resta = valor1 - valor2;

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `Resultado: ${resta}`;
}
function multiplicar() {
  const valor1 = parseInt(document.getElementById("numero1").value);
  const valor2 = parseInt(document.getElementById("numero2").value);

  const multiplica = valor1 * valor2;

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `Resultado: ${multiplica}`;
}
function dividir() {
  const valor1 = parseInt(document.getElementById("numero1").value);
  const valor2 = parseInt(document.getElementById("numero2").value);
  if (valor2 === 0) {
    resultado.innerHTML = `Error al dividir entre 0, ingresa otro número`;
  } else {
    const dividir = valor1 / valor2;
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Resultado: ${dividir}`;
  }
}
