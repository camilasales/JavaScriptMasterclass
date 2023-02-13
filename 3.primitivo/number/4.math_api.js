//--------------------------------------MATH OBJECT------------------------------------------------
//é um objeto global que contém constantes matemáticas e métodos pa a realização 
//de operações envolvendo númros

//CONSTANTES ---------------------------------------
//são constantes que integram diversos tipos de equações
Math.E; //eulier
Math.LN10; //logaritmo natural de 10
Math.LN2; //logaritmo natural de 2
Math.LOG10E; //logaritmo de E na base 10
Math.LOG2E; //logaritmo de E na base 2
Math.PI; //pi para carclulo de operacoes trigonométricas
Math.SQRT1_2; //raiz quadrada de 1 sobre 2
Math.SQRT2; //raiz quadrada de 2


//OPERAÇÕES INTERESSANTES---------------------------------------
Math.min(1,2,3,4,5,6); //retorna o menor numero passado por parametro
Math.max(1,2,3,4,5,6); //retorna o maior numero passado por parametro
Math.random(); // retorna um numero randomico (aleatório) entre 0 e 1, não incluindo o 1. 
Math.random() * 1000; //Se quiser que volte um numer aleatorio de valores maiso q 0 e 1, tem q multiplicar esse numero


//OPERAÇÕES ---------------------------------------
Math.abs(10); //converte o sinal do numero para positivo
Math.abs(-10); //

Math.ceil(1.1); //arredonda o numero para cima, se a casa decimal for 0 nao sobe o valor, se for entre 1 e 9 aumenta o valor
Math.ceil(-1.1); //em numeros negativos não sobe o valor, ele se mantem o mesmo, porem sem o decimal

Math.floor(9.9); //arredonda o numero para baixo, ele se mantem o mesmo, porem sem o decimal
Math.floor(-9.9);//se a casa decimal for 0 nao sobe o valor, se for entre 1 e 9 aumenta o valor

Math.round(4.5); //arredonda o numero para cima se a parte decimal for de 5 a 9 e para baixo se for de 0 a 4
Math.round(-4.5); //arredonda pra cima se a decimal for de 6 a 9

Math.sign(5); //retona 1 se o numero for positivo e -1 se for negativo
Math.sign(-5);

Math.trunc(2.3); //elimina a parte decimal do numero, deixando inteiro
Math.trunc(-2.3);


//OPERAÇÕES ARITIMETICAS TRIGONOMÉTRICAS---------------------------------------
Math.cbrt(8); //retorna a raiz cubica do numero
Math.exp(1); //retorna E elevado a um expoente
Math.hypot(3,4); //retorna a raiz quadrada de dois quadrados dos numeros
Math.log(1); //retorna logaritmo do numero em base natural
Math.pow(2,10); //retorna o numero elevado a um determinado expoente
Math.cos(Math.PI/3); //retorna o coseno de um angulo
Math.sin(Math.PI/2); //retorna o seno de um angulo
Math.sqrt(4); //retorna a raiz quadrada de um numero
Math.tan(Math.PI/4); //retorna a tangente de um angulo



