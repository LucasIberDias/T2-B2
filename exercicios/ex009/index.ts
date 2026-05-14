/*
Exercício 9
Crie um sistema completo de cadastro com as classes:

Pessoa
Aluno
Professor

Requisitos:

usar protected em nome e idade;
usar private em atributos específicos como matricula e disciplina;
usar extends;
usar super(...);
sobrescrever pelo menos um método;
criar pelo menos 2 objetos de cada subclasse;
exibir todos os dados no terminal.
*/

class Pessoa {
    protected nome: string;
    protected idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    exibirDados(): void {
        console.log(`Nome: ${this.nome}\nIdade: ${this.idade}\n`);
    }
}

class Aluno extends Pessoa {
    private matricula: string;
    private curso: string;

    constructor(
        nome: string,
        idade: number,
        matricula: string,
        curso: string
    ) {
        super(nome, idade);
        this.matricula = matricula;
        this.curso = curso;
    }

    estudar(): void {
        console.log(`${this.nome} está estudando ${this.curso}.\n`);
    }

    exibirDados(): void {
        console.log(
            `===== ALUNO =====\nNome: ${this.nome}\nIdade: ${this.idade}\nMatrícula: ${this.matricula}\nCurso: ${this.curso}\n`
        );
    }
}

class Professor extends Pessoa {
    private disciplina: string;
    private salario: number;

    constructor(
        nome: string,
        idade: number,
        disciplina: string,
        salario: number
    ) {
        super(nome, idade);
        this.disciplina = disciplina;
        this.salario = salario;
    }

    darAula(): void {
        console.log(`${this.nome} está dando aula de ${this.disciplina}.\n`);
    }

    exibirDados(): void {
        console.log(
            `===== PROFESSOR =====\nNome: ${this.nome}\nIdade: ${this.idade}\nDisciplina: ${this.disciplina}\nSalário: R$ ${this.salario}\n`
        );
    }
}

const aluno1 = new Aluno("Lucas", 19, "2025001", "ADS");

const aluno2 = new Aluno("Marina", 20, "2025002", "Engenharia");


const professor1 = new Professor("Han Solo", 45, "Pilotagem Estelar", 650000);

const professor2 = new Professor("Nelson", 10000, "POO", 7200);

aluno1.exibirDados();
aluno1.estudar();

aluno2.exibirDados();
aluno2.estudar();

professor1.exibirDados();
professor1.darAula();

professor2.exibirDados();
professor2.darAula();

export {};