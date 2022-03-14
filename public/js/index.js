const fundo = ['#9f5e00', '#9F2C2F', '#0E5E0A']
const imagens = ['images/index/banner_2.jpeg', 'images/index/banner_1.jpeg', 'images/index/banner_3.jpeg']
var indice = 0

window.onload = function (e) {
    setInterval(trocarFundoImagem, 5000)
}

function trocarFundo() {
    document.getElementById("fundo_principal").style.backgroundColor = fundo[indice];
    indice++;
    if (indice >= fundo.length) {
        indice = 0;
    }
}

function trocarFundoImagem() {
    document.getElementById("fundo_principal").style.backgroundImage = `url(${imagens[indice]})`;
    indice++;
    if (indice >= imagens.length) {
        indice = 0;
    }
}