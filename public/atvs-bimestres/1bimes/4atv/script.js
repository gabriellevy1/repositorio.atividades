let form = document.getElementById("id_form");

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    let idade = document.getElementById("id_idade").value;
    let classificacao = "";
    let renovacao = "";

    if(idade < 18){
        classificacao = "Inapto para inicio das aulas."
    }

    else if(idade >= 18){
        classificacao = "Apto para começar nossas aulas."
    }

    if (idade >= 18 && idade <= 50) {
        renovacao = "Renovação da CNH a cada 10 anos.";
    } 

    else if (idade >= 51 && idade <= 69) {
        renovacao = "Renovação da CNH a cada 5 anos.";
    } 

    else if(idade >= 70){
        renovacao = "Renovação da CNH a cada 3 anos.";
    }

    let resultado = document.getElementById('id_resultado');
    resultado.innerHTML = `
        <p>${classificacao}</p> 
        <p>${renovacao}</p>
    `
})
