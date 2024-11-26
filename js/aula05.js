/* Arquivo JS aula 05 Objetos */

// CRIAR OBJETO
let pessoa = { // usa a { para colocar o conteudo do objeto }
    nome   : 'Edson', //virgula para separar as propriedades do objeto, na ultima nao precisa
    idade  : 40, //o conteúdo da propriedade chama-se valor
    peso   : 83.5,
    altura : 1.75,
    doador : false,
}

let produtos = {
    descricao : [], // [] um valor de array
    preco : []
}

const carros = {
    marca : ['Ford', 'Fiat', 'GM'],
    modelo : ['Ka', 'Uno', 'Corsa'],
    ano : [1999, 2005, 2010] 
}

// como acessar uma propriedade usando .
/*
pessoa.nome     //exibe a propriedade pessoa e o nome ('Edson')
pessoa.idade
pessoa.peso
pessoa.altura
*/

// ACESSAR PROPRIEDADE usando ['']
/*
pessoa['nome']
pessoa['idade']
pessoa['peso']
pessoa['altura']
*/

// OPERAÇÃO IMC = peso / (altura * altura)
let imc = pessoa.peso / (pessoa.altura * pessoa.altura)

// .toFixed(X)
// limita o numero de casas decimais
console.log("IMC " + imc.toFixed(2))

// ALTERAR/ATUALIZAR VALOR de propriedade
pessoa.nome = "Edson Maia"
produtos.descricao = ['Arroz'] //Como o array ta vazio, o valor é inserido, senao iria sobrescrever
produtos.preco = [4.99]

// Usando spreed operator
produtos.descricao = [...produtos.descricao, 'Feijão', 'Trigo'] // recebe um copia de produtos + feijao e trigo
produtos.preco = [...produtos.preco, 9.99, 4.79]

// Usando spreed operator em objetos const
carros.marca  = [...carros.marca, 'WV']
carros.modelo = [...carros.modelo, 'Fusca']
carros.ano    = [...carros.ano, '1979']
