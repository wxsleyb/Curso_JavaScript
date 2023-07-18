function imprimeApenasPares(num) {
    for (let i = num; i >= 0; i--) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}

console.log(imprimeApenasPares(10))
console.log(imprimeApenasPares(20))