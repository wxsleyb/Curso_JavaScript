class Cachorro {
    constructor(raça,cor){
        this.raça=raça;
        this.cor=cor;
    }

    latir(){
        console.log("au au")
    }
}
Cachorro.prototype.raça = 'SRD';

let patas = Symbol();
Cachorro.prototype[patas]= 4;


let labrador = new Cachorro('labrador','amarelo')

labrador.latir()

console.log(Cachorro.prototype.raça);
console.log(labrador.raça)

// acessando symbol
console.log(Cachorro.prototype[patas]);
console.log(labrador[patas])




