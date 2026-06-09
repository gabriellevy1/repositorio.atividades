let nome = prompt('Digite seu nome completo: ');
let email = prompt('DIgite seu email: ');
let dataNascimento = parseInt(prompt('Digite sua data de nascimento: '));
let altura = parseFloat(prompt('Digite sua altura: '));
let matricula = parseInt(prompt('Digite o número da sua matrícula: '));

alert('Dados: ' + nome + email + dataNascimento + altura + matricula);

console.log('Nome: ' + nome  + ' - tipo ' + typeof nome  + ' E-mail: ' + email + ' - tipo ' + typeof email + ' Data de nascimento: ' + dataNascimento + ' - tipo ' + typeof dataNascimento + ' Altura: ' + altura + ' - tipo ' + typeof altura + ' Matrícula: ' + matricula + ' - tipo ' + typeof matricula)

document.write(`<p> Meu nome é ${nome} </p> <br> <p> Email: ${email} </p> <br> <p> Data de Nascimento: ${dataNascimento} </p> <br> Altura: ${altura} <p> Matrícula: ${matricula} </p> <br>`)