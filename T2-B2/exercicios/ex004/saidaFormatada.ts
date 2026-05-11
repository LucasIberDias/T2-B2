/* 
4. Saída formatada no terminal
Crie para:

nome do aluno;
nota 1;
nota 2;
média.
Mostre tudo no terminal usando template string.
*/

import { log } from "console";

let nomeDoAluno : string = "Lucas Iber Dias"
let nota1 : number = 90;
let nota2 : number = 99;
let media : number = nota1 + nota2 / 2;

console.log(`Aluno: ${nomeDoAluno} \n Nota 1: ${nota1} \n Nota 2: ${nota2} \n Média: ${media}`);
