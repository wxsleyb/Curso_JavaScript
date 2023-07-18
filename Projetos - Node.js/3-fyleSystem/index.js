let {readFile, read} = require('fs')

readFile("arquivo.txt", "utf8", (error,texto) =>{
    if(error){
        throw error;
    } else {
        console.log(texto)
    }
})