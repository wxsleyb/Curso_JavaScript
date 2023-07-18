const NotAB = /[^ab]/;
console.log(NotAB.test("ab"));
console.log(NotAB.test("Aqui tem a"));

const NotAtoZ = /[^a-z]/;
console.log(NotAtoZ.test("ab"));
console.log(NotAtoZ.test("aquitemaz"));
console.log(NotAtoZ.test("aquitemaz3"));

const az = /[a-z]/;
console.log(az.test("ab"));
console.log(az.test("aquitemaz"));
console.log(az.test("aquitemaz3"));
