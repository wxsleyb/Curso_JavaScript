function numeroAleatorio(numeroMaximo){
    return Math.floor(Math.random()* numeroMaximo) + 1;
} /* math.floor arredonda pra baixo o numero quebrado */

console.log(numeroAleatorio(50));
console.log(numeroAleatorio(10));
console.log(numeroAleatorio(5));
