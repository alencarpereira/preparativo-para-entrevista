/*
    🎯 Missão:

    Filtrar os livros com mais de 200 páginas.
    Criar um array só com os títulos em letras maiúsculas.
    Calcular o total de páginas desses livros filtrados.
*/

const livros = [
    { titulo: "Dom Casmurro", autor: "Machado de Assis", paginas: 300 },
    { titulo: "Capitães da Areia", autor: "Jorge Amado", paginas: 250 },
    { titulo: "O Cortiço", autor: "Aluísio Azevedo", paginas: 200 },
    { titulo: "A Moreninha", autor: "Joaquim Manuel de Macedo", paginas: 150 }
];

const paginaLivros = livros.filter(item => {
    return item.paginas >= 200
})

const letrasMaiuscula = paginaLivros.map(nome => {
    return nome.titulo.toUpperCase()
})

const totalPagina = paginaLivros.reduce((acc, valor) => {
    return acc + valor.paginas
}, 0)

//console.log(`Os livros com mais de 200 pagina é dos autores ${letrasMaiuscula.join(", ")}.
//E o total de pagínas somadas são de ${totalPagina}`)

const lista = ["Pão", "Leite", "Ovos", "Queijo"];

const nome = lista.map(nome => {
    return nome
})

console.log(`Você precisa comprar: ${nome.join(", ")}.`)