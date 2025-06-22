
var produto = "Mouse";
var preco = 59.90;
var disponivel = true;
function exibirProduto(produto, preco, disponivel) {
    console.log("Produto: ".concat(produto, " - Pre\u00E7o: R$").concat(preco, " - Dispon\u00EDvel: ").concat(disponivel ? 'Sim' : 'Não'));
}
exibirProduto(produto, preco, disponivel);
