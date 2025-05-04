let nome = "Alencar"
const anoNascimento = 1985
const mesNascimento = 11
const diaNascimento = 21

const anoAtual = new Date().getFullYear();
const mesAtual = new Date().getMonth();
const diaAtual = new Date().getDate();

let idade = anoAtual - anoNascimento

if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
    idade--
}

console.log(`Olá, meu nome é ${nome}, nasci em ${diaNascimento}/${mesNascimento + 1}/${anoNascimento} e tenho ${idade} anos de idade.`);