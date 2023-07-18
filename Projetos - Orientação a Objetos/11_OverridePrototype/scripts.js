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

Cachorro.prototype.patas=4;
let labrador = new Cachorro('labrador','amarelo')

console.log(labrador.patas)
labrador.latir()

console.log(Cachorro.prototype.raça);
console.log(labrador.raça)




