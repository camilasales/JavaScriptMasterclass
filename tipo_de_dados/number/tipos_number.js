//--------------------------------------TIPOS NUMBER ------------------------------------------------

10; //decimal
9.9; // decimal
0xFF; // hexadecimal
0b10; // binario
0o10; // octal

// encapsulados e transformados em objeto
new Number(10);
new Number(9.9);
new Number(0xFF);
new Number(0b10);
new Number(0o10);

// metodos que mudam a forma como o numero é representado
(123.4).toExponential(10); //voltar a virgula para o inicio e cada vez q a virgula volta aumenta o expoente
(123.4).toFixed(10); // quantidade de casas após a virgula
(123.4).toPrecision(10); // indica um numero total de algarismos (total de casas numericas)


