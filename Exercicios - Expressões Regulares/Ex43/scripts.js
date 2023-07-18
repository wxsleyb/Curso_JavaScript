const validaIP = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;     // \\   ||

console.log(validaIP.test("127.0.0.1"))
console.log(validaIP.test("13.0.0.3"))
console.log(validaIP.test("133.0.0.13"))
console.log(validaIP.test("133.03.0.3"))

console.log(validaIP.test("133.03.0"))
console.log(validaIP.test("133.03.03"))
console.log(validaIP.test("asdasddsadsa"))
console.log(validaIP.test("1333.33333.333.33333"))


