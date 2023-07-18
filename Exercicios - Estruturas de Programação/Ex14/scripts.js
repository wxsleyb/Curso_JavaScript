let cont = 0;
let num = prompt("Digite o número");

for (i = 1; i <= num; i++) {
    

    if (num % i == 0) {
        cont++
    }

}

if (cont == 2) {
    console.log(`O numero ${num} é primo`)
} else {
    console.log(`O numero ${num} não é primo`)
}