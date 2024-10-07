console.log('Seja bem vindo(a)!');

let nome = 'Pedro';
console.log(`Olá ${nome}!`);

let nome = 'Pedro';
alert(`Olá ${nome}!`);

let linguagemFavorita = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(linguagemFavorita);

let valor1 = 5;
let valor2 = 6;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);

let valor1 = 5;
let valor2 = 6;
let resultado = valor1 - valor2;
console.log(`A diferença de ${valor1} e ${valor2} é igual a ${resultado}.`);

let idade = prompt('Por favor me informe sua idade');
if (idade < 18) {
    console.log('Você ainda é menor de idade.');
} else {
    console.log('Você já é maior de idade.');
};

let numero = parseFloat(prompt('Digite um número qualquer.'));
if (numero > 0) {
    console.log(`O número ${numero} é positivo.`);
} else if (numero < 0) {
    console.log(`O número ${numero} é negativo.`);
} else {
    console.log(`O número ${numero} é 0.`);
};

let contador = 1;
while (contador <= 10) {
    alert(`O contador está em ${contador}`);
    contador++;
};

let nota = 10;
if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
};

let numero = Math.random();
console.log(numero);

let numero = parseInt(Math.random() * 10 + 1);
console.log(numero);

let numero = parseInt(Math.random() * 1000 + 1);
console.log(numero);
