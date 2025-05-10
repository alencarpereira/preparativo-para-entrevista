/* 
Exercício: Classificar a faixa etária de uma pessoa
Crie um programa que:
Defina uma variável idade.
Verifique e classifique a pessoa de acordo com a idade:
Menor de 12: Criança
Entre 12 e 17: Adolescente
Entre 18 e 59: Adulto
60 ou mais: Idoso
Mostre a faixa no console.
*/

const idade = 49

if (idade < 12) {
    console.log("Você é uma criança!")
} else if (idade >= 12 && idade <= 17) {
    console.log("Você é um adolescente!")
} else if (idade >= 18 && idade <= 59) {
    console.log("Você é um adulto!")
} else {
    console.log("Você é um idoso!")
}

