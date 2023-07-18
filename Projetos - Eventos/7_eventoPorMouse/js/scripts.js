let btn1 = document.querySelector("#btn1");

btn1.addEventListener("mousedown", function(){
    console.log("apertou o botão")
})

btn1.addEventListener("mouseup", function(){
    console.log("soltou o botão")
})

let btn2= document.querySelector("#btn2");

btn2.addEventListener("dblclick", function(){
    console.log("clicou duas vezes")
})

btn2.addEventListener("contextmenu", function(e){
    e.preventDefault();
    console.log("Botão direito")
})


