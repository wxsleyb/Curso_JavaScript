let pessoa = {

    "nome": "Wesley",
    "idade": 21,
    "profissao": "Programador",
    "hobbies": ["Video game", "Basquete", "Correr"]
}

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto)

let pessoaJSON = JSON.parse(pessoaTexto);
console.log(pessoaJSON)

console.log(pessoaJSON.hobbies[0])






