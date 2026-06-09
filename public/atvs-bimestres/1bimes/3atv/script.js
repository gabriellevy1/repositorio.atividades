let form = document.getElementById('id_formulario');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    let nome = document.getElementById('id_nome').value;
    let idade = document.getElementById('id_idade').value;

    let altura = parseFloat(document.getElementById('id_altura').value.replace(',', '.'));
    let peso = parseFloat(document.getElementById('id_peso').value.replace(',', '.'));

    let imc = peso / (altura * altura);
    let classificacao = '';

    if(imc < 18.5){
        classificacao = 'Abaixo do peso normal.'
    }

    else if(imc < 25 ){
        classificacao = 'Peso normal'
    }

    else if(imc < 30 ){
        classificacao = 'Excesso de peso'
    }

    else if(imc < 35 ){
        classificacao = 'Obesidade classe 1'
    }

     else if(imc < 40 ){
        classificacao = 'Obesidade classe 2'
    }

    else if(imc > 40 ){
        classificacao = 'Obesidade classe 3'
    }

    let resultado = document.getElementById('id_resultado')
    resultado.innerHTML = `
        <p>Olá, <strong>${nome}</strong></p>
        <p>Sua idade: <strong>${idade}</strong></p>
        <p>Resultado de IMC <strong>${imc.toFixed(1)}</strong></p>
        <p>Sua classificação: <strong>${classificacao}</strong></p>
    `
})