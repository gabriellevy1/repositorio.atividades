document.addEventListener("DOMContentLoaded", evento => {
    
    let texto = document.createElement("h1")
    let caixa1 = document.createElement("div");
    let caixa2 = document.createElement("div");
    let caixa3 = document.createElement("div");
    let caixa4 = document.createElement("div");
    let caixa5 = document.createElement("div");

    texto.textContent = "Ache o Ericson dentro das caixas!"
    caixa1.textContent = "Estou aqui?"
    caixa2.textContent = "Estou aqui?"
    caixa3.textContent = "Estou aqui?"
    caixa4.textContent = "Estou aqui?"
    caixa5.textContent = "Estou aqui?"
    
    texto.style.fontSize = "52px"
    caixa1.style.width = "240px"
    caixa1.style.height = "300px"
    caixa1.style.backgroundColor = "black";
    caixa1.style.color = "white";
    caixa1.style.textAlign = "center";
    caixa1.style.fontSize = "20px";
    caixa1.style.display = "flex"
    caixa1.style.justifyContent = "center"
    caixa1.style.alignItems = "center"
    caixa1.style.margin = "10px"

    caixa2.style.width = "240px"
    caixa2.style.height = "300px"
    caixa2.style.backgroundColor = "black";
    caixa2.style.color = "white";
    caixa2.style.textAlign = "center";
    caixa2.style.fontSize = "20px";
    caixa2.style.display = "flex"
    caixa2.style.justifyContent = "center"
    caixa2.style.alignItems = "center"
    caixa2.style.margin = "10px"

    caixa3.style.width = "240px"
    caixa3.style.height = "300px"
    caixa3.style.backgroundColor = "black";
    caixa3.style.color = "white";
    caixa3.style.textAlign = "center";
    caixa3.style.fontSize = "20px";
    caixa3.style.display = "flex"
    caixa3.style.justifyContent = "center"
    caixa3.style.alignItems = "center"
    caixa3.style.margin = "10px"

    caixa4.style.width = "240px"
    caixa4.style.height = "300px"
    caixa4.style.backgroundColor = "black";
    caixa4.style.color = "white";
    caixa4.style.textAlign = "center";
    caixa4.style.fontSize = "20px";
    caixa4.style.display = "flex"
    caixa4.style.justifyContent = "center"
    caixa4.style.alignItems = "center"
    caixa4.style.margin = "10px"

    caixa5.style.width = "240px"
    caixa5.style.height = "300px"
    caixa5.style.backgroundColor = "black";
    caixa5.style.color = "white";
    caixa5.style.textAlign = "center";
    caixa5.style.fontSize = "20px";
    caixa5.style.display = "flex"
    caixa5.style.justifyContent = "center"
    caixa5.style.alignItems = "center"
    caixa5.style.margin = "10px"

    document.body.prepend(texto)
    document.body.appendChild(caixa1)
    document.body.appendChild(caixa2)
    document.body.appendChild(caixa3)
    document.body.appendChild(caixa4)
    document.body.appendChild(caixa5)

    document.body.style.display = "flex"
    document.body.style.flexWrap = "wrap"
    document.body.style.justifyContent = "center"
    document.body.style.alignItems = "center"
    document.body.style.backgroundColor = "blue"
    document.body.style.fontFamily = "verdana"

    caixa1.addEventListener('click', evento => {
        caixa1.textContent = "Não estou aqui"
        caixa1.style.backgroundColor = "white"
        caixa1.style.color = "black"
    })

    caixa2.addEventListener('click', evento => {
        caixa2.textContent = "Não estou aqui"
        caixa2.style.backgroundColor = "white"
        caixa2.style.color = "black"
    })

    caixa3.addEventListener('click', evento => {
        caixa3.textContent = "Não estou aqui"
        caixa3.style.backgroundColor = "white"
        caixa3.style.color = "black"
    })

    caixa4.addEventListener('click', evento => {
        caixa4.textContent = "Você me encontrou, PARABÉNS!!!"
        caixa4.style.backgroundImage = "url('img/acha.o.ericson2.jpeg')"
        caixa4.style.color = "green"
        caixa4.style.fontSize = "24px"

    })

    caixa5.addEventListener('click', evento => {
        caixa5.textContent = "Não estou aqui"
        caixa5.style.backgroundColor = "white"
        caixa5.style.color = "black"
    })

});