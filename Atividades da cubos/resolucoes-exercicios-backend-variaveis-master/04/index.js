const capitalInicial = 1000;
const taxa = 12.5 / 100;
const tempo = 5;

// const montante = capitalInicial * (1+taxa) ** tempo;
const montante = capitalInicial * Math.pow((1 + taxa), tempo);

console.log(montante);