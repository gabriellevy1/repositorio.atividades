// let a = 10;
// let b = 10;

// // pré-incremento
// console.log(++a); 

// // pós-incremento
// console.log(b++); 
// console.log(b)

// let c = 10;
// c = b;
// console.log(c);

let a = 5;
let b = "5";

console.log(a == b)
console.log(a === b)

console.log(a != b)
console.log(a !== b)

/* Operadores de Comparação no JavaScript
Operador | Significado
---------+----------------------
    <    | Menor que
---------+----------------------
    >    | Maior que 
---------+----------------------
   <=    | Menor ou igual que
---------+----------------------
   >=    | Maior ou igual que
---------+----------------------
   ==    | Igual ao (compara valor)
---------+----------------------
   !=    | Diferente de

   ===  | Estritamente igual (compara tipo e valor)
*/

// let eleitor = prompt('Digite sua idade: ')
//     if (eleitor >= 16 && eleitor <= 80){
//         console.log('Pode votar!')
//     }

//     else{
//         console.log('Não pode votar!')
//     }

let aluno = Number(prompt('Auto - Escola | Digite sua idade: '));
    if(aluno >= 18){
        alert('Pode começar a fazer as aulas!')
        console.log('Pode começar a fazer as aulas!')
    }

    else{
        alert('Não pode comecar as aulas!')
        console.log('Não pode começar as aulas!')
    }