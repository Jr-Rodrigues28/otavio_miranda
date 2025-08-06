let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

// Salvo o valor de A no varATemp
const varATemp = varA;
varA = varB;
varB = varC;
varC = varATemp;

console.log(varA, varB, varC);


// Maneira mais moderna de se fazer o exercicio a cima
//                     1     2     3    - tb poderia ser número
[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);
