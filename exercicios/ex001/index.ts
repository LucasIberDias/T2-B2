/*
Exercício 1
Crie uma classe Pessoa com:

nome
idade
método apresentar()
Depois crie uma classe Aluno que herda de Pessoa e adicione:

matricula
curso
Crie um método exibirDadosAluno() para mostrar todas as informações.
*/


class Pessoa {
    public nome: string;
    public idade: number;

    apresentar() {
        console.log(`
            Nome: ${this.nome} \n 
            Idade: ${this.idade} \n`
        );
    }

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }
}

class Aluno extends Pessoa {
    public matricula: string;
    public curso: string;

    exibirDadosAluno() {
        console.log(`
            Nome do Aluno: ${this.nome} \n 
            Idade do Aluno: ${this.idade} \n
            Curso do Aluno: ${this.curso} \n
            Mátricula do Aluno: ${this.matricula} \n
        `);
    }

    constructor(nome: string, idade: number, matricula: string, curso: string){
        super(nome, idade);

        this.matricula = matricula;
        this.curso = curso;
    }
}

let lucas = new Aluno("Lucas Iber Dias", 19, "20251CAS", "TADS");

lucas.apresentar();

lucas.exibirDadosAluno();