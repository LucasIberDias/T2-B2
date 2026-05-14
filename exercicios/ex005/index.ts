/*
Exercício 5
Crie:

uma classe Pessoa
uma classe Aluno
uma classe Professor
Requisitos:

Pessoa deve possuir nome e idade;
Aluno deve possuir matricula e curso;
Professor deve possuir disciplina.
Implemente:

Aluno.exibirDadosAluno()
Professor.apresentar() sobrescrevendo o método herdado
*/

class Pessoa {
    public nome: string;
    public idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(): void {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

class Aluno extends Pessoa {
    public matricula: string;
    public curso: string;

    constructor(nome: string, idade: number, matricula: string, curso: string) {
        super(nome, idade);

        this.matricula = matricula;
        this.curso = curso;
    }

    exibirDadosAluno(): void {
        console.log(`\n Nome: ${this.nome} \n Idade: ${this.idade} \n Matrícula: ${this.matricula} \n Curso: ${this.curso} \n`);
    }
}

class Professor extends Pessoa {
    public disciplina: string;

    constructor(nome: string, idade: number, disciplina: string) {
        super(nome, idade);

        this.disciplina = disciplina;
    }

    apresentar(): void {
        console.log(`\n Professor: ${this.nome} \n Idade: ${this.idade} \n Disciplina: ${this.disciplina} \n`);
    }
}

const aluno1 = new Aluno("Lucas", 18, "2025001", "ADS");

aluno1.exibirDadosAluno();

const professor1 = new Professor("Carlos", 40, "Programação");

professor1.apresentar();

export{}