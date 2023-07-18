a1 = [1,2,3,4,5,6,7];
a2 = [9,8,7,6];


function verificaElementos(a){
    if (a.length <= 5){
        console.log("Poucos elementos")
    } else {
        console.log("Muitos elementos")
    }
}


console.log(verificaElementos(a1))
console.log(verificaElementos(a2))
