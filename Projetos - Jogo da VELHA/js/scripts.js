"use strict"
let x = document.querySelector(".x")
let o = document.querySelector(".o")
let boxes = document.querySelectorAll(".box")
let buttons = document.querySelectorAll("#btns-container button")
let messageContainer = document.querySelector("#message")
let messageText = document.querySelector("#message p")
let secondPlayer;

// contador de jogadas
let player1 = 0;
let player2 = 0;

// adicionando o evento de click aos boxes

for (let i = 0; i < boxes.length; i++) {

    // quando alguem clica na caixa
    boxes[i].addEventListener("click", function () {

        let elemento = checkElemento(player1, player2);

        // verifica se ja tem X ou O
        if (this.childNodes.length == 1) {
            //clonou o elemento
            let cloneElemento = elemento.cloneNode(true);
            //inseriu em outro lugar
            this.appendChild(cloneElemento);

            //computer jogada
            if (player1 == player2) {
                player1++;

                if(secondPlayer == 'ai-player'){
                    //funcao executar jogada;
                    computerPlay();
                    player2++;
                }
            } else {
                player2++;
            }
            //checa quem venceu
            checkWinCondition();
        }


    });
}

// evento para saber se é 2 players ou IA
for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        secondPlayer = this.getAttribute("id");

        for(let j=0; j<buttons.length; j++){
            buttons[j].style.display = 'none';
        }

        setTimeout(function(){
            let container = document.querySelector("#container");
            container.classList.remove("hide")
        })
    })
}

// função que identifica qual é o jogador
// verifica quem vai jogarr
function checkElemento(player1, player2) {
    let elemento;
    if (player1 == player2) {
        elemento = x;
    } else {
        elemento = o;
    }
    return elemento;

}

// ve quem ganhou
function checkWinCondition() {
    let b1 = document.getElementById("block-1");
    let b2 = document.getElementById("block-2");
    let b3 = document.getElementById("block-3");
    let b4 = document.getElementById("block-4");
    let b5 = document.getElementById("block-5");
    let b6 = document.getElementById("block-6");
    let b7 = document.getElementById("block-7");
    let b8 = document.getElementById("block-8");
    let b9 = document.getElementById("block-9");

    // horizontais
    if (b1.children.length > 0 && b2.children.length > 0 && b3.children.length > 0) {
        let b1children = b1.children[0].className;
        let b2children = b2.children[0].className;
        let b3children = b3.children[0].className;
        console.log(b1children)
        console.log(b2children)
        console.log(b3children)

        if (b1children == 'x' && b2children == 'x' && b3children == 'x') {
            declareWinner('x')
        } else if (b1children == 'o' && b2children == 'o' && b3children == 'o') {
            declareWinner('o')
        }
    }

    if (b4.children.length > 0 && b5.children.length > 0 && b6.children.length > 0) {
        let b4Child = b4.children[0].className;
        let b5Child = b5.children[0].className;
        let b6Child = b6.children[0].className;

        if (b4Child == 'x' && b5Child == 'x' && b6Child == 'x') {
            declareWinner('x')
        } else if (b4Child == 'o' && b5Child == 'o' && b6Child == 'o') {
            declareWinner('o')
        }
    }
    if (b1.children.length > 0 && b4.children.length > 0 && b7.children.length > 0) {
        let b1Child = b1.children[0].className;
        let b4Child = b4.children[0].className;
        let b7Child = b7.children[0].className;

        if (b1Child == 'x' && b4Child == 'x' && b7Child == 'x') {
            declareWinner('x')
        } else if (b1Child == 'o' && b4Child == 'o' && b7Child == 'o') {
            declareWinner('o')
        }
    }

    //vertical

    if (b7.children.length > 0 && b8.children.length > 0 && b9.children.length > 0) {
        let b7Child = b7.children[0].className;
        let b8Child = b8.children[0].className;
        let b9Child = b9.children[0].className;

        if (b7Child == 'x' && b8Child == 'x' && b9Child == 'x') {
            declareWinner('x')
        } else if (b7Child == 'o' && b8Child == 'o' && b9Child == 'o') {
            declareWinner('o')
        }
    }

    if (b2.children.length > 0 && b5.children.length > 0 && b8.children.length > 0) {
        let b2Child = b2.children[0].className;
        let b5Child = b5.children[0].className;
        let b8Child = b8.children[0].className;

        if (b2Child == 'x' && b5Child == 'x' && b8Child == 'x') {
            declareWinner('x')
        } else if (b2Child == 'o' && b5Child == 'o' && b8Child == 'o') {
            declareWinner('o')
        }
    }

    if (b3.children.length > 0 && b6.children.length > 0 && b9.children.length > 0) {
        let b3Child = b3.children[0].className;
        let b6Child = b6.children[0].className;
        let b9Child = b9.children[0].className;

        if (b3Child == 'x' && b6Child == 'x' && b9Child == 'x') {
            declareWinner('x')
        } else if (b3Child == 'o' && b6Child == 'o' && b9Child == 'o') {
            declareWinner('o')
        }
    }

    if (b1.children.length > 0 && b5.children.length > 0 && b9.children.length > 0) {
        let b1Child = b1.children[0].className;
        let b5Child = b5.children[0].className;
        let b9Child = b9.children[0].className;

        if (b1Child == 'x' && b5Child == 'x' && b9Child == 'x') {
            declareWinner('x')
        } else if (b1Child == 'o' && b5Child == 'o' && b9Child == 'o') {
            declareWinner('o')
        }
    }


    if (b3.children.length > 0 && b5.children.length > 0 && b7.children.length > 0) {
        let b3Child = b3.children[0].className;
        let b5Child = b5.children[0].className;
        let b7Child = b7.children[0].className;

        if (b3Child == 'x' && b5Child == 'x' && b7Child == 'x') {
            declareWinner('x')
        } else if (b3Child == 'o' && b5Child == 'o' && b7Child == 'o') {
            declareWinner('o')
        }
    }

    //deu velha
    let counter = 0;

    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].children[0] != undefined) {
            counter++;
        }

        if (counter == 9) {
            declareWinner('deu velha')
        }
    }
}

// limpa o jogo, delcara vencedor e atualiza pontuação
function declareWinner(winner) {
    let scoreboardX = document.querySelector("#scoreboard-1")
    let scoreboardO = document.querySelector("#scoreboard-2")
    let msg = '';

    if (winner == 'x') {
        scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1
        msg = "O jogador 1 venceu!"
    } else if (winner == 'o') {
        scoreboardO.textContent = parseInt(scoreboardO.textContent) + 1
        msg = "O jogador 2 venceu!"
    } else {
        msg = "Deu velha!"
    }

    //exibe msg
    messageText.innerHTML = msg;
    messageContainer.classList.remove("hide")

    //esconde msg
    setTimeout(function(){
        messageContainer.classList.add("hide");
    }, 1500);


    //zera as jogadas
    player1 = 0;
    player2 = 0;

    //remove X e O
    let boxesToRemove = document.querySelectorAll(".box div");

    for(let i=0; i<boxesToRemove.length; i++){
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
    }

}

//executar a logica da jogada do CPU

function computerPlay(){
    let cloneO = o.cloneNode(true);
    let counter = 0;
    let preenchido = 0;

    for(let i=0; i<boxes.length; i++){
        let randomNumber= Math.floor(Math.random() * 5);

        // só preencher se estiver vazio o filho
        if(boxes[i].children[0] == undefined){
            if(randomNumber <=1){
                boxes[i].appendChild(cloneO);
                counter++;
                break;
            }
            // checagem de quantas estão preenchidas
        } else{
            preenchido++;
        }
    }

    if(counter==0 && preenchido < 9){
        computerPlay();
    }

}




