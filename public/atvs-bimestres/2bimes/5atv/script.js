document.addEventListener("DOMContentLoaded", evento => {

    let texto = document.createElement("h3");

    let caixa1 = document.createElement("div");
    let caixa2 = document.createElement("div");
    let caixa3 = document.createElement("div");
    let caixa4 = document.createElement("div");
    let caixa5 = document.createElement("div");
    let caixa6 = document.createElement("div");
    let caixa7 = document.createElement("div");
    let caixa8 = document.createElement("div");
    let caixa9 = document.createElement("div");
    let caixa10 = document.createElement("div");

    let resultado = document.createElement("div");

    let linhaCaixas = document.createElement("div");

    let caixaCorreta = Math.floor(Math.random() * 10) + 1
    let tentativas = 3

    texto.textContent = "Boa Sorte!";
    texto.style.margin = "18px";

    caixa1.textContent = "1";
    caixa2.textContent = "2";
    caixa3.textContent = "3";
    caixa4.textContent = "4";
    caixa5.textContent = "5";
    caixa6.textContent = "6";
    caixa7.textContent = "7";
    caixa8.textContent = "8";
    caixa9.textContent = "9";
    caixa10.textContent = "10";

    linhaCaixas.style.display = "flex";
    linhaCaixas.style.flexDirection = "row";
    linhaCaixas.style.gap = "10px";

    function jogar(caixa, numero){
        caixa.addEventListener("click", () => {
            
            if(tentativas <= 0){
                return;
            }

            if(numero === caixaCorreta){

                caixa.style.backgroundColor = "green";
                resultado.textContent = "Parabéns! Você acertou!";
                tentativas = 0;

            } else{
                caixa.style.backgroundColor = "red";
                tentativas--;

                if(tentativas > 0){
                    resultado.textContent = `Errado! Restam ${tentativas} chances`;
                }
                
                else{
                    resultado.textContent = `Você perdeu! A caixa correta era ${caixaCorreta}`;
                };
            };
        });
    };

    jogar(caixa1, 1);
    jogar(caixa2, 2);
    jogar(caixa3, 3);
    jogar(caixa4, 4);
    jogar(caixa5, 5);
    jogar(caixa6, 6);
    jogar(caixa7, 7);
    jogar(caixa8, 8);
    jogar(caixa9, 9);
    jogar(caixa10, 10);


    function estilizar(caixa){
        caixa.style.backgroundColor = "white";
        caixa.style.width = "30px";
        caixa.style.height = "30px";
        caixa.style.margin = "4px";
        caixa.style.display = "flex";
        caixa.style.justifyContent = "center";
        caixa.style.alignItems = "center";
        caixa.style.border = "1px solid black";
    };

    estilizar(caixa1);
    estilizar(caixa2);
    estilizar(caixa3);
    estilizar(caixa4);
    estilizar(caixa5);
    estilizar(caixa6);
    estilizar(caixa7);
    estilizar(caixa8);
    estilizar(caixa9);
    estilizar(caixa10);

    linhaCaixas.append(caixa1);
    linhaCaixas.append(caixa2);
    linhaCaixas.append(caixa3);
    linhaCaixas.append(caixa4);
    linhaCaixas.append(caixa5);
    linhaCaixas.append(caixa6);
    linhaCaixas.append(caixa7);
    linhaCaixas.append(caixa8);
    linhaCaixas.append(caixa9);
    linhaCaixas.append(caixa10);

    document.body.style.display = "flex";
    document.body.style.flexDirection = "column";
    document.body.style.justifyContent = "center";
    document.body.style.alignItems = "center";

    resultado.style.fontSize = "20px";
    resultado.style.marginTop = "20px";

    document.body.append(texto);
    document.body.append(linhaCaixas);
    document.body.append(resultado)
});