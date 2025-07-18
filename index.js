const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(resultadoTriplicado);

// assim verifica a soma e depois o tipo: no caso number
console.log(typeof (primeiroNumero + segundoNumero));

// assim ele verifica o tipo e depois soma: string10 e não pega a variavel do segundoNumero
console.log(typeof primeiroNumero + segundoNumero);

