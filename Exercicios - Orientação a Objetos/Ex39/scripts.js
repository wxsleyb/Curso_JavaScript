class Carro {
    constructor(marca,cor,gasolinaRestante, consumo){
        this.marca= marca;
        this.cor=cor;
        this.gasolinaRestante = gasolinaRestante;
        this.consumo = consumo;


    }

    dirigir(km){
        let litrosConsumidos = km / this.consumo;
        this.gasolinaRestante -= litrosConsumidos;

    }

    abastecer(litros){
        this.gasolinaRestante += litros;
    }

}

let carro1 = new Carro("BMW", "Preta", 100, 14)


carro1.abastecer(100)
carro1.dirigir(100);
console.log(carro1)
