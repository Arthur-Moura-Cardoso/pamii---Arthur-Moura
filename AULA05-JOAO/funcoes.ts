//Função que retorna tipos
function saudacao(nome:string): string {
    return `Olá, ${nome}`;
}

console.log(saudacao("Kleber"));

//interface para objeto Usuario
interface Usuario  {
    nome: string;
    idade: number;
    email?: string; //opicional
}

//utilizando a interface usuario fica assim
function exibirUsuario(usuario: Usuario): void {
    console.log(`Nome: ${usuario.nome}`)
    console.log(`Nome: ${usuario.idade}`)
}

exibirUsuario({nome: 'marcooooo', idade: 42})

//exemplo de uma função que retorna arrays e tem parametros opcionais
function listarNomes(nomer: string[]): void {
    nomes.forEach(nome => console.log(nome))

    listarNomes(['kleber', 'joao', 'pisni'])
}