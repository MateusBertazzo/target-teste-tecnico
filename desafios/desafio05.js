// 5) Escreva um programa que inverta os caracteres de um string.


// IMPORTANTE:

// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

// b) Evite usar funções prontas, como, por exemplo, reverse;

function inverteString(string) {
    let invertedStr = '';
    
    for (let i = string.length - 1; i >= 0; i--) {
        invertedStr += string[i];
    }
    
    return invertedStr;
}

const string = "Saudações, mundo!";
const stringInvertida = inverteString(string);
console.log("String original:", string);
console.log("String invertida:", stringInvertida);