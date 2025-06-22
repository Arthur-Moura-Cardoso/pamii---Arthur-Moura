var novo_livro = {
    titulo: "Menino do raio na testa",
    autor: "K.J. Roulingue",
    anoPublicacao: 1998
};
function exibirLivro(livro) {
    console.log("T\u00EDtulo: ".concat(livro.titulo, ", Autor: ").concat(livro.autor, ", Ano de Publica\u00E7\u00E3o: ").concat(livro.anoPublicacao));
}
exibirLivro(novo_livro);
