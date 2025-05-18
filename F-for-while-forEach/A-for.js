/*
    Objetivo: Mostrar os números de 0 a 10 no console e dizer se são pares ou ímpares.
*/

for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i + " é par")
    } else {
        console.log(i + " é impar")
    }
}