class Cachorro {
    constructor(raça,patas,cor){
        this.raça=raça;
        this.cor=cor;
    }

    latir(){
        console.log("au au")
    }
}
Cachorro.prototype.patas=4;
let labrador = new Cachorro('labrador','amarelo')

console.log(labrador.patas)
labrador.latir()




