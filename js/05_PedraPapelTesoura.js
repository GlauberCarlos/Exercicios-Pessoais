
let pedra = false
let papel = false
let tesoura = false

document.getElementById("pedra").addEventListener("click", function(){
  pedra = true;
  papel = false;
  tesoura = false;
  document.getElementById("pedra").classList.add("clicked");
});

document.getElementById("papel").addEventListener("click", function(){
  papel = true;
  pedra = false;
  tesoura = false;
  document.getElementById("papel").classList.add("clicked");
});

document.getElementById("tesoura").addEventListener("click", function(){
  tesoura = true;
  pedra = false;
  papel = false;
  document.getElementById("tesoura").classList.add("clicked");
});

document.getElementById("jogar").addEventListener("click", function()
{
  if (pedra == false && papel == false && tesoura == false)
  {
    alert("Escolha uma Opção");
    return;
  }

  const escolhaPC = Math.floor(Math.random () * 3); // 0 = Pedra, 1 = Papel, 2 = Tesoura
  console.log (escolhaPC);

  if (pedra == true)
  {
  switch (escolhaPC) 
    {
    case 0: 
      document.getElementById("result").textContent = "Empate";
      break;
    case 1: 
      document.getElementById("result").textContent = "Você perdeu";
      break;
    case 2: 
      document.getElementById("result").textContent = "Você ganhou";    
      break;
    }
  }

  if (papel == true)
  {
  switch (escolhaPC) 
    {
    case 0: 
      document.getElementById("result").textContent = "Você ganhou";
      break;
    case 1: 
      document.getElementById("result").textContent = "Empate";
      break;
    case 2: 
      document.getElementById("result").textContent = "Você perdeu";    
      break;
    }
  }

  if (tesoura == true)
  {
  switch (escolhaPC) 
    {
    case 0: 
      document.getElementById("result").textContent = "Você perdeu";
      break;
    case 1: 
      document.getElementById("result").textContent = "Você ganhou";
      break;
    case 2: 
      document.getElementById("result").textContent = "Empate";    
      break;
    }
  }

  setTimeout(function() 
  {
    document.getElementById("pedra").classList.remove("clicked");
    document.getElementById("papel").classList.remove("clicked");
    document.getElementById("tesoura").classList.remove("clicked");
    document.getElementById("result").textContent = " ";
    pedra = false;
    papel = false;
    tesoura = false;
  }, 4000); // lembrar de ajustar o tempo
})


// falta adicionar e remover as imagens