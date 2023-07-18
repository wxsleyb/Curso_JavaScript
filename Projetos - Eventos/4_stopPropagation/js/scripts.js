let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let p = document.querySelector("p");

function msg(e){
    console.log("Clicou no button") // quando usa o remove é obrigado a ter uma função externa, nesse caso o msg
    e.stopPropagation();
}

btn1.addEventListener("click", msg);

btn2.addEventListener("click", function(event) {
    console.log(event)
})

p.addEventListener("click", function(){
    console.log("clicou no parágrafo!")
})