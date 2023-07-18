function verificaString(string){
    if( string.length > 10){
        console.log("texto muito longo: " + string.length + " letras")
    } else {
        console.log("texto dentro do limite: "+ string.length+ " letras" )
    }
}

console.log(verificaString("wesley braga"))
console.log(verificaString("kayene denia"))
console.log(verificaString("banana"))
