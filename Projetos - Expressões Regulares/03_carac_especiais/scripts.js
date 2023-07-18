const pontoRegex = /./;
console.log('.')
console.log(pontoRegex.test("asd"))
console.log(pontoRegex.test(" "))
console.log(pontoRegex.test("123"))

const dRegex = /\d/; // [0-9]      \\
console.log('d')
console.log(dRegex.test("asd"))
console.log(dRegex.test(" "))
console.log(dRegex.test("123"))
console.log(dRegex.test("123asd"))

const dRegex2 = /\D/; // [^0-9] as letras maiusculas sao a negação da minuscula  \\
console.log('D')
console.log(dRegex2.test("asd"))
console.log(dRegex2.test(" "))
console.log(dRegex2.test("123"))
console.log(dRegex2.test("123asd"))

const sRegex = /\s/; // só caracteres com espaços vazios, tab e quebra de linha
console.log('s')
console.log(sRegex.test("asd"))
console.log(sRegex.test(" "))
console.log(sRegex.test("123"))
console.log(sRegex.test("123asd"))


const wRegex = /\w/; // só aceita numeros e letras
console.log('w')
console.log(wRegex.test("asd"))
console.log(wRegex.test(" "))
console.log(wRegex.test("123"))
console.log(wRegex.test("123asd"))
