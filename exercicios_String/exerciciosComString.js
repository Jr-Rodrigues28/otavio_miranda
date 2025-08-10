// const nome = prompt('Digite seu nome completo:');

//     let resultado = '';
//     resultado += `Seu nome é: <strong>${nome}</strong><br />`;
//     resultado += `Seu nome tem <strong>${nome.length}</strong> letras <br />`;
//     resultado += `A segunda letra do seu nome é: <strong>${nome[1]}</strong><br />`;
//     resultado += `Qual o primeiro índice da letra "a" no seu nome? <strong>${nome.indexOf('a')}</strong><br />`;
//     resultado += `Qual o último índice da letra "a" no seu nome? <strong>${nome.lastIndexOf('a')}</strong><br />`;
//     resultado += `As últimas 3 letras do seu nome são: <strong>${nome.slice(-3)}</strong><br />`;
//     resultado += `As palavras do seu nome são: <strong>${nome.split(' ').join(', ')}</strong><br />`;
//     resultado += `Seu nome com letras maiúsculas: <strong>${nome.toUpperCase()}</strong><br />`;
//     resultado += `Seu nome com letras minúsculas: <strong>${nome.toLowerCase()}</strong><br />`;

//     document.body.innerHTML = resultado;


const nome = prompt('Digite seu nome completo:');
                // esse += é para atribuir e concatenar ao mesmo tempo 
document.body.innerHTML += `Seu nome é: <strong>${nome}</strong><br />`;
document.body.innerHTML += `Seu nome tem <strong>${nome.length}</strong> letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: <strong>${nome[1]}</strong><br />`;
document.body.innerHTML += `Qual o primeiro índice da letra LETRA a no seu nome? <strong>${nome.indexOf('a')}</strong><br />`;
document.body.innerHTML += `Qual o último indice da letra LETRA a no seu nome? <strong>${nome.lastIndexOf('a')}</strong><br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: <strong>${nome.slice(-3)}</strong><br />`; // é tipo um array
document.body.innerHTML += `As palavras do seu nome são: <strong>${nome.split(' ')}</strong><br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: <strong>/${nome.toUpperCase()}</strong><br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: <strong>${nome.toLowerCase()}</strong><br />`;