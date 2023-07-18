function imprimirNoConsole(){
    console.log("Olá mundo")
}

imprimirNoConsole();

function imprimirUmNumero(num){
    console.log("O numero é: "+ num)
}

imprimirUmNumero(2);
imprimirUmNumero(5);
imprimirUmNumero(10);
imprimirUmNumero(15);

const numeroAleatorio = function(){ /* funçao anonima */
    console.log(Math.random())
}

numeroAleatorio();
numeroAleatorio();
numeroAleatorio();