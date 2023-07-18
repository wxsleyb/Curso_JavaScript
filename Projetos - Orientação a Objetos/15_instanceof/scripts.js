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


// verificar se cachorro é uma instancia de mamifero
console.log(new Cachorro instanceof Mamifero); 
console.log(coiote instanceof Mamifero);





