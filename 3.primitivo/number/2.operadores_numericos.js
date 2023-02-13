//--------------------------------------OPERADORES NUMERICOS------------------------------------------------
2 + 2; //soma
8 - 3; //subtracao
4 * 5; //multiplicacao
9 / 3; //divisao
7 % 2; //resto da divisao


// operadores de atribuição
let result = 10;
result += 2;
result -= 2;
result *= 2;
result /= 2;
result %= 2;

// operadores de incremento e decremento
// o lado do igual faz diferença para sazer se é um pré ou pós decremento/incremento
let result2 = 10;
result2++; //pós incremento, onde retorna o mesmo numero e depois incremente 
++result2; //pré incremento incrementa e depois retorna
result2--; //pos decremento
--result2; // pré decremento



//--------------------------------------OPERADORES BINÁRIOS - BIT A BIT------------------------------------------------
// é sempre comparado bit a bit (bit tem 32 caracteres)
4 | 3; //OR
8 & 3; //AND
5 ^ 2; //XOR conhecido como OU EXCLUSIVO
~2; //NOT - inverte todos os bits, incluindo o de sinal
4 << 2; //SHIFT - deslocamento a esquerda
128 >> 1; //SHIFT - deslocamento a direita
-2 >>> 1; //SHIFT - deslocamento a direita com a mudança de sinal


//OR  ---------------------------------------------------------------------------------------------------
// 1 com 1 ou 0 com 1 o resultado é 1
// 0 com 0 o resultado é 0
4 | 3; // resultado: 7

//vendo o valor binario dos numeros:
(4).toString(2); //o numero 2 representa a base numerica, nesse caso é binário
(3).toString(2);

// aumentando os caracteres para melhorar a comparacao bit a bit (padStart-> coloque 0 até completar 32 de tamanho)
//a quantidade de caracters vai ser 32 e onde faltar ele completa com 0.
(4).toString(2).padStart(32, 0); // -> '00000000000000000000000000000100'
(3).toString(2).padStart(32, 0); // -> '00000000000000000000000000000011'

// resultado: lendo da direita para a esquerda
// 0 e 1 = 1
// 0 e 1 = 1
// 1 e 0 = 1
// logo 0b111 = 7


//AND  ---------------------------------------------------------------------------------------------------
// 1 com 1 o resultado é 1
// 0 com 0 ou 0 com 1 o resultado é 0
3 & 1 // resultado: 1

// valor binario e igualando as casas
(3).toString(2).padStart(32, 0); // -> '00000000000000000000000000000011'
(1).toString(2).padStart(32, 0); // -> '00000000000000000000000000000001'

//resultado:
// 1 e 1 = 1
// 1 e 0 = 0
// logo 0b1 = 1


//XOR / OU EXCLUSIVO ----------------------------------------------------------------------------------------------
// 1 com 0 o resultado é 1
// 0 com 0 ou 1 com 1 o resultado é 0
5 ^ 2 // resultado: 7

// valor binario e igualando as casas
(5).toString(2).padStart(32, 0); // -> '00000000000000000000000000000011'
(2).toString(2).padStart(32, 0); // -> '00000000000000000000000000000010'

// resultado
// 1 e 0 = 1
// 0 e 1 = 1
// 1 e 0 = 1
//logo 0b111 = 7


//NOT ----------------------------------------------------------------------------------------------
// inverte todos os bits e o sinal
//o que é 0 vira 1 e o que era 1 vira 0
// pensando no resultado, o numero é somado a -1. Exemplo -2 + (-1) => -2 -1 => -3
~2 // resultado: -3

// valor binario e igualando as casas
(2).toString(2).padStart(32, 0); //        -> '00000000000000000000000000000010'
(-3 >>> 0).toString(2).padStart(32, 0); // -> '11111111111111111111111111111101'


//SHIFT - DESLOCANDO PARA A ESQUERDA ----------------------------------------------------------------------------------------------
// deslocar para a esquerda é como se tivesse multiplicando o numero deslocado por 2 (pq a base é 2)
// exemplo: o 4 vai ser deslocado 2 casas para a esquesta (4 << 2)
// a cada deslocamento é multiplicado por 2: 
// primeiro desclocamento: 4*2 = 8
// segundo deslocamento: 8*2 = 16
4 << 2; // resultado: 16

(4).toString(2).padStart(32, 0); //     -> '00000000000000000000000000000100' local original do 4
(4 << 2).toString(2).padStart(32, 0) // -> '00000000000000000000000000010000' depois q deslocou


//SHIFT - DESLOCANDO PARA A DIREITA ----------------------------------------------------------------------------------------------
// deslocar para a direita é como se tivesse dividindo o numero deslocado por 2 (pq a base é 2)
// exemplo: o 128 vai ser deslocado 1 casa para a direita (128 >> 1)
// a cada deslocamento é dividido por 2: 
// primeiro desclocamento: 128/2 = 64
128 >> 1; // resultado: 64

(128).toString(2).padStart(32, 0); //      -> '00000000000000000000000010000000' local original do 128
(128 >> 1).toString(2).padStart(32, 0); // -> '00000000000000000000000001000000' depois q deslocou


//SHIFT - DESLOCANDO PARA A DIREITA COM MUDANÇA DE SINAl----------------------------------------------------------------------------------------------
// a rotação (deslocamento a direita com mudanca de sinal)
// numeros negativos tem o bit de sinal igual a 1;
-2 >>> 1; // resultado: 2147483647

(-2 >>> 0).toString(2).padStart(32, 0); //   -> '11111111111111111111111111111110'
(2147483647).toString(2).padStart(32, 0); // -> '01111111111111111111111111111111'