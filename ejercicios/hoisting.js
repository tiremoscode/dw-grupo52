// var
// let
// const

console.log(ejemplo1);
var ejemplo1 = 10;
console.log(ejemplo1);

var ejemplo2;
console.log(ejemplo2);

// console.log(ejemplo3);
let ejemplo3;

// console.log(pi);
const pi = 3.14;

// Diferencias entre var, let y const
// var tienen alcance de función o global

var miVariableVar = 10;
var miVariableVar = 20;

let miVariableLet = 10;

const miVariableConst = 30;

function unaFuncion() {
    miVariableVar = 10;
    miVariableLet = 20;
    miVariableConst = 40;
}

console.log('Var ' + miVariableVar);
console.log('Let ' + miVariableLet);
console.log('Const ' + miVariableConst);

var valorInicialVar;
let valorInicialLet;
const valorInicialConst = 'tener forzosamente un valor inicial';
