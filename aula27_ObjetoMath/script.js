            // a função prompt sempre retorna string
const numero = Number(prompt('Digite seu número: ')); // outra forma de converter para número o prompt igual a de baixo
// let numero = prompt('Digite um número:');
// numero = Number(numero); // converte o prompt para número

const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');


numeroTitulo.innerHTML = numero;

texto.innerHTML = ''; // zero o texto que está lá no html
texto.innerHTML += `<p>Raiz quadrada: <strong>${numero ** 0.5}</strong>.</p>`;
texto.innerHTML += `<p><strong>${numero}</strong> é inteiro: <strong>${Number.isInteger(numero)}</strong>.</p>`;
texto.innerHTML += `<p>É NaN: <strong>${Number.isNaN(numero)}</strong>.</p>`;  // caso ele faça a conta ele dá false se não tiver nada ele é true
texto.innerHTML += `<p>Arredonda para baixo (Math.floor(num1); // arredonda para baixo o número ele tirou a casa decimais e só deixou o 9): <strong>${Math.floor(numero)}</strong>.</p>`;
texto.innerHTML += `<p>Arredonda para cima (Math.ceil(num1); // arredonda para cima o número ele vai para o número mais próximo no caso o 10): <strong>${Math.ceil(numero)}</strong>.</p>`;
texto.innerHTML += `<p>Arredonda automaticamente (tipo um array e ele arredonda automaticamente, tipo 9.49 para baixo e 9.50 para cima): <strong>${Math.round(numero)}</strong>.</p>`
texto.innerHTML += `<p>Com duas casas decimais: <strong>${numero.toFixed(2)}</strong>.</p>`;
