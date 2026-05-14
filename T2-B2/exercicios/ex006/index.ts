/*
Exercício 6
Monte um pequeno sistema com as classes:

Pessoa
Aluno
Professor
Coordenador
Sugestão:

Pessoa é a superclasse;
as demais herdam de Pessoa.
Cada classe deve possuir pelo menos:

um atributo próprio;
um método próprio;
uso adequado de construtor com super(...).
*/

/*
Exercício 6
Monte um pequeno sistema com as classes:

Pessoa
Aluno
Professor
Coordenador

Sugestão:

Pessoa é a superclasse;
as demais herdam de Pessoa.

Cada classe deve possuir pelo menos:

um atributo próprio;
um método próprio;
uso adequado de construtor com super(...).
*/

class Pessoa {
    public nome: string;
    public idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(): void {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos. \n`);
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

    estudar(): void {
        console.log(`${this.nome} está estudando ${this.curso}. \n`);
    }
}

class Professor extends Pessoa {
    public disciplina: string;

    constructor(nome: string, idade: number, disciplina: string) {
        super(nome, idade);

        this.disciplina = disciplina;
    }

    ensinar(): void {
        console.log(`${this.nome} está ensinando ${this.disciplina}. \n`);
    }
}

class Coordenador extends Pessoa {
    public setor: string;

    constructor(nome: string, idade: number, setor: string) {
        super(nome, idade);

        this.setor = setor;
    }

    coordenar(): void {
        console.log(`${this.nome} está coordenando o setor ${this.setor}. \n`);
    }
}

const aluno1 = new Aluno("Lucas", 18, "2025001", "ADS");

aluno1.apresentar();
aluno1.estudar();


const professor1 = new Professor("Nelson", 10000, "Programação");

professor1.apresentar();
professor1.ensinar();


const coordenador1 = new Coordenador("Mariana", 35, "Tecnologia");

coordenador1.apresentar();
coordenador1.coordenar();

export{}