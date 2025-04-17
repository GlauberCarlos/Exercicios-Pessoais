let listaNumeros = []
let minAnterior = 0 
let maxAnterior = 0
let posicao = 0
let tamLista = 0
let history = []
let sorteado = 0

document.getElementById("generate").addEventListener("click", function(){

    let min = parseInt(document.getElementById("min").value)
    let max = parseInt(document.getElementById("max").value)

    if (isNaN(min) || isNaN(max))
        { alert ("Por favor, insira um número válido")
            return  }
        
    if (min >= max)        
        { alert ("O valor mínimo deve ser menor do que o máximo")
            return  }

    if (min !== minAnterior || max !== maxAnterior)
    {
        minAnterior = min
        maxAnterior = max
        
        document.getElementById("history").textContent = ""

        listaNumeros = [min]
        tamLista = max - min + 1
        for (let i=1; i<tamLista; i++){
            min += 1;
            listaNumeros.push(min)
        }
        posicao = Math.floor(Math.random() * tamLista)
        
        console.log(listaNumeros)
        console.log("posicao " + posicao)
        console.log(listaNumeros[posicao])
        
        document.getElementById("randomNumber").textContent = listaNumeros[posicao]
        
        history.unshift(listaNumeros[posicao])
        document.getElementById("history").textContent = listaNumeros[posicao]

        listaNumeros.splice(posicao,1)
        tamLista --
        console.log(listaNumeros)
    }

    else 
    {   
        if (tamLista > 0)
        {
            posicao = Math.floor(Math.random() * tamLista)
            console.log(listaNumeros)
            console.log("posicao " + posicao)
            console.log(listaNumeros[posicao])
            
            document.getElementById("randomNumber").textContent = listaNumeros[posicao]

            history.unshift(listaNumeros[posicao])
            document.getElementById("history").textContent += `, ${listaNumeros[posicao]}`

            listaNumeros.splice(posicao,1)
            tamLista --
            console.log(listaNumeros)
        }
        else{
            alert ("Não há mais números para sortear")
            return
        }
    }
})

// CODIGO ANTIGO

// let history = [];

// document.getElementById("generate").addEventListener("click", function()
//     {


  
//         const min = parseInt(document.getElementById("min").value);
//         const max = parseInt(document.getElementById("max").value);
        
//         if (isNaN(min) || isNaN(max))
//             {
//                 alert ("Por favor, insira um número válido");
//                 return;
//             }
        
//         if (min >= max)
//             {
//                 alert ("O valor mínimo deve ser menor do que o valor máximo");
//                 return;
//             }

//         const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; //(max - min + 1) *calcula a quantid de possibilidades *
//         document.getElementById("randomNumber").textContent = randomNumber;

//         history.unshift(randomNumber);

//         document.getElementById("history").innerHTML += `${randomNumber}<br>`; // PARA ADD com quebra de linha

//         //document.getElementById("history").textContent = history.join(", "); PARA ADICIONAR AO LADO COM VIRGULA SEPARANDO
     
        
//     }    
// )