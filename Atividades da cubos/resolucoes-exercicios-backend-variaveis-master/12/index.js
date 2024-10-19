const montante = 90000;
const capital = 60000;
const tempo = 24;

const taxa = (montante / capital) ** (1 / tempo) - 1;

console.log(`A taxa do financiamento foi ${taxa * 100}%`);
