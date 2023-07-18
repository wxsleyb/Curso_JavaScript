function criaCachorro(raça, patas, cor){
    let cachorro = Object.create({});
    cachorro.raça=raça;
    cachorro.patas=patas;
    cachorro.cor=cor;
    cachorro.latir = function(){
        console.log("au au");
    }
    return cachorro;
}

let doberman = criaCachorro('Doberman', 4, 'preta');
console.log(doberman)
doberman.latir();




