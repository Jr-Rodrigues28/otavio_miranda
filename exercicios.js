const nome = 'Junior';
const sobrenome = 'Rodrigues';
const idade = 41;
const peso = 84;
const alturaEmM = 1.77;
let imc = peso / (alturaEmM * alturaEmM);
let anoNascimento = 2025 - idade;

// console.log(nome, sobrenome, 'tem', idade, 'anos', peso, 'kg tem', 
// alturaEmM, 'seu IMC é de', imc, nome, 'nasceu em', anoNascimento,'.');

console.log(nome + ' ' + sobrenome + ' tem ', idade + ' anos, pesa ' + peso + ' kg tem ' + 
alturaEmM + ' seu IMC é de ' + imc + ' ' + nome + ' nasceu em ' + anoNascimento + '.');

// template strings
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg tem ${alturaEmM} seu IMC é de ${imc} ${nome} nasceu em ${anoNascimento}.`);