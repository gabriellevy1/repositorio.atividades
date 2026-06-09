let vetorVazio = [];
vetorVazio[0] = "Teste";
console.log(vetorVazio);

let turma = ["Miguel", "Ramiro", "Girão"]; // ARRAY
turma[0] = "Zé"; // ADICIONADANDO NA UNHA, MAIS SIMPLES
turma.push("Levy"); // "APPEND, ADICIONA NO FINAL DO ARRAY"
turma.unshift("João"); // "PREPEND, ADICIONA NO COMEÇO DO ARRAY"

console.log(turma, "tamanho: ", turma.length);

for(let i = 0; i < turma.length; i++){
    console.log(turma[i]);
};

// // REMOVE O ÚLTIMO DO ARRAY
console.log(turma.pop());
console.log(turma);

// // REMOVE O PRIMEIRO DO ARRAY
console.log(turma.shift());
console.log(turma);