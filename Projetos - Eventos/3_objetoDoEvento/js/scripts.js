let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

function msg(e){
    console.log(e) // quando usa o remove é obrigado a ter uma função externa, nesse caso o msg
}

btn1.addEventListener("click", msg);

btn2.addEventListener("click", function(event) {
    console.log(event)
})