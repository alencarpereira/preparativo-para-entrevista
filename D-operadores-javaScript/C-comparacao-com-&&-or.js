/*
    Desafio: Acesso ao sistema
    Você está criando uma verificação de login. A pessoa só pode acessar o sistema se:
    tiver digitado o usuário correto e a senha correta.
*/

const usuario = "admin";
const senha = "1234";

const usuarioDigitado = "admin";
const senhaDigitada = "1234";

if (usuarioDigitado === usuario && senhaDigitada === senha) {
    console.log("Acesso permitido");
} else {
    console.log("Acesso negado");
}



