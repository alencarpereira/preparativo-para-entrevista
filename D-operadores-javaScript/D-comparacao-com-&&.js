/*
     Desafio: Verificação de email e código de segurança
        A pessoa só poderá acessar o sistema se:
        o email digitado for igual ao email cadastrado e
        o código de segurança for igual ao código cadastrado.
*/

const email = "usuario@email.com";
const codigoSeguranca = "ABC123";


const emailDigitado = "usuario@email.com";
const codigoDigitado = "ABC123";

if (emailDigitado === email && codigoDigitado === codigoSeguranca) {
    console.log("Login autorizado")
} else {
    console.log("Dados incorretos")
}
