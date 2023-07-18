const reg1= new RegExp('bola')

console.log(reg1.test("tem bola?"))
console.log(reg1.test("não tem"))


const reg2 = /bola/;

let frase = 'tem bola na cesta'

console.log(reg2.test("tem bola?"))
console.log(reg2.test("não tem"))
console.log(reg2.test(frase))


console.log(/quadrado/.test("Onde tem um quadrado"))
console.log(/quadrado/.test("qqqqqqquadradoooooo"))
