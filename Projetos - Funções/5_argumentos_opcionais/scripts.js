/* VALOR UNDEFINED = QUANDO O VALOR NAO FOI DEFINIDO E NAO SERÁ INSERIDO NADA NELE PRE DEFINIDO */
function soma(a,b){
    if( a === undefined || b === undefined){
        console.log("Esta função precisa ter dois argumentos")
    } else {
        return a + b;
    }
}

console.log(soma(1))
console.log(soma(4,5))

function saudacao(nome,idade){
    if(idade === undefined){
        console.log("Olá "+ nome);
    } else {
        console.log("Olá "+ nome + " você tem "+ idade + " anos");
    }
}

saudacao("Wesley")
saudacao("Kayene", 20)

/* VALOR DEFAULT = assumir valor como pre-definido caso o 
usuario esqueça de botar o valor */

function repetirFrase(frase, n=2){
    for(let x = 1; x<=n; x++){
        console.log(frase+" "+ x)
    }
}

repetirFrase("oi")
repetirFrase("tudo bem", 5)


function potencia(base, expoente=2){
    return Math.pow(base,expoente);
}

console.log(potencia(2))
console.log(potencia(2,2))
console.log(potencia(2,3))

