let form = document.getElementById("form");

let fila_espera = [];

form.addEventListener("submit", (e) => {

    e.preventDefault();

    let nome = document.getElementById("id_nome").value;
    let radioSelecionado = document.querySelector('input[name="tipo_atendimento"]:checked').value;

    adicionar(nome, radioSelecionado);
    console.log(fila_espera);
});

function listar(){
    let resultado = document.getElementById("resultado_espera");
    resultado.innerHTML = "";

    for(let i = 0; i < fila_espera.length; i++){
        resultado.innerHTML += `
            <div>
                <p>Fila: ${i} - ${fila_espera[i]}</p>
                <input type="button" value="Editar" onclick="editarNome(${i})">
                <input type="button" value="Excluir" onclick="excluirNome(${i})">
            </div>
        `;
    }
}

document.getElementById("consultar").addEventListener("click", listar);

function atender(){
    fila_espera.shift();
    console.log(fila_espera);
}

function nao_esperou(){
    fila_espera.pop();
    console.log(fila_espera);
}

function adicionar(nome, prioritario){

    if(prioritario == "prioritario"){
        fila_espera.unshift(nome);
    } else{
        fila_espera.push(nome);
    }

}

function editarNome(fila){
    console.log(fila);
    fila_espera[fila] = prompt('Digite o novo nome: ');
    listar();
}

function excluirNome(fila){
    console.log(fila);
    fila_espera.splice(fila, 1);
    listar();
}