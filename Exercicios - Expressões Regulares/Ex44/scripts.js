const validaMarca = /Marca: (Nike|Adidas|Puma|Asics)/;     // \\   ||

console.log(validaMarca.test("Marca: Nike"))
console.log(validaMarca.test("Marca: Oakley"))
console.log(validaMarca.test("Marca: ADIDAS"))
console.log(validaMarca.test("Marca: "))
console.log(validaMarca.test("Nike"))
