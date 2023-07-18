const validaNomeUsuario = /^(?=.{3,16}$)[a-z0-9-_]/;     // \\   ||

console.log(validaNomeUsuario.test("matheus-123"))
console.log(validaNomeUsuario.test("wesley09"))
console.log(validaNomeUsuario.test("as"))
console.log(validaNomeUsuario.test("11111111111111111111111111111111111111111111111111111"))

