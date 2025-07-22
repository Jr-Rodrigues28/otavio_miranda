// Diferença enter var e let
// Var deixa redeclarar como no exemplo embaixo já a let não
// ECMAScript - quem normaliza o javaScript
var nome ='Junior';
var nome = 'Rodrigues';

const num1 = 20;
const num2 = 60;

let nomeAluno; // undefined - utilizamos o null
let sobrenomeAluno = null; // Quando não aponta pra lugar nenhum. 
                           //Ex: um usuário quer colocar a cor de fundo de tela azul e depois tira, logo volta para null
console.log(nome);
console.log(typeof num1, num1); // Aparece o tipo e o valor.
console.log(typeof nomeAluno, nomeAluno);
console.log(typeof null, null);
console.log(typeof sobrenomeAluno, sobrenomeAluno);

// null não é um objeto, na verdade é um bug do javaScript
// Torna - te quem tú és = seja quem voce é

// https://www.youtube.com/watch?v=98vwrBShgeU  - Clovis de barros filho

// se voce atrela sua falicidade a coisas que são pereciveis, voce fica triste quando ela desaparecer