//--------------------------------------OPERADORES BOOLEANOS ------------------------------------------------
1 == 2; //comparacao de valores
10 === 10; //comparacao de valor e tipo
'a' != 'b'; //diferente de valor
3 !== 2; //diferenca de valor e tipo
6 > 7; //compara se o valor é maior do que outro
5 >= 5;//compara se o valor é maior ou igual ao outro
'z' < 'x'; //compara se o valor é menor do que outro
'c' <= 'c'; ////compara se o valor é menor ou igual ao outro


//existem casos que ocorrem a correção de tipo e casos que a especificação define que alguns valores são iguais a outros
0 == ''; //resultado: true
0 == '0'; //resultado: true
false == undefined; //resultado: false
false == null; //resultado: false
null == undefined; //resultado: true
1 == true; //resultado: true
0 == false; //resultado: true
0 == '\n'; //resultado: true

//por isso devemos preferir utilizar os operadores que comparam os valores e tipos
0 === '';  //resultado: false
0 === '0' ;  //resultado: false
false === undefined;  //resultado: false
false === null;  //resultado: false
null === undefined;  //resultado: false
1 === true;  //resultado: false
0 === false;  //resultado: false
0 === '\n';  //resultado: false


//OPERADORES LOGICOS
//aqui são operandos booleando, diferente dos numericos que são bit a bit
0 || 2;// o 0 sofre correcao de tipo e fica false, logo o retorno sera o valor verdadeiro q é o 2
1 || 2;//1 é considerado verdadeiro, logo o retorno é 1
1 && 2; 
0 && 2;


//exemplo real, gerar numero aleatorio e caso esse numero passado seja 'undefined' o valor deve inicializar com 1000:
function generateSerial (max) {
    //primeira forma de fazer
    // if (max === undefined) {
    //     max = 1000;
    // }

    //segunda forma de fazer
    // if (!max) {
    //     max = 1000;
    // }

    //terceira e melhor forma de fazer
    max = max || 1000;
    return Math.floor(Math.random() * max);
}

generateSerial(10);
generateSerial(100);
generateSerial(1000);
generateSerial();


//OPERADOR TERNARIO
(10) ? 'good' : 'bad';
(0) ? 'good' : 'bad';

// evite aninhar ternário, parte para comando condicional normal
('10' === 10) ? ('a' > 'b') ? 1 : 2 : (null === undefined) ? 3 : 4