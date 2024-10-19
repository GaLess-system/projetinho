const nota = 8.5;
let conceito = "";

if (nota < 4) {
    conceito = "E";
} else if (nota < 6) {
    conceito = "D";
} else if (nota < 8) {
    conceito = "C";
} else if (nota < 9) {
    conceito = "B";
} else {
    conceito = "A";
}

console.log(`O estudando obteve conceito ${conceito}`);