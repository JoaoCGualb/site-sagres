firebase.storage();

const fundo = ['#9f5e00', '#9F2C2F', '#0E5E0A']
const imagens = ['images/facebook-logo.png', 'images/instagram-logo.png']
var indice = 0

window.onload = function(e) {
    setInterval(trocarFundoImagem, 1000)
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