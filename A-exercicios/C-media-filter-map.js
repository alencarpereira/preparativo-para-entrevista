const alunos = [
    { nome: "Ana", nota: 7 },
    { nome: "Bruno", nota: 5 },
    { nome: "Carlos", nota: 8 },
    { nome: "Diana", nota: 6 }
];

const notas = alunos.filter(item => {
    return item.nota >= 6
})

const nomesAprovados = notas.map(aluno => {
    return aluno.nome.toUpperCase()
})

console.log(nomesAprovados)

// 1. Filtrar os alunos com nota >= 6
// 2. Mapear para obter os nomes em letras maiúsculas
