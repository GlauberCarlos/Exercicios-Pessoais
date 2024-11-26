/* Arquivo JS aula 04 Array */

let produtos = ['Arroz', 'Feijão', 'Leite']
var codigos = Array(10, 20, 30)
var test =  Array(10) //cria array com 10 posições vazias "empty"
test[0] = "Oi" //insere o valor "Oi" no array test na posição 0
test[9] = "Tudo bem?"
test[10] = "Opa!" //cria o valor "Opa!" no array test na posição 10, já que a posição nao existia anteriormente 
let meses = ['Jan', 'Fev', 'Mar', 'Abr']
meses[0] = 'Janeiro' //substitui o valor na posição 0 do array meses

// ADICIONAR no final push = empurre
produtos.push('Açúcar', 'Trigo')
codigos.push(40, 50, 60, 70)
meses.push('Mai', 'Jun', 'Ago', '07')

// REMOVER do final pop = estourar
produtos.pop()
codigos.pop()
meses.pop()
meses.pop()

// ADICIONAR no inicio unshift
produtos.unshift('Uva', 'Maçã')

// REMOVER do inicio shift
produtos.shift()

// REMOVER de uma posicao especifica splice
// splice = emendar
// (posicao inicial, quantos remover)
codigos.splice(1, 3)

// COPIAR array slice = fatiar porção
// posicao inicial, quantos copiar
let meses1 = meses.slice() //copia tudo
let meses2 = meses.slice(0,3) //copia 3 elementos a partir da posicao 0

// VER TAMANHO DO ARRAY length comprimento
// meses.length
// meses1.length
// meses2.lenght

// spreed operator ... copiar o conteudo todo do array
let teste = [...produtos, 'Ovo', 'Pera'] //array teste = produto + os dois elementos novos

// ver indice de um valor no array
// let pos = nome_array.indexOf('Valor')
let pos = produtos.indexOf('Uva')