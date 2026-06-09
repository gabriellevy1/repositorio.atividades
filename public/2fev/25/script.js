
let form = document.getElementById('id_formulario');


form.addEventListener(('submit'), (e)=>{
    e.preventDefault();
    console.log('Chamou!');

    let nome = document.getElementById('id_nome')
    console.log(nome.value); 

    let idade = document.getElementById('id_idade')
    console.log(idade.value);

    let resultado = document.getElementById('id_resultado'); 
    resultado.innerHTML = `<p>Nome: ${nome} - Idade: ${nome}</p>`;
});

// let nome = document.getElementById('id_nome');
