function capitalizar(frase) {
    return frase
        .split(" ")
        .map(function (palavra) { return palavra.charAt(0).toUpperCase() + palavra.slice(1); })
        .join(" ");
}
console.log(capitalizar("aprendendo typescript com exemplos"));
