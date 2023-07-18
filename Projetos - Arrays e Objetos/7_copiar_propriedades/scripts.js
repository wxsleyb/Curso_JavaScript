let carro = {
    portas:2,
    rodas:4,
    motor: '2.0'
}

console.log(carro);

let adicionais = {
    tetoSolar: true,
    arCondicionado: true,
}



Object.assign(carro,adicionais);

console.log(carro);