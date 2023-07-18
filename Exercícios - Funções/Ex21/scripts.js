function detectaTipo(dado) {
    if (typeof dado === 'number') {
        console.log("É do tipo number");
    } else if (typeof dado === 'string'){
        console.log("É do tipo string");
    } else if(typeof dado === 'boolean') {
        console.log("É do tipo boolean");
    }
}

console.log(detectaTipo(19));
console.log(detectaTipo(true));
console.log(detectaTipo("oi"));