//MANIPULAÇÃO DE TEXTO
console.log("Gabriel".length);
console.log("Gabriel Levy".toUpperCase());  
console.log("Gabriel Levy".toLowerCase()); 
console.log("GabrielLevy".indexOf("Levy"));
console.log("Gabriel Levy".includes("Levy"));
console.log("Gabriel Levy".substring(0, 4));
console.log("Gabriel Levy".slice(4)); 
console.log("Gabriel Levy".replace("Levy","Silva"));
console.log("G, a, b, r, i, e, l".split(","));     
console.log("  Gabriel Levy  ".trim());

//MATÉMATICOS
console.log(Math.PI)
console.log(Math.round(4.7));
console.log(Math.min(2, 5, 1, 8, 3)); 
console.log(Math.max(2, 5, 1, 8, 3));
console.log(Math.pow(2, 3));
console.log(Math.sqrt(16)); 
console.log(Math.random());

// DATAS
let agora = new Date();
console.log(agora);

// Criar data específica
let natal = new Date(2023, 11, 25); // Mês é 0-indexed (0 = Janeiro, 11 = Dezembro)
console.log(natal);

console.log(agora.getFullYear()); // Ano
console.log(agora.getMonth()); // Mês (0-11)
console.log(agora.getDate()); // Dia do mês
console.log(agora.getDay()); // Dia da semana (0-6, 0 = Domingo)
console.log(agora.getHours()); // Hora
console.log(agora.getMinutes()); // Minutos
console.log(agora.getSeconds()); // Segundos

