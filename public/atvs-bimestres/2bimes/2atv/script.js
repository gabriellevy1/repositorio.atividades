let form = document.getElementById("id_formulario");

form.addEventListener("submit", evento => {
    evento.preventDefault();

    let nome = document.getElementById("id_nome").value;
    let tamanho = document.querySelector('input[name="tamanho"]:checked').value;
    let massa = document.getElementById("id_massa").value
    let endereco = document.getElementById("id_endereco").value
     
    let ingrediente = document.querySelectorAll('input[name="ingredientes"]');
    let ingrediente_selecionados = "";
    for(let i = 0; i < ingrediente.length; i++){
        console.log(ingrediente[i]);
        if(ingrediente[i].checked){
            ingrediente_selecionados += ` ${ingrediente[i].value} `;
        }
        // checks_selecionados += checkbox[i].checked
    }

    alert(" \n Nome: "+ nome + "\n Ingredientes: " + ingrediente_selecionados + " \n Tamanho: " + tamanho + "\n Massa: " + massa + " \n Endereço: " + endereco)

    let bloco = document.createElement("p");
    bloco.setAttribute("class", "caixa");
    bloco.innerHTML = 
    `Nome: ${nome} |
    Ingredientes: ${ingrediente_selecionados} |
    Tamanho: ${tamanho}  |
    Massa: ${massa} |
    Endereço: ${endereco}`;
    document.body.appendChild(bloco);
});