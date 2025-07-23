// + faz adição / concatenação
// NaN - Not a number

const num1 = 5; //'5'; no caso o resultado seria 510
const num2 = 2;
const num3 = 10;
console.log(num1 + num2);
console.log(num1 + num2 * num3);
console.log((num1 + num2) * num3);

let contador = 1;
contador++; // o valor dele + 2
contador++; // o valor dele + 3
contador++; // o valor dele + 4
contador++; // o valor dele + 5
console.log(contador);

let contador1 = 10;
--contador1; // o valor dela - 9
--contador1; // o valor dele - 8 
--contador1; // o valor dele - 7 
--contador1; // o valor dele - 6
console.log(contador1);

// parseInt(inteiro), parseFloat(decimais)

const num4 = 10;
const num5 = parseInt('5.2');
console.log(num4 + num5);
console.log(typeof num2);

const num7 = 10;
const num6 = parseFloat('5.2');
console.log(num7 + num6);
console.log(typeof num6);

const num8 = 10;
const num9 = Number('5');
console.log(num8 + num9);
console.log(typeof num6);