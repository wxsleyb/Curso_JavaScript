function checarNumero(numb){
    let number = Number(numb);
    if(Number.isNaN(number)){
        alert("Por favor, passe apenas números")
    } else {
        return number;
    }
}


let numb = prompt("Digite um numero")
checarNumero(numb)