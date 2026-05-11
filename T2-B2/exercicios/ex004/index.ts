/* 
Exercício 4
Crie uma classe Conta com:

atributo private saldo
construtor para inicializar o saldo
Depois crie uma classe ContaPremium que herda de Conta e tente acessar saldo diretamente dentro de um método.

Responda:

O código funciona?
Não, pois o saldo é privado.

Por que private impede esse acesso?
Private só pode ser acessado dentro da própria classe, logo as herdadas não podem acessar

O que mudaria se o atributo fosse protected?
Funcionaria o código, já que protected pode ser acessado dentro da classe e dentro das classes herdadas

Dica: Usar comentários para as perguntas e repostas.
*/



class Conta{
    private saldo: number;

    constructor(saldo: number){
        this.saldo = saldo;
    }
}

class ContaPremium extends Conta{
    exibirSaldo(){
        console.log(`Saldo: "{this.saldo}" deixei assim pra não ficar apontando erro`);
    }
}