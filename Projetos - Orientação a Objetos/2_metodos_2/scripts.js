const gato = {
    raça: 'Bulldog',
    miar: function(){
        console.log("Miauuu")
    },
    ronronar: function(){
        console.log("rrunnnrunn")
    },
    setRaça: function(raça){
        this.raça = raça;
    },
    getRaça: function(){
        return "A raça é "+ this.raça;
    }

}

gato.setRaça('Pinscher');

console.log(gato.getRaça());