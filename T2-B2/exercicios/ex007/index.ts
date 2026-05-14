/*
Exercício 7
Crie a hierarquia abaixo:

Veiculo
Carro
Moto
Caminhao
A classe Veiculo deve ter:

marca
modelo
método exibirDados()
Cada subclasse deve ter:

um atributo específico;
um método específico;
sobrescrita do método exibirDados().
*/

class Veiculo {
    public marca: string;
    public modelo: string;

    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
    }

    exibirDados(): void {
        console.log(`\n Marca: ${this.marca} \n Modelo: ${this.modelo} \n`);
    }
}

class Carro extends Veiculo {
    public quantidadePortas: number;

    constructor(marca: string, modelo: string, quantidadePortas: number) {
        super(marca, modelo);
        this.quantidadePortas = quantidadePortas;
    }

    abrirPorta(): void {
        console.log("O carro abriu a porta.");
    }

    exibirDados(): void {
        console.log(`\n CARRO \n Marca: ${this.marca} \n Modelo: ${this.modelo} \n Quantidade de portas: ${this.quantidadePortas} \n`);
    }
}

class Moto extends Veiculo {
    public cilindradas: number;

    constructor(marca: string, modelo: string, cilindradas: number) {
        super(marca, modelo);
        this.cilindradas = cilindradas;
    }

    empinar(): void {
        console.log("A moto empinou.");
    }

    exibirDados(): void {
        console.log(`
        \n MOTO \n Marca: ${this.marca} \n Modelo: ${this.modelo} \n Cilindradas: ${this.cilindradas}`);
    }
}

class Caminhao extends Veiculo {
    public capacidadeCarga: number;

    constructor(marca: string, modelo: string, capacidadeCarga: number) {
        super(marca, modelo);
        this.capacidadeCarga = capacidadeCarga;
    }

    carregar(): void {
        console.log("O caminhão está carregando.");
    }

    exibirDados(): void {
        console.log(`
        \n CAMINHÃO \n Marca: ${this.marca} \n \n Modelo: ${this.modelo} \n Capacidade de carga: ${this.capacidadeCarga} toneladas`);
    }
}

const carro1 = new Carro("Toyota", "Corolla", 4);
carro1.exibirDados();
carro1.abrirPorta();

const moto1 = new Moto("Honda", "CB 500", 500);
moto1.exibirDados();
moto1.empinar();

const caminhao1 = new Caminhao("Volvo", "FH", 20);
caminhao1.exibirDados();
caminhao1.carregar();

export {};