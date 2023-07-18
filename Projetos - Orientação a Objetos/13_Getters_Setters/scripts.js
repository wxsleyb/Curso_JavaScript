class Cachorro {
    constructor(raça,cor){
        this.raça=raça;
        this.cor=cor;
    }

    latir(){
        console.log("au au")
    }

    get getCor(){
        return this.cor;
    }

    set setCor(cor){
        this.cor=cor;
    }
}

let pastor = new Cachorro('Pastor Alemão', 'Sem cor');
console.log(pastor);

pastor.setCor = 'Marrom'
console.log(pastor.getCor)





