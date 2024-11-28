//let i = 0;

let history = [];

document.getElementById("generate").addEventListener("click", function()
    {


  
        const min = parseInt(document.getElementById("min").value);
        const max = parseInt(document.getElementById("max").value);
        
        if (isNaN(min) || isNaN(max))
            {
                alert ("Por favor, insira um número válido");
                return;
            }
        
        if (min >= max)
            {
                alert ("O valor mínimo deve ser menor do que o valor máximo");
                return;
            }

        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        document.getElementById("randomNumber").textContent = randomNumber;

        history.unshift(randomNumber);

        document.getElementById("history").innerHTML += `${randomNumber}<br>`; // PARA ADD com quebra de linha

        //document.getElementById("history").textContent = history.join(", "); PARA ADICIONAR AO LADO COM VIRGULA SEPARANDO
     
        
    }    
)

