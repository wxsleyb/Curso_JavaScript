class Mamifero {
    constructor(patas){
        this.patas = patas;
    }
}

let coiote = new Mamifero(4);
console.log(coiote.patas);

class Cachorro extends Mamifero{
    constructor(patas,raça){
        super(patas,patas);
        this.raça=raça;
    }

    latir(){
        console.log("au au")
    }
}

let pug = new Cachorro(4,"Pug");
console.log(pug.patas);
pug.latir();





