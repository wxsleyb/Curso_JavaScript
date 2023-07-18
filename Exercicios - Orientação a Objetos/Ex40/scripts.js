class ContaBanco {
    constructor(saldoCC, saldoCP, jurosCP){
        this.saldoCC = saldoCC;
        this.saldoCP = saldoCP;
        this.jurosCP = jurosCP;

    }

    transferenciaCP(valor){
        this.saldoCC -= valor;
        this.saldoCP += valor;

    }
    transferenciaCC(valor){
        this.saldoCP -= valor;
        this.saldoCC += valor;

    }

    deposito(valor){
        this.saldoCC += valor;
        this.saldoCP += valor;
    }

    saque(valor){
        this.saldoCC -= valor;
        this.saldoCP -= valor;
    }

    jurosDeAniversario(){
        let juros = this.saldoCP * this.jurosCP / 100
        this.saldoCP += juros
    }

}

class contaEspecial extends ContaBanco{
    constructor(saldoCC,saldoCP, juros){
        super(saldoCC,saldoCP,juros*2)
    }
}

let conta1 = new ContaBanco(1000, 500, 3)
console.log(conta1);

conta1.transferenciaCP(500)
console.log(conta1);

conta1.jurosDeAniversario()
console.log(conta1)

let conta2 = new contaEspecial(10000,50000,3)
console.log(conta2)
conta2.saque(5000)
console.log(conta2)

conta2.jurosDeAniversario()
console.log(conta2)

