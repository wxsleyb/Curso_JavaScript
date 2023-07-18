const validarIDnoFinal = /\d+ID\b/;     // \\   ||

console.log(validarIDnoFinal.test("12313ID"))
console.log(validarIDnoFinal.test("131313"))
console.log(validarIDnoFinal.test("asdsa"))
console.log(validarIDnoFinal.test("testandOID"))