let pessoa = {
    nome: "Matheus"
}

let pessoa3 = {
    nome: "Matheus"
}

let pessoa2 = pessoa;

console.log(pessoa==pessoa2)
console.log(pessoa3== pessoa)
console.log(pessoa3== pessoa2)


pessoa2.nome = "Pedro"

console.log(pessoa.nome);
console.log(pessoa2.nome);