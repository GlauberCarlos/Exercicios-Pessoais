// lista de caracteres disponiveis

const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numeros = '0123456789';
const simbolos = '!@#$%^&*()_+[]{},.<>?';

let senhaGerada = document.getElementById("senhaGerada");

function gerarSenha() {
    const maiBox = document.getElementById("maiBox");
    const marcadoMai = maiBox.checked;
    const minBox = document.getElementById("minBox");
    const marcadoMin = minBox.checked;
    const numBox = document.getElementById("numBox");
    const marcadoNum = numBox.checked;
    const simBox = document.getElementById("simBox");
    const marcadoSim = simBox.checked;
    console.log(marcadoMai);
    console.log(marcadoMin);
    console.log(marcadoNum);
    console.log(marcadoSim);
    const lenghtSenha = document.getElementById("lenghtSenha");
    console.log(lenghtSenha.value);
    
    // limpa os tipos de caracteres disponiveis
    let caractDisp = "";
    // atualiza a lista com as possibilidades de caracteres
    if (marcadoMai) {
        caractDisp += letrasMaiusculas;
    }
    if (marcadoMin) {
        caractDisp += letrasMinusculas;
    }
    if (marcadoNum) {
        caractDisp += numeros;
    }
    if (marcadoSim) {
        caractDisp += simbolos;
    }

    console.log(caractDisp);

    // limpa a senha
    let senha = "";

    // gera de acordo com a quantidade de caracteres definida
    for (let i = 0 ; i < lenghtSenha.value; i++) {
        let indiceSorteado = Math.floor(Math.random() * caractDisp.length);
        console.log(indiceSorteado);
        senha += caractDisp[indiceSorteado];
    }

    senhaGerada.value = senha.toString();
}

