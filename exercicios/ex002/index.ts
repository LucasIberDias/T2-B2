/*
Exercício 2
Crie:

uma classe Veiculo com os atributos marca e modelo;
uma classe Carro que herda de Veiculo e possui o atributo quantidadePortas.
O construtor de Carro deve usar o método construtor da superclasse para inicializar os atributos herdados.
*/

class Veiculo{
    public marca: string;
    public modelo: string;

    constructor(marca: string, modelo: string){
        this.marca = marca;
        this.modelo = modelo;
    }
}

class Carro extends Veiculo{
    public quantidadePortas: number;

    constructor(marca: string, modelo: string, quantidadePortas: number){
        super(marca, modelo);

        this.quantidadePortas = quantidadePortas;
    }
}

const carro1 = new Carro("Toyota", "Corolla", 4);

console.log(carro1);