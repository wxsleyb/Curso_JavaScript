class CarrinhoCompra {
    constructor(itens, qtd, valorTotal) {
        this.itens = itens;
        this.qtd = qtd;
        this.valorTotal = valorTotal;
    }

    addItem(item) {

        let contador = 0;

        for (let itemCarrinho in this.itens) {
            if (this.itens[itemCarrinho].id == item.id) {
                this.itens[itemCarrinho].qtd += item.qtd;
                contador = 1;
            }
        }

        if (contador == 0) {
            this.itens.push(item);
        }

        this.qtd += item.qtd;
        this.valorTotal += item.preco * item.qtd;
    }

    removeItem(item){
        for (let itemCarrinho in this.itens) {
            if (this.itens[itemCarrinho].id == item.id) {
                // encapsular o itemCarrinho na variavel obj pra poder usar ele numa funçao
                let obj = this.itens[itemCarrinho]; 
                let index = this.itens.findIndex(function(obj){
                    return obj.id == item.id;
                })
                // remover os valores
                this.qtd -= this.itens[itemCarrinho].qtd;
                this.valorTotal -= this.itens[itemCarrinho].preco * this.itens[itemCarrinho].qtd;

                // remover o item
                this.itens.splice(index,1)
                
            }
        }
    }
}

let carrinho = new CarrinhoCompra([
    {
        id: 01,
        nome: "Camisa",
        qtd: 1,
        preco: 20
    },
    {
        id: 02,
        nome: "Calça",
        qtd: 3,
        preco: 40
    }
], 3, 140)

console.log(carrinho)

carrinho.addItem({ id: 01, nome: "Camisa", qtd: 2, preco: 20 })
console.log(carrinho)

carrinho.addItem({ id: 03, nome: "Boné", qtd: 5, preco: 25})
console.log(carrinho)

carrinho.removeItem({id: 01, nome: "Camisa", qtd: 1, preco: 20})

console.log(carrinho)
