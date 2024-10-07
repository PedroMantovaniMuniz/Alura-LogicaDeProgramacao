alert('Boas vindas ao jogo do número secreto'); //Exibir mensagem
let numeroMaximo = 3569;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentantivas = 0; //Variável
console.log('Valor do chute: ', chute);
console.log('Resultado da comparação: ', chute == numeroSecreto);
while (chute != numeroSecreto) {  //Repete até ser falso
    chute = prompt(`Digite um número entre 1 e ${numeroMaximo}`); //Exibir caixa de texto
    tentantivas++;
    if (chute == numeroSecreto) { //Comparação de variáveis
        break; //Quebra o laço de repetição
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        };
    };
};
let palavraTentativa = tentantivas > 1 ? 'tentativas' : 'tentativa'; //Operadores ternários
alert(`Isso aí, você descobriu o número secreto (${numeroSecreto}) com ${tentantivas} ${palavraTentativa}`);
