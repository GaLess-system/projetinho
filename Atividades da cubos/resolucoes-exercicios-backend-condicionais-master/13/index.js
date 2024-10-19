//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

let valorComDesconto;

if (tipoDePagamento === "credito") {
    valorComDesconto = valorDoProduto * 95/100;
  } else if (tipoDePagamento === "cheque") {
    valorComDesconto = valorDoProduto * 97/100;
  } else {
    valorComDesconto = valorDoProduto * 90/100;
  }

  console.log(`Valor a ser pago: R$ ${(valorComDesconto / 100).toFixed(2)}`);