//


let lutador = 'Fedor Vlad'
let nacionalidade = "Russo"
let idade = 44
let altura = 1.83
let peso = 106

document.write(`Lutador: ${lutador} <br>`)
document.write(`Nacionalidade: ${nacionalidade} <br>`)
document.write(`Idade: ${idade} anos<br>`)
document.write(`Peso: ${peso} Kg<br>`)
document.write(`Altura: ${altura} m<br>`)
// ou   document.write("Altura: " +altura+ " m<br>")

//

document.write("<h1 style> Frase do dia </h1>")

const dia = 10
const mes = 9
const ano = 2021
const frase = "Seja curioso. Leia de tudo ..."
const autoria = "Aaron Swartz"

document.write(`${dia}/${mes}/${ano}<br>`)
// ou   document.write(dia+"/"+mes+"/"+ano+"<br>")
document.write(`${frase}<br>`)
document.write(`${autoria}<br>`)

//

document.write("<h1 style> Array de Meses do Ano</h1>")

var meses = Array(1)
meses[0] = "Fevereiro"
meses.unshift("Janeiro")
meses.push("Março")

document.write(meses.join(", ") + ", ...")

//

document.write("<h1 style>Objeto Jogo</h1>")

let jogo = {
    nomeJogo : "League of Legends - LOL",
    desenvolvido : "Riot Games",
    anoLancamento : 2009
}

document.write("Jogo: " +jogo.nomeJogo +"<br>")
document.write("Desenvolvido por: " +jogo.desenvolvido +"<br>")
document.write("Ano do Lançamento: " +jogo.anoLancamento +"<br>")
