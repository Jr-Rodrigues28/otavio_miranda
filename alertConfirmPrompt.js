// alert('Com a nossa mesagem!');
// confirm('Junior'); // retorna o valor false ou true

const num1 = prompt('Digite um número: ');
console.log(num1);

const num2 = prompt('Digite outro número: ');
console.log(num2);


// Convertendo para numero sem o parseInt, pasrseFloat ou Number ele concatena e não soma
const resultado = parseInt(num1) + parseInt(num2);


alert('O resultado da soma foi: ' + resultado);
alert(`O resultado da soma foi: ${resultado}`);  // Ternário
console.log(resultado);