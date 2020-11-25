const slide = document.querySelector('#myRange');
const numAtual = document.querySelector('#myText');
const numExtenso = document.querySelector('#myText2');


window.addEventListener('load', () => { start() });

function start() {
    slide.addEventListener('input', function() {
        numAtual.value = this.value;

        numberExtenso(this.value);
    });
}

function numberExtenso(num) {
    const unidades = ["Zero", "Um", "Dois", "Três", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove"];
    const especiais = ["Dez", "Onze", "Doze", "Treze", "Catorze", "Quinze", "Dezeseis", "Dezsete", "Dezoito", "Dezenove"];
    const dezenas = ["Vinte", "Trinta", "Quarenta", "Cinquenta", "Sessenta", "Setenta", "Oitenta", "Noventa"];
    const centenas = ["Cem", "Duzentos", "Trezentos", "Quatrocentos", "Quinhetos", "Seiscentos", "Setecentos", "Oitocentos", "Novecentos"];


    if (num.length === 1) {
        numExtenso.value = (unidades[num[0]]);
    } else if (num.length === 2) {

        if ((num[0] == '1') && (num[1] == '0' || num[1] == '1' || num[1] == '2' || num[1] == '3' || num[1] == '4' || num[1] == '5' || num[1] == '6' || num[1] == '7' || num[1] == '8' || num[1] == '9')) {
            numExtenso.value = (especiais[parseInt(num[1])]);
        } else if ((num[0] == '2' || num[0] == '3' || num[0] == '4' || num[0] == '5' || num[0] == '6' || num[0] == '7' || num[0] == '8' || num[0] == '9') && num[1] == '0') {
            numExtenso.value = (dezenas[parseInt(num[0] - 2)]);
        } else {
            numExtenso.value = (dezenas[parseInt(num[0] - 2)] + " e " + unidades[parseInt(num[1])]);
        }
    } else if (num.length === 3) {

        if ((num[0] == '1' || num[0] == '2' || num[0] == '3' || num[0] == '4' || num[0] == '5' || num[0] == '6' || num[0] == '7' || num[0] == '8' || num[0] == '9') && (num[1] == '0' && num[2] == '0')) {
            numExtenso.value = (centenas[parseInt(num[0] - 1)])
        } else if ((num[0] == '2' || num[0] == '3' || num[0] == '4' || num[0] == '5' || num[0] == '6' || num[0] == '7' || num[0] == '8' || num[0] == '9') && (num[1] == '1') && ((num[2] == '1' || num[2] == '2' || num[2] == '3' || num[2] == '4' || num[2] == '5' || num[2] == '6' || num[2] == '7' || num[2] == '8' || num[2] == '9'))) {
            numExtenso.value = (centenas[parseInt(num[0] - 1)] + " e " + especiais[parseInt(num[2])])
        } else if ((num[0] == '2' || num[0] == '3' || num[0] == '4' || num[0] == '5' || num[0] == '6' || num[0] == '7' || num[0] == '8' || num[0] == '9') && (num[1] != '1')) {
            numExtenso.value = (centenas[parseInt(num[0] - 1)] + " e " + dezenas[parseInt(num[1] - 2)] + " e " + unidades[parseInt(num[2])]);
        } else if ((num[0] == '1') && (num[1] == '1') && (num[2] == '1' || num[2] == '2' || num[2] == '3' || num[2] == '4' || num[2] == '5' || num[2] == '6' || num[2] == '7' || num[2] == '8' || num[2] == '9')) {
            numExtenso.value = ("Cento e " + especiais[parseInt(num[2])])
        } else if ((num[0] == '1') && (num[1] != '1') && (num[2] != '0')) {
            numExtenso.value = ("Cento e " + dezenas[parseInt(num[1] - 2)] + " e " + unidades[parseInt(num[2])]);
        }
    }
}