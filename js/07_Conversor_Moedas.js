let valorEmReal = document.querySelector('#valorEmReal')
let valorEmDolar = document.querySelector('#valorEmDolar')
let valorEmEuro = document.querySelector('#valorEmEuro')

function zerarValores() {
    valorEmDolar.value = 0;
    valorEmEuro.value = 0;
    valorEmReal.value = 0;
}

//Cotacoes para REAL
let cotDolar   = 5.31
let cotEuro    = 6.23

function ativarReal() {
    const real = parseFloat(valorEmReal.value) || 0;
    if (valorEmReal.value > 0) {
        valorEmDolar.value = (real / cotDolar).toFixed(2);
        valorEmEuro.value = (real / cotEuro).toFixed(2);
    }
    else {
        zerarValores();
    }
}
function ativarDolar() {
    const dolar = parseFloat(valorEmDolar.value) || 0;
    if (valorEmDolar.value > 0) {
        valorEmReal.value = (dolar * cotDolar).toFixed(2);
        valorEmEuro.value = (cotDolar / cotEuro * dolar).toFixed(2);
    }
    else {
        zerarValores();
    }
}
function ativarEuro() {
    const euro = parseFloat(valorEmEuro.value) || 0;
        if (valorEmEuro.value > 0) {
            valorEmReal.value = (euro * cotEuro).toFixed(2);
            valorEmDolar.value = (cotEuro / cotDolar * euro).toFixed(2);
        }
        else {
            zerarValores();
        }
    }



