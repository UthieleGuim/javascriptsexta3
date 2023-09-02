/*1) Registro de idade no console: Sua tarefa é usar a função console.log()
para imprimir a sua idade no console do navegador. console.log() é
uma função do JavaScript usada para imprimir a saída em um
console, geralmente útil para depuração. Consulte a documentação

oficial para mais detalhes:*/


console.log(28);


/*2) Registrar o número de semanas de programação: Agora, registre o
número de semanas que você programou usando a mesma função
console.log().*/

console.log("Esse mês programei 1 vez");

/*3) Usando comentários: Comentários são anotações que você pode
adicionar ao seu código que não são executadas. Use um comentário
de várias linhas /* Comentário *//* em seu código. Eles são úteis para
explicar o que seu código faz. Consulte a documentação oficial sobre

comentários:*/






/*4) Criando variáveis de diferentes tipos: JavaScript suporta vários tipos
de dados, incluindo números (number), texto (string), objetos
(object), etc. Sua tarefa é criar 5 variáveis de diferentes tipos de
dados. Consulte a documentação oficial para mais informações sobre

tipos de dados e variáveis:*/

var x = 5;
let y = 8;
const name = {

    name:'Uthiele'
}

var lol = true; 
let cat = "lilyka dorminhoca";
 var  soma = 8 + 5;
 





/*5) Adicionando 3.5 à sua idade: O JavaScript permite operações
aritméticas como adição, subtração, etc. Adicione 3.5 à sua idade
usando um operador de adição (+) e registre o resultado com
console.log(). Veja mais sobre operadores aritméticos:*/


var a = 3.5;
var b = 28;
var soma = a + b;

console.log(soma);




/*6) Quantos anos se passaram desde o pouso na lua em 1969: O objeto
Date em JavaScript é usado para trabalhar com datas. Sua tarefa é
obter o ano atual, subtrair 1969 dele e registrar o resultado. Consulte
a documentação oficial para mais detalhes sobre o objeto Date:*/

const data = new Date();

const ano = 1969;


const  anoA = data.getFullYear() ;

const result =  anoA - ano ;



console.log ('o resultado é ' + result+'.');

/*7) Divisão de números: Sua tarefa é dividir 65 por 240 e registrar o
resultado usando console.log().*/

var numA = 65;
var numB = 240;

var resultA =  numA / numB;

console.log (resultA);



/*8) Multiplicação de números: Multiplique 0.2708 por 100 e registre o
resultado. Esta é uma operação aritmética simples usando o
operador de multiplicação (*).*/

var lolA = 0.2708; 
var lolB= 100;

var resultB = 0.2708 * 100;

console.log (resultB);


/*9) Concatenação de strings: Em JavaScript, você pode concatenar (unir)
strings usando o operador de concatenação (+). Sua tarefa é
concatenar as strings 'Hello' e 'World' e registrar o resultado. Veja

mais sobre operações de string:*/

console.log('Hello' + 'World');


/*10) Concatenação de strings com espaço: Agora, concatene
'Hello' e 'World', mas certifique-se de incluir um espaço entre as duas
palavras.*/
console.log('Hello ' + 'World');

/*11) Usando a propriedade length: Em JavaScript, a propriedade
.length é usada para obter o número de caracteres em uma string.
Sua tarefa é registrar o número de caracteres na string 'Teaching the
world how to code' usando a propriedade .length. Veja mais sobre a

propriedade .length:*/


let bora = "Teaching the world how to code";

console.log('o número de caracteres na string é de ' +  bora.length + '.');



/*12) Usando o método toUpperCase(): Este método é usado para
converter todas as letras de uma string para maiúsculas. Use o
método .toUpperCase() para converter a string 'Kaian Novais' em
maiúsculas e registre o resultado. Veja mais sobre o método

.toUpperCase():*/

const nome = 'Kaian Novais';

console.log(nome.toUpperCase());

/*13) Removendo espaços em branco: O método .trim() é usado
para remover espaços em branco do início e do final de uma string.
Sua tarefa é remover os espaços em branco no início e no final da
string “ Professor Kaian Novais ” usando o método .trim(). Consulte a
documentação oficial sobre o método .trim():*/

const frase = "Professor Kaian Novais";

console.log(frase.trim());



/*14) Gerando um número aleatório: A função Math.random() é
usada para gerar um número aleatório entre 0 (inclusive) e 1
(exclusive). Sua tarefa é gerar um número aleatório, multiplicá-lo por
100 e registrar o resultado. Veja mais sobre Math.random():*/


 var numC = Math.random();/* criar aleatorio*/
 var numD = numC * 100; /* variavel criada para pegar a variavel do numero aleatorio e multiplicar por 100*/
 var numE =  Math.floor(numD); /* variavel para o resultado da numD ser inteiro */

 console.log(numE);

/*15) Encontrando o próximo inteiro maior: O método Math.ceil() é
usado para arredondar um número para cima até o próximo número
inteiro maior. Sua tarefa é usar Math.ceil() com o número 43.8 e
registrar o resultado. Veja mais sobre Math.ceil():*/

console.log(Math.ceil(43.8)); /* arredonda para o maior */ 



/*16) Verificando se um número é um número inteiro: O método
Number.isInteger() é usado para determinar se um valor é um
número inteiro. Sua tarefa é verificar se o número 2017 é um número
inteiro e registrar o resultado. Veja mais sobre Number.isInteger():*/

console.log(Number.isInteger(2017)); /* ele retorna um booleano */



