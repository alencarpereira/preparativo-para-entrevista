/*
    Aqui, criamos uma variavél nome com let e const, para saber o nome e a idade de uma pessoa
*/

let nome = "Alencar"
const anoNascimento = 1985

const anoAtual = new Date().getFullYear() // pega o ano atual
let idade = anoAtual - anoNascimento  // calcula a idade

console.log(`Olá meu nome é ${nome}, e nasci em  ${anoNascimento}  e tenho ${idade} anos de idade`)
