function MultiplicarTresNumeros(x,y,z){
    return x*y*z;
}

console.log(MultiplicarTresNumeros(3,4,5));

const mult = MultiplicarTresNumeros(3,4,5);

console.log("O valor da multiplicação é: "+ mult)


function podeDirigir(idade, cnh){
    if(idade >=18 && cnh == true){
        console.log("Pode dirigir");
    } else {
        console.log("Não pode dirigir");
    }
}

console.log(podeDirigir(18, true));
console.log(podeDirigir(17, true));
console.log(podeDirigir(40, 0));
console.log(podeDirigir(18, 1));



