let b = 2;

try {
    let a = 2 + b;
} catch (e) {
    //throw new Error(e)
    console.log("Deu o erro: " + e)
} finally{
    console.log("Executou")
}

console.log('teste')