function Cachorro(raça, patas, cor) {
    this.raça = raça;
    this.patas = patas;
    this.cor = cor;
}
/*criar metodos separados da classe */
Cachorro.prototype.latir = function () {
    console.log("au au")
}

Cachorro.prototype.uivar = function () {
    console.log("auuuuuu")
}



let husky = new Cachorro('Husky', 4, 'cinza');
husky.latir();
husky.uivar();




