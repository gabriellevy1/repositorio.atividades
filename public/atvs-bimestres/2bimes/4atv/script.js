document.addEventListener("DOMContentLoaded", evento => {
        
    let pontos = 0;

    let caixa = document.createElement("div");
    let placar = document.createElement("h1");

    caixa.style.width = "150px";
    caixa.style.height = "150px";
    caixa.style.background = "black";
    caixa.style.margin = "20px";
    caixa.style.borderRadius = "100%";

    placar.textContent = "Aura: 0";

    caixa.addEventListener("click", (evento) => {
        pontos++;
        placar.textContent = "Aura: " + pontos;
    });


    caixa.addEventListener("dblclick", (evento) => {
        pontos += 2;
        placar.textContent = "Aura: " + pontos;
    });


    caixa.addEventListener("mouseover", (evento) => {
        caixa.style.background = "red";
    });


    caixa.addEventListener("mouseout", (evento) => {
        caixa.style.background = "black";
    });

    caixa.addEventListener("mousedown", () => {
    caixa.style.background = "green";
    });

    document.body.append(caixa);
    document.body.append(placar);

    document.body.style.display = "flex";
    document.body.style.flexDirection = "column"
    document.body.style.justifyContent = "center";
    document.body.style.alignItems = "center";
    document.body.style.fontFamily = "verdana";
    document.body.style.backgroundColor = "blue";
});