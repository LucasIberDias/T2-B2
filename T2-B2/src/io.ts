//Professor, porfavor desconsidera os comentários, eu utilizo para organizar a lógica do código e aprender melhor um pouco do que está sendo feito.

//import do readline
import * as readline from "readline";

//Eu sei que o correto é chamar de readline/rl, mas como estou acustumado com scanner vou usar apenas por enquanto para não me perder no código

//let por que não vai ficar mudando o valor dela, o null = null para dizer que não foi criada ainda, e que vai mudar o valor futuramente? não entendi direito esta parte. 
let scanner: readline.Interface | null = null;


function getScanner(): readline.Interface {
  //esse if é pra verificar se o scanner não existe ainda, e se ele não existe o programa cria
  if (!scanner) {
    //aqui ele cria a interface do terminal
    scanner = readline.createInterface({
      //define de onde está vindo os daods nesse caso é o teclado
      input: process.stdin,
      //define onde o programa escreve que é o terminal
      output: process.stdout,
    });
  }
  //retorna a interface criada
  return scanner;
}

//esse export é só pra poder usar em outro arquivo, e o texto é o parametro que vai aparecer no terminal. o promise<string> é uma promessa de que vai ser retornado uma string "ainda não entendi direito o uso dela, mas estou tentando"
export function perguntar(texto: string): Promise<string> {
  //aqui é feito onde a promessa é criada, o resolve é que será retornado depois e esse => é uma air function, acho que é assim que o professor falou, que é uma função que só vai ser utilizada aqui, e em nenhum outro lugar
  return new Promise((resolve) => {
    //getscanner pega a função lá de cima onde cria a interface do terminal e define de onde está vindo os dados e onde que vai escrever

    //esse .question pelo que entendi ele mostra a pergunta que é o passado em texto e o resposta é o texto que vai ser digitado pelo usuario
    getScanner().question(texto, (resposta: string) => resolve(resposta));
    //aqui em cima o resolve entrega a resposta pra promisse de cima que retorna o valor da resposta pra função
  });
}

//função pra fechar o scanner como se fosse o scanner.close do java só que em forma de função foi oq eu entendi, ele é void por que não tem retorno
export function fecharIO(): void {
  //esse ? tive que ver com o chatgpt ele é um optional chaining ele evita erro caso o scanner seja nulo, o .close fecha o scanner pra voltar o terminal/console ao normal
  scanner?.close();
  //define o scanner como nulo novamente
  scanner = null;
}