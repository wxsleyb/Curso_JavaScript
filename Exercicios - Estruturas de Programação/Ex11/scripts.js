let idade = prompt("Qual sua idade?")
let CNH = prompt("Você tem CNH? Digite 'S' ou 'N' ")

if (CNH != "S" && CNH != "N") {
    console.log("Você não digitou uma opção elegível")
}

if (idade >= 18 && CNH == "N") {
    console.log("Você não possui CNH, não pode dirigir")
} else if (idade >= 18 && CNH == "S") {
    console.log("Pode dirigir")
} else if (idade < 18 && CNH == "N") {
    console.log("Você é menor de idade e não pode obter CNH no momento")
}