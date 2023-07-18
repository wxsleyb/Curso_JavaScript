function Cachorro(raça, patas, cor){
    this.raça=raça,
    this.patas=patas;
    this.cor=cor,
    this.latir = function(){
        console.log("au au");
    }
}

let husky = new Cachorro('Husky', 4, 'cinza');
husky.latir();




