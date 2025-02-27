// Formas iniciais de debugar: com console.log e lendo as mensagens de erros
const numeros = Number(prompt("Quantos números você quer somar?"));
let somatoriaTotal = 0;
debugger;
function exibirQuestoes() {
  for (let i = 0; i < numeros; i++) {
    const numero = Number(prompt(`Digite o número ${i + 1}:`));
    somatoriaTotal += numero;
    document.write(`<h3>Número ${i + 1}: Somatória => ${somatoriaTotal}</h3>`);
    
  }
}

exibirQuestoes();
