const carrinho = document.getElementById('carrinho');
const botaoSair = document.getElementById("fechar_carrinho");
const botaoCarrinho = document.getElementById("abrir_carrinho");

botaoSair.addEventListener("click", function() {
    console.log("3")
    carrinho.style.visibility = "hidden";
}, false);

botaoCarrinho.addEventListener("click", function() {
    console.log("Te")
    carrinho.style.visibility = "visible";
}, false);