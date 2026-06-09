let form = document.getElementById("form");

let fila_espera = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let nome = document.getElementById("id_nome").value;

    fila_espera.push(nome);
    console.log(fila_espera);
});

function adicionar(nome_parametro){
    fila_espera.push(nome_parametro);
};

function listar(){
    for(let i = 0; i < fila_espera.length; i++){
        resultado_espera += `
        Número: ${i} - Nome: ${fila_espera[i]} </br>`;
    };
};

function atender(){
    fila_espera.shift();
};