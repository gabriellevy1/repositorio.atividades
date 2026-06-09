/* Funções em JavaScript
    Declaração e chamada de funções
*/

//Declaração de função sem retorno - tipo VOID
function mensagem(parametro, paramentro2){
    console.log(`Olá, ${parametro}! Tu é o cara, ${paramentro2}! 
    `);
}

//Função com retorno
function soma(a, b){
    return b + a;
}
//Chamada da função
//mensagem("mundo", "Zé Levi");
//console.log(soma(1, 3));
//mensagem("Ramiro", soma(2, 5));

//Declaração de função na variável
// Expressão de função (função anônima atribuída a uma variável)
let dobro = function(num){
    return num * 2;
}
// Com Arrow Function ()=>{}
let dobroModerno = (num) => {
    return num * 2;
}
// Modo simplificado com Arrow Function
let dobroSimples = num => num * 2;

//console.log(dobro(3));
//console.log(dobroModerno(4));
//console.log(dobroSimples(2));

//Funções de manipulação de dados
console.log("Paulo H. Silva".toUpperCase());
console.log("Paulo H. Silva".toLowerCase());
console.log("Paulo H. Silva".length);
console.log("Paulo H. Silva".indexOf("H"));
console.log("Paulo H. Mendes".includes("Silva"));
console.log("Paulo H. Mendes".slice(6));
console.log("Paulo H. Mendes".replace("Paulo", "Ramiro"));
console.log("Paulo H. Mendes".split(" "));
console.log(" Paulo H. Mendes ".trim());
//Funções Matemáticas
// Constantes
console.log(Math.PI);

//Continue seus exemplos a partir da página 31 e os componentes Date da página 32