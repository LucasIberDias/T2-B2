/*
Exercício 3
Crie uma classe Funcionario com:

atributo protected nome
atributo protected salario
Depois crie uma classe Gerente que herda de Funcionario e implemente o método:

exibirDadosGerente()
Esse método deve acessar os atributos herdados diretamente e mostrá-los no terminal.
*/

class Funcionario{
    protected nome: string;
    protected salario: number;

    constructor(nome: string, salario: number){
        this.nome = nome;
        this.salario = salario;
    }
}

class Gerente extends Funcionario{
    exibirDadosGerente(){
        console.log(`Nome: ${this.nome} zn`);
    }

    constructor(nome: string, salario: number){
        super(nome, salario);
    }
}

let velhoChato = new Gerente("Homar", 5000);

console.log(velhoChato);
