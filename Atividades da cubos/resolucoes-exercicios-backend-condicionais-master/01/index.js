const jogada1 = "pedra"
const jogada2 = "tesoura"

//seu código aqui
if (jogada1 === jogada2) {
    console.log("empate");
} else if (
    (jogada1 === "pedra" && jogada2 === "tesoura") ||
    (jogada2 === "pedra" && jogada1 === "tesoura") ) {
    console.log("pedra");
} else if (
    (jogada1 === "papel" && jogada2 === "pedra") ||
    (jogada2 === "papel" && jogada1 === "pedra") ) {
    console.log("papel");
} else {
    console.log("tesoura");
}