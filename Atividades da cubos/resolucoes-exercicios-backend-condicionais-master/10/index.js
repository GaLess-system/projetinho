const caractere = "E";

if (caractere === "A" || caractere === "E" || caractere === "I" || caractere === "O" || caractere === "U") {
    console.log("Vogal Maiúscula");
}
else if (caractere === "a" || caractere === "e" || caractere === "i" || caractere === "o" || caractere === "u") {
    console.log("Vogal Minúscula");
}
else if (caractere === "1" || caractere === "2" || caractere === "3" || caractere === "4" || caractere === "5" ||
         caractere === "6" || caractere === "7" || caractere === "8" || caractere === "9" || caractere === "0") {
    console.log("Numeral");
}
else {
    console.log("Consoante");
}