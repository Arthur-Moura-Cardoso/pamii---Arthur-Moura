//declarando variaveis
let nome: string = 'Arcthurous';
let idade: number = 17;
let estaAtivo: boolean = true;

//Arrays

let numeros: number[] = [1,2,3,4,5];
let nomes: string[] = ['Liza', 'Bruno', 'Carlos'];
let misto: (string | number)[] = ["liza", 21, 'Carlos', 32];
let misto2: Array<string | number > = ['Liza', 21, 'Carlos, 32'];

//Tulpas
let pessoa: [string, number] = ['Jane', 31];

//Union Types
let id: number | string = 123;
id = 'ABC123';

//Interfaces - são usadas para definir estrutura de objetos
interface Usuario {
    nome: string;
    idade: number;
    email?: string; //opicional
};

//utilizar eles fica assim
let novo_usuario: Usuario = {
    nome: 'Karina',
    idade: 22
};