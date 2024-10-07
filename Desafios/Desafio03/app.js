let contador = 1;
while (contador <= 10) {
    alert(`O contador está em ${contador}`);
    contador++;
};

let contador = 10;
while (contador >= 0) {
    alert(`O contador está em ${contador}`);
    contador--;
};

let numeroInicial = prompt('Me diga um número inicial maior que 0');
while (numeroInicial > 0) {
    console.log(numeroInicial);
    numeroInicial--;
};

let numeroInicial = prompt('Me diga um número inicial maior que 0');
let contador = 0;
while (contador <= numeroInicial) {
    console.log(contador);
    contador++;
};
