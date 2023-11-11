/*Challenge - Clima Kelvin

Kelvin é um meteorologista que trabalha para uma grande rede de notícias,
fornecendo as previsões do tempo para o público. Recentemente, a rede decidiu
expandir seu alcance para países que usam diferentes escalas de temperatura.
Agora, Kelvin precisa fornecer as previsões de temperatura em Celsius e
Fahrenheit, além de Kelvin, que é a unidade que ele normalmente usa. Ele não
está familiarizado com as conversões de temperatura e tem uma previsão de
tempo que precisa entregar rapidamente.
É aí que você entra! Seu trabalho será ajudar Kelvin a criar um programa que
converta a temperatura de Kelvin para Celsius e Fahrenheit. A previsão de hoje é
de 293 Kelvin e Kelvin precisa saber quais são essas temperaturas em Celsius e
Fahrenheit.
A importância dessa tarefa está em desenvolversuas habilidades de programação
para resolver problemas do mundo real. Ao aprender como fazer essas
conversões e trabalhar com variáveis, você estará aprimorando suas habilidades
de programação e ajudando Kelvin a realizar seu trabalho de maneira mais
eficiente.
Além disso, essa tarefa também ilustra como a programação pode ser usada em
uma variedade de campos, incluindo a meteorologia. As habilidades que você
está aprendendo aqui não são apenas úteis para se tornar um programador, mas
também podem ser aplicadas em muitos outros trabalhos e indústrias.
*/
/*
1-A previsão do tempo para hoje é de 293 Kelvin. Para começar, crie uma variável
chamada "kelvin" e atribua a ela o valor 293. O valor armazenado na variável
"kelvin" permanecerá constante. Escolha o tipo de variável que é mais adequado
para manter esse valor constante.*/

const kelviN = 293;

/*

2-Escreva um comentário acima que explique a linha de código que você acabou
de escrever.
*/

//escolhi usar  const neste  pois é a intenção de manter o valor de kelvin constante 

/*/
3-Celsius é similar a Kelvin — a única diferença é que Celsius é 273 graus menor
que Kelvin. Vamos converter Kelvin para Celsius subtraindo 273 da variável
"kelvin". Armazene o resultado em outra variável, chamada "celsius". */

const Kelvin = 293; 
const celsius = Kelvin - 273;

console.log(celsius);

/*

4-Escreva um comentário acima que explique a linha de código que você acabou
de escrever.*/

//const kelvin = 293- declara a variável chamada kelvin  que tem  o valor 293. 
//A  const é usada aqui porque  a temperatura em Kelvin é constante .
//const celsius = kelvin - 273 - declarado uma nova variável chamada celsius e a inicio com o resultado da expressão kelvin - 273, ela é usada para  conversão da temperatura de Kelvin para Celsius, subtraindo 273 da temperatura em Kelvin.
//console.log(celsius) - usado para imprimir o valor da variável celsius no console.

/*

5-Use a seguinte fórmula para calcular Fahrenheit, e então armazene o resultado
em uma variável chamada "fahrenheit". A fórmula é: Fahrenheit = Celsius * (9/5)
+ 32. No próximo passo, iremos arredondar o número salvo na variável
"fahrenheit". Escolha o tipo de variável que permite que você altere seu valor.
*/
const Celsius = 20;

let Fahrenheit = Celsius * (9/5) + 32; 

console.log(Fahrenheit);

/*
6-Escreva um comentário acima que explique a linha de código que você acabou
de escrever.*/

//const Celsius = 20 -  declara uma constante chamada Celsius e inicia com o valor de 20, temperatura em graus Celsius.
//let Fahrenheit = Celsius * (9/5) + 32 - declara uma variável chamada Fahrenheit e inicia com o resultado da expressão que converte Celsius para Fahrenheit usando a fórmula.
//console.log(Fahrenheit) - exibe a temperatura em Fahrenheit no console.

/*
7-Quando você converte de Celsius para Fahrenheit, geralmente obtém um
número decimal. Use o método .floor() do objeto Math para arredondar para
baixo a temperatura em Fahrenheit. Salve o resultado na variável "fahrenheit".
*/
const CelsiuS = 20;
let FahrenheiT = CelsiuS * (9/5) + 32;

FahrenheiT = Math.floor(FahrenheiT);

console.log(FahrenheiT);
/*
8-Escreva um comentário acima que explique a linha de código que você acabou
de escrever.
*/

//const CelsiuS = 20 - declara uma constante chamada CelsiuS e a inicia com o valor de 20.
//let FahrenheiT = CelsiuS * (9/5) + 32 - declara uma variável chamada FahrenheiT e a inicia com o resultado da expressão que converte Celsius para Fahrenheit usando a fórmula.
//FahrenheiT = Math.floor(FahrenheiT) - arredonda para baixo o valor da temperatura em Fahrenheit usando o método Math.floor().
//console.log(FahrenheiT) - exibe a temperatura arredondada para baixo em Fahrenheit.



/*

9-Use console.log e interpolação de string para registrar no console a
temperatura em Fahrenheit da seguinte forma: "A temperatura é TEMPERATURA
graus Fahrenheit". Use a interpolação de string para substituir "TEMPERATURA"
pelo valor armazenado na variável "fahrenheit".
*/
const CElsius = 20; 
let FAhrenheit = CElsius * (9/5) + 32;
FAhrenheit = Math.floor(FAhrenheit);

console.log('A temperatura é ${FAhrenheit} graus Fahrenheit.');
/*
10-Execute seu programa para ver seus resultados!
*/

/*
11-Ao usar variáveis, seu programa deve funcionar para qualquer temperatura
em Kelvin — basta alterar o valor de "kelvin" e executar o programa novamente.
Qual seria a temperatura correspondente a 0 Kelvin em Fahrenheit?

*/
const kelvin = 0; 
let fahrenheit = (kelvin - 273.15) * (9/5) + 32;

console.log(fahrenheit);

/*
12-Ótimo trabalho! Agora Kelvin pode publicar suas previsões tanto em Celsius
quanto em Fahrenheit. Se você quiser praticar um pouco mais, tente fazer o
seguinte: Converta Celsius para a escala Newton usando a equação abaixo:
Newton = Celsius * (33/100). Arredonde a temperatura em Newton para baixo
usando o método .floor(). Use console.log e interpolação de string para registrar
no console a temperatura em Newton.*/

const celsiUS = 20; 
let newton = celsiUS * (33/100);

newton = Math.floor(newton);

console.log('A temperatura é ${newton} graus Newton.');
