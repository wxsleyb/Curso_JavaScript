let velocidadeCarro = prompt("Qual velocidade seu carro está?")
let velocidadeMaximaPermitida = 80;

if (velocidadeCarro <= velocidadeMaximaPermitida){
    console.log("O carro não será multado, está respeitando a velocidade maxima permitida")
} else {
    console.log("O carro será multado, estava acima da velocidade permitida")
}