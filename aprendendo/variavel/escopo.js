//Aqui eu não consigo puxar a variavel de dentro das chaves, mas isso só se aplica a variaveis dentro das chaves, se eu puxar o console.log de dentro com a variavel fora
//ele ainda funciona
{
 const idade = 30;
 console.log (idade);
//Assim funciona
}

{
    const nome = "Gabriel";
}
console.log(nome);
//Assim não funiona

const segundoNome = "Lessa";
{
console.log(segundoNome);
//Assim funciona
}