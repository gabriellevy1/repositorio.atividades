//Inicializando um vetor vazio
let vetorVazio = [];
vetorVazio[0] = "Teste"; //Adicionando
console.log(vetorVazio[0])

//Criando um vetor/ array e atribuindo valores
//          índice 0   índice 1  índice 2
let turma = ["Miguel", "Ramiro", "Girão"];
turma[3] = "Zé loiro";

turma.push("Levi"); // Adicionando no final
turma.unshift("João"); //Adicionando no início

console.log(turma, "tamanho: ", turma.length);

for (let i = 0; i < turma.length; i++){
    console.log(turma[i]);
}

//Remove o último índice e retorna o valor do índice removido;
console.log(turma.pop()) 
console.log(turma);

//Remover o primeiro índice e retorna o valor do índice removido;
console.log(turma.shift()) 
console.log(turma);