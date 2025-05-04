const alunos = [
    { nome: "Ana", nota: 7 },
    { nome: "Bruno", nota: 5 },
    { nome: "Carlos", nota: 8 },
    { nome: "Diana", nota: 6 }
];

const novoArray = alunos.filter(item => {
    return item.nota > 5
})

const media = novoArray.reduce((acc, media) => {
    return acc + media.nota
}, 0)

const mediaAlunos = media / novoArray.length

console.log(mediaAlunos)

// 1. Filtre os alunos com nota maior que 5
// 2. Calcule a média dessas notas filtradas usando .reduce()
