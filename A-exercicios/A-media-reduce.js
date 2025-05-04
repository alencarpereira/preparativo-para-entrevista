const numeros = [1, 2, 3, 4, 5]

const soma = numeros.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual
}, 0)

// console.log(soma)

const alunos = [
    { nome: "Ana", nota: 7 },
    { nome: "Bruno", nota: 5 },
    { nome: "Carlos", nota: 8 },
    { nome: "Diana", nota: 6 }
];

const notaAluno = alunos.reduce((acc, aluno) => {
    return acc + aluno.nota
}, 0)

const mediaAluno = notaAluno / alunos.length

if (mediaAluno >= 6) {
    console.log("Turma Aprovada")
} else {
    console.log("Turma reprovada")
}
// 1. Some todas as notas com reduce
// 2. Calcule a média
// 3. Se a média for >= 6, mostrar "Turma Aprovada", senão "Turma Reprovada"


