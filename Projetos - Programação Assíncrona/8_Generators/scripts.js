function* criadorId(){
    let id = 0;
    while(true){
        yield id++;  //incrementar o id e salvar esse valor na memoria incrementada
    }
}

let criaId = criadorId();

console.log(criaId.next().value)
console.log(criaId.next().value)
console.log(criaId.next().value)
console.log(criaId.next().value)


console.log(criaId.next())