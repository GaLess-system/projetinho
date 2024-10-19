//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

const valorParcelaEmReais = (valorDoProduto / quantidadeDoParcelamento) / 100;
const parcelasPagas = valorPago / valorParcelaEmReais;

console.log(`Restam ${quantidadeDoParcelamento - parcelasPagas} parcelas de R$ ${valorParcelaEmReais.toFixed(2)}`);