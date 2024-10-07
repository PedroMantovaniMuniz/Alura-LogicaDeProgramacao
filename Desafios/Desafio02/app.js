let diaDaSemana = prompt('Em que dia da semana estamos?');
if (diaDaSemana == 'Sábado') {
    alert('Bom final de semana!');
} else {
    if (diaDaSemana == 'Domingo') {
        alert('Bom final de semana!');
    } else {
        alert('Boa semana!');
    }
};

let numero = prompt('Digite um número');
if (numero >= 0) {
    alert('O número é positivo');
} else {
    alert('O número é negativo');
};

let pontuacao = 250;
if (pontuacao >= 100) {
    alert('Parabéns! Você venceu');
} else {
    alert('Tente novamente para ganhar');
};

let saldo = 2550;
alert('Você tem R$' + saldo + ' de saldo na sua conta');

let nome = prompt('Qual é o seu nome?');
alert('Seja muito bem vindo(a)' + nome);
