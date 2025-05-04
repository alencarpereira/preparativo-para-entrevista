/*
    🎯 Sua missão:
        Filtrar somente os funcionários que são gerentes (gerente: true).
        Mapear para criar um array só com os nomes dos gerentes em maiúsculo.
        Calcular a média salarial dos gerentes.
*/

const funcionarios = [
    { nome: "Ana", salario: 2500, gerente: false },
    { nome: "Bruno", salario: 3500, gerente: true },
    { nome: "Carlos", salario: 4000, gerente: true },
    { nome: "Diana", salario: 2000, gerente: false }
];

const apenasGerentes = funcionarios.filter(item => {
    return item.gerente === true
})
const nomesGerentes = apenasGerentes.map(nome => {
    return nome.nome.toUpperCase()
})

const salario = apenasGerentes.reduce((acc, valor) => {
    return acc + valor.salario
}, 0)

const mediaSalarial = salario / apenasGerentes.length

console.log(`
    No meu relatório, identifiquei que temos dois gerentes. 
    Passei os nomes para letras maiúsculas: ${nomesGerentes}.
    A soma dos salários é R$ ${salario}, e a média salarial é R$ ${mediaSalarial}.
    `);
