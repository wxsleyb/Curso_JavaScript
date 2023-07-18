window.addEventListener("keydown", function(e){
    if(e.key == 'w'){
        console.log("Apertou a letra w")
    } else if(e.key == "Enter"){
        console.log("apertou enter")
    }
})

window.addEventListener("keyup", function(e){
    if(e.key == "Enter"){
        console.log("Soltou enter")
    }
})