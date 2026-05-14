/*
Exercício 8
Crie uma classe FuncionarioEscola com:

nome
idade
salario
Crie as subclasses:

Professor
Secretario
Zelador
Cada uma deve ter uma função específica, por exemplo:

darAula()
organizarDocumentos()
limparAmbiente()
*/

class FuncionarioEscola {
    public nome: string;
    public idade: number;
    public salario: number;

    constructor(nome: string, idade: number, salario: number) {
        this.nome = nome;
        this.idade = idade;
        this.salario = salario;
    }

    exibirDados(): void {
        console.log(`Nome: ${this.nome}\nIdade: ${this.idade}\nSalário: R$ ${this.salario}\n`);
    }
}

class Professor extends FuncionarioEscola {
    public materia: string;

    constructor(nome: string, idade: number, salario: number, materia: string) {
        super(nome, idade, salario);
        this.materia = materia;
    }

    darAula(): void {
        console.log(`${this.nome} está dando aula de ${this.materia}.\n`);
    }
}

class Secretario extends FuncionarioEscola {
    public setor: string;

    constructor(nome: string, idade: number, salario: number, setor: string) {
        super(nome, idade, salario);
        this.setor = setor;
    }

    organizarDocumentos(): void {
        console.log(`${this.nome} está organizando documentos do setor ${this.setor}.\n`);
    }
}

class Zelador extends FuncionarioEscola {
    public area: string;

    constructor(nome: string, idade: number, salario: number, area: string) {
        super(nome, idade, salario);
        this.area = area;
    }

    limparAmbiente(): void {
        console.log(`${this.nome} está limpando a área ${this.area}.\n`);
    }
}

const professor1 = new Professor("Nelson", 10000, 8000, "POO");
professor1.exibirDados();
professor1.darAula();

const secretario1 = new Secretario("Darth Vader", 32, 3000, "Conquistar Mundos");
secretario1.exibirDados();
secretario1.organizarDocumentos();

const zelador1 = new Zelador("Obiwan", 50, 2200, "Pátio");
zelador1.exibirDados();
zelador1.limparAmbiente();

export {};