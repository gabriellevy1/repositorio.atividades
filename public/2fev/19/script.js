let nome = prompt('Digite seu nome completo: ');

let numero_puro = prompt('Digite a sua matrícula: ');
let numeroConvertido = parseInt(prompt('DIgite um número para ser convertido: '));

console.log('Nome: ' + nome);
console.log('1º Número: ' + numero_puro + ' - Tipo desse número: ' + typeof numero_puro);
console.log('2º Número: ' + numeroConvertido + ' - Tipo desse número: ' + typeof numeroConvertido);

console.log(`Meu nome é: ${nome}\n 1º Número: ${numero_puro} e o tipo dele é ${typeof numero_puro} 2º Numero: ${numeroConvertido} e o tipo dele é ${numeroConvertido}`
)