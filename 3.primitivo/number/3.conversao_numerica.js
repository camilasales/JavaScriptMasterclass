//--------------------------------------CONVERSAO NUMERICA------------------------------------------------
// esses operadores mantem o tipo primitivo

//NUMBER -------------------------------------------------
// a saida são numeros primitivos, diferente do new number() que a saida é um objeto
Number("10"); //resultado: 10
Number("9.9"); //resultado: 9.9
Number("0xFF"); //hexadecimal, resultado: 255
Number("0b10"); //binario, resultado: 2
Number("0o10"); //octal, resultado: 8
Number(); //resultado: 0
Number("JavaScript"); //resultado: NaN


//OPERADORES NUMERICOS -------------------------------------------------
// outra forma de converter é por meio dos operadores numéricos
// no JS existem correção de tipo -> ele olha para a operação e verifica um dos operandos, convertendo string para number
// porém nem todos os operadores realizam essa conversão, no caso da soma ela concatena;
~~"10"; //resultado: 10
+"10"; //resultado: 10
"10" - 0; //resultado: 10
"10" * 1; //resultado: 10
"10" / 1; //resultado: 10
"10" + 0; //resultado: 100


//TO STRING -------------------------------------------------
//o metodo toString de um número, permite a conversão para qualquer sistema numérico, só indicar a base numérica
(0xA).toString(10); //base numerica é decimal - 10
(0b1010).toString(16); //base numerica é hexadecimal - 16
(010).toString(2); //base numerica é binario - 2
(10).toString(8); //base numerica é octal - 8


//PARSE INT -------------------------------------------------
//converte uma string em inteiro, basta indicar o número e sua base numérica (decimal, hexadecimal, octal e binario). 
//Caso não seja indicado a base, por padrao via ser decimal
parseInt("10", 10);
parseInt("9.9", 10); //resultado: 9 por que perde as casas decimais
parseInt("A", 16); // resultado: 10 por que a base é a de hexadecimal
parseInt("11", 2); // resultado: 3
parseInt("010", 8); //resultado: 8


//PARSE FLOAT -------------------------------------------------
//converte apenas numeros no sistama de numeracao decimal 
//ele sempre considera tudo que começa com number, se começar com string retorna NaN
//ele não entende outras bases numéricas, portanto tirando a decimal o restante vai retornar 0
parseFloat("10");
parseFloat("2.5");
parseFloat("0xFF"); 
parseFloat("0b10");
