/*1) No contexto da programação em JavaScript, quando queremos armazenar
algum valor para uso futuro, usamos o conceito de "variáveis". Uma variável pode
ser declarada usando a palavra-chave "var". Então, como uma tarefa prática,
declare uma variável chamada "favoriteFood" usando a palavra-chave "var" e
atribua a ela a string 'pizza'.*/

var favoriteFood = 'pizza';

console.log(favoriteFood);



/*2) Continuando a praticar a declaração de variáveis, agora declare uma outra
variável chamada "numOfSlices". Novamente, utilize a palavra-chave "var" e
desta vez atribua a ela o número 8. Isto simboliza, por exemplo, o número de
fatias que uma pizza poderia ter.*/

var numOfSlices = 8;


console.log(numOfSlices);

/*3) Agora que você tem duas variáveis declaradas ("favoriteFood" e
"numOfSlices"), vamos imprimi-las para verificar se estão armazenando os
valores corretamente. No JavaScript, usamos o comando "console.log()" para
isso. Primeiro, imprima o valor armazenado em "favoriteFood". Lembre-se,
"console.log()" é uma maneira de visualizar a saída de seu código no console do
seu navegador ou ambiente de desenvolvimento.*/
var favoriteFood = 'pizza';
var numOfSlices = 8;

console.log(favoriteFood);

/*4)Agora, da mesma forma que você imprimiu "favoriteFood", use o comando
"console.log()" para imprimir o valor armazenado em "numOfSlices". Isso ajudará
você a verificar se a variável "numOfSlices" está armazenando corretamente o
valor que você atribuiu a ela.*/

var favoriteFood = 'pizza';
var numOfSlices = 8;

console.log(numOfSlices);

/*5)Você usou a palavra-chave "var" para declarar variáveis até agora, mas
JavaScript também fornece outras duas palavras-chave para declaração de
variáveis - "let" e "const". Pesquise e explique a diferença entre "var" e "let". A
diferença entre esses dois é crucial para entender o escopo das variáveis em
JavaScript.*/

/*
var = declara uma variável, opcionalmente é possível atribuir à ela um valor em sua inicialização.

let = permite que você declare variáveis limitando seu escopo no bloco, instrução, ou em uma expressão na qual ela é usada.

*/

/*6)Vamos praticar a declaração de variáveis com "let" agora. Declare uma variável
chamada "changeMe" usando a palavra-chave "let" e atribua a ela o valor
booleano "true". Os booleanos são um tipo de dados em JavaScript que
representam verdadeiro (true) ou falso (false).*/

let  changeMe = true;
console.log(changeMe);

/*7)Em seguida, na linha após a declaração de "changeMe", reatribua o valor de
"changeMe" para o booleano "false". A palavra-chave "let" permite que você
reatribua valores às variáveis declaradas por ela, o que será útil quando o valor
que uma variável precisa armazenar muda ao longo do tempo.*/


let  ChangeMe = false;
console.log(ChangeMe);

/*8)Para verificar se "changeMe" foi reatribuído com sucesso, imprima o valor salvo
em "changeMe" no console usando "console.log()". Essa é uma boa prática para
garantir que suas reatribuições de variáveis estão funcionando conforme
esperado.*/

let changeME = 'Primeiro valor';

changeME = 'Novo valor';

console.log(changeME);

/*9)Agora, vamos explorar a declaração de variáveis com "const". Declare uma
variável constante chamada "entree" e atribua a ela a string 'Enchiladas'. "const"
é uma palavra-chave que declara uma variável cujo valor não pode ser reatribuído
depois.*/

const entree = "Enchiladas"

/*10)Para verificar se você salvou o valor de 'Enchiladas' em "entree" corretamente,
imprima o valor de "entree" no console usando "console.log()".*/

const entreE = 'Enchiladas';

console.log(entreE);

/*11)Vamos testar a imutabilidade de variáveis declaradas com "const". Tente
reatribuir um valor diferente à variável "entree". Isso deve gerar um erro, pois
uma variável "const" não pode ser reatribuída após a sua declaração inicial. Este
é um importante conceito em JavaScript que ajuda a prevenir erros indesejados
de reatribuição.*/

const entrEE = 'Enchiladas';

entrEE = 'Sushi';

/*12)No JavaScript, temos operadores de atribuição que nos permitem atualizar
rapidamente o valor de uma variável com base em seu valor atual. Por exemplo,
o operador "+=" adiciona o valor à direita ao valor atual da variável. Utilize o
operador "+=" para aumentar o valor armazenado em uma variável "levelUp" por
5.*/

let levelUp = 10;


levelUp += 5;


console.log(levelUp);

/*13)Da mesma forma, o operador "-=" subtrai o valor à direita do valor atual da
variável. Use o operador "-=" para diminuir o valor armazenado em uma variável
"powerLevel" por 100.*/

let powerLevel = 500;

powerLevel -= 100;

console.log(powerLevel);

/*


14)O operador “*=“ multiplica o valor atual da variável pelo valor à direita do
operador. Use o operador “*=“ para multiplicar o valor armazenado em uma
variável "multiplyMe" por 11.*/

let multiplyMe = 7;

multiplyMe *= 11;

console.log(multiplyMe);

/*15)O operador "/=" divide o valor atual da variável pelo valor à direita do
operador. Use o operador "/=" para dividir o valor armazenado em uma variável
"quarterMe" por 4.*/

let quarterMe = 16;

quarterMe /= 4;

console.log(quarterMe);

/*16)O operador "++" é conhecido como operador de incremento. Ele aumenta o
valor da variável em 1. Usando o operador de incremento, aumente o valor de
uma variável "gainedDollar" que inicialmente é declarada valendo 1.*/

let gainedDollar = 1;

gainedDollar++;

console.log(gainedDollar);


/*17)De maneira semelhante, o operador "--" é o operador de decremento. Ele
diminui o valor da variável em 1. Usando o operador de decremento, diminua o
valor de uma variável "lostDollar".*/

let lostDollar = 5;

lostDollar--;

console.log(lostDollar);


/*18)No JavaScript, podemos usar "template literals" para incorporar expressões
dentro de strings de texto. Isso é útil quando queremos inserir o valor de uma
variável dentro de uma string. Use um único "template literal" para interpolar
suas variáveis na frase "My name is NAME. My favorite city is CITY." Substitua
"NAME" e "CITY" na string acima interpolando os valores salvos em variáveis
"myName" e "myCity". Use "console.log()" para imprimir sua frase no console.*/

let myName = 'John';
let myCity = 'New York';

let myMessage = `My name is ${myName}. My favorite city is ${myCity}.`;

console.log(myMessage);

/*19)O operador "typeof" em JavaScript retorna uma string indicando o tipo de
dado de uma variável. Use "console.log()" para imprimir o tipo de uma variável

"newVariable". Isso pode ser útil para debugar seu código se você não tem
certeza do tipo de uma variável em algum momento.*/

let newVariable = 42;

console.log(typeof newVariable);
