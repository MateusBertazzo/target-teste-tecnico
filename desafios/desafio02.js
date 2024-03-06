// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 
// valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, 
// informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

function verificaPertenceFibonacci(numero) {

    // Verifica se o número é negativo
    if (numero < 0) {
        console.log('Por favor, entre com um número maior ou igual a zero');
        return;
    }
    
    let fib = 0;
    let fib1 = 0;
    let fib2 = 1;

    // Verifica se é 0 ou 1
    if (numero === fib1 || numero === fib2) {
        console.log(numero + " pertence à sequência de Fibonacci.");
        return;
    }

    while (fib <= numero) {
        fib = fib1 + fib2;
        fib1 = fib2;
        fib2 = fib;
        
        // Se o numero for encontrado na sequência, exibe uma mensagem que pertence a sequencia
        if (fib === numero) {
            console.log(numero + " pertence à sequência de Fibonacci.");
            return;
        }
    }

    // Se o numero não for encontrado na sequência, exibe uma mensagem
    console.log(numero + " não pertence a sequência de Fibonacci.");
}

//TODO numero teste pode alterar se quiser
const numeroTeste = 13;
verificaPertenceFibonacci(numeroTeste);