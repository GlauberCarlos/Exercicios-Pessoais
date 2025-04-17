
let pedra = false
let papel = false
let tesoura = false

document.getElementById("pedra").addEventListener("click", function(){
  pedra = true;
  papel = false;
  tesoura = false;
  document.getElementById("pedra").classList.add("clicked");
  document.getElementById("papel").classList.remove("clicked");
  document.getElementById("tesoura").classList.remove("clicked");
});

document.getElementById("papel").addEventListener("click", function(){
  papel = true;
  pedra = false;
  tesoura = false;
  document.getElementById("papel").classList.add("clicked");
  document.getElementById("pedra").classList.remove("clicked");
  document.getElementById("tesoura").classList.remove("clicked");
});

document.getElementById("tesoura").addEventListener("click", function(){
  tesoura = true;
  pedra = false;
  papel = false;
  document.getElementById("tesoura").classList.add("clicked");
  document.getElementById("papel").classList.remove("clicked");
  document.getElementById("pedra").classList.remove("clicked");
});

// BOTAO JOGAR

document.getElementById("jogar").addEventListener("click", function()
{
  if (pedra == false && papel == false && tesoura == false)
  {
    alert("Escolha uma Opção");
    return;
  }

  //desativar botoes quando clica no play
  document.getElementById("pedra").disabled = true;
  document.getElementById("papel").disabled = true;
  document.getElementById("tesoura").disabled = true;
  document.getElementById("jogar").disabled = true;

  const escolhaPC = Math.floor(Math.random () * 3); // 0 = Pedra, 1 = Papel, 2 = Tesoura
  console.log ("escolha do PC " + escolhaPC);

  if (pedra == true)
  {
  switch (escolhaPC) 
    {
    case 0: 
      document.getElementById("vencedor").innerHTML = "Escolha do PC:<br><br>PEDRA.<br><br>Houve um Empate";
      break;
    case 1: 
      document.getElementById("vencedor").innerHTML = "Escolha do PC:<br><br>PAPEL.<br><br>Você perdeu";
      break;
    case 2: 
      document.getElementById("vencedor").innerHTML = "Escolha do PC:<br><br>Tesoura.<br><br>Você ganhou";    
      break;
    }
  }

  if (papel == true)
  {
  switch (escolhaPC) 
    {
    case 0: 
      document.getElementById("vencedor").innerHTML = "Escolha do PC:<br><br>PEDRA.<br><br>Você ganhou";
      break;
    case 1: 
      document.getElementById("vencedor").innerHTML = "Escolha do PC:<br><br>PAPEL.<br><br>Houve um Empate";
      break;
    case 2: 
      document.getElementById("vencedor").innerHTML = "Escolha do PC:<br><br>Tesoura.<br><br>Você perdeu";    
      break;
    }
  }

  if (tesoura == true)
  {
  switch (escolhaPC) 
    {
    case 0: 
      document.getElementById("vencedor").innerHTML = "Escolha do PC:<br><br>PEDRA.<br><br>Você perdeu";
      break;
    case 1: 
      document.getElementById("vencedor").innerHTML = "Escolha do PC:<br><br>PAPEL.<br><br>Você ganhou";
      break;
    case 2: 
      document.getElementById("vencedor").innerHTML = "Escolha do PC:<br><br>Tesoura.<br><br>Houve um Empate";    
      break;
    }
  }

  setTimeout(function() 
  {
    document.getElementById("pedra").classList.remove("clicked");
    document.getElementById("papel").classList.remove("clicked");
    document.getElementById("tesoura").classList.remove("clicked");
    document.getElementById("vencedor").textContent = " ";
    pedra = false;
    papel = false;
    tesoura = false;
    document.getElementById("pedra").disabled = false;
    document.getElementById("papel").disabled = false;
    document.getElementById("tesoura").disabled = false;
    document.getElementById("jogar").disabled = false;
  }, 4000); // lembrar de ajustar o tempo
})


// falta adicionar e remover as imagens