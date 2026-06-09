let form = document.getElementById("id_formulario");

form.addEventListener("submit", evento => {
    evento.preventDefault();

    let nome = document.getElementById("id_nome").value;
    let email = document.getElementById("id_email").value;
    let idade = document.getElementById("id_idade").value;
    let radio = document.querySelector('input[name="radio_s"]:checked').value;
     
    let checkbox = document.querySelectorAll('input[name="checkbox_tech"]');
    let checks_selecionados = "";
    for(let i = 0; i < checkbox.length; i++){
        console.log(checkbox[i]);
        if(checkbox[i].checked){
            checks_selecionados += ` ${checkbox[i].value} `;
        }
        // checks_selecionados += checkbox[i].checked
    }
    
    console.log(checks_selecionados)
    // let checkbox = document.querySelectorAll('input[name="checkbox_tech"]:checked');

    // console.log(checkbox);

    // for(let i = 0; i <= )
    
    let bloco = document.createElement("p");
    bloco.setAttribute("class", "caixa");
    bloco.innerHTML = 
    `Nome: ${nome} <br> Email: ${email} <br> Idade: ${idade} <br> Gênero:${radio} <br> Tecnologia: ${checks_selecionados} <br>`;
    document.body.appendChild(bloco);
});