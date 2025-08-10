// IEEE 754-2008 - precisão de números com casas decimais

let num1 = 10.5789551255547;
let num2 = 2.5;
// se caso tenho a soma de uma String e 5, terá a junção dos valores e não a soma


// num1 += num2; é igual a num1 = num1 + num2 
num1 += num2;
console.log(num1);


// console.log(num1.toString() + num2);
// num1 = num1.toString();
// console.log(num1.toString(2));
// console.log(num1.toFixed(4));
// console.log(Number.isInteger(num1)); // retorna false pq é número de ponto flutuante

let temp = num1 * 'olá';
console.log(temp); // Aqui dá NaN é pq alguma coisa não aconteceu como o esperado
console.log(Number.isNaN(temp)); // fala que sua conta deu errado pq não é um numero * numero




