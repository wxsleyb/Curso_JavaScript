class Endereco {
    constructor(rua,bairro,cidade,estado){
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    set novaRua(novaRua){
        this.rua = novaRua;
    }
    set novoBairro(novoBairro){
        this.bairro = novoBairro;
    }
    set novaCidade(novaCidade){
        this.cidade = novaCidade;
    }
    set novoEstado(novoEstado){
        this.estado = novoEstado;
    }
    

}


let endereco = new Endereco("Rua Helio", "Penha", "Rio de Janeiro", "RJ");

console.log(endereco)

endereco.novaRua = "Rua dos Anturios";
console.log(endereco);

endereco.novoEstado = "BA"

console.log(endereco);



