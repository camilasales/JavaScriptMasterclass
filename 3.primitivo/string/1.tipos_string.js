//--------------------------------------TIPOS STRING ------------------------------------------------
'JavaScript'; // aspas simples
"JavaScript"; // aspas duplas
`JavaScript`; //acentos graves (implementado a partir do ES6)   

//Declara string por meio da função construtora, que cria um objeto,
//porém a funcao construtura é mais lenta e pode prejudicar a performace
new String('JavaScript'); //resultado: [String: 'JavaScript']
new String("JavaScript"); //resultado: [String: 'JavaScript']
new String(`JavaScript`); //resultado: [String: 'JavaScript']

let counter = 0;
console.time('performace');
while (counter < 1000) {
    //new String("JavaScript");
    "JavaScript";
    counter++;
};
console.timeEnd("performace");


//caracteres que não são permitidos e precisam ser escapados é só utilizar o barra -> \
console.log("Each constructor is a function that has a property named \"prototype\" that is used to implement prototype-based inheritance and shared properties.");
console.log('An object\'s prototype chain should have finite length.');

//CARACTERES DE CONTROLE
//podem ser utilizados dentro da string para quebrar linha, aumentar identação, etc.
'\b' //backspace
'\f' //form feed
'\n' //nem line
'\r' //carriege return 
'\t' //horizontal tabulator
'\v' //vertical tabulator

let daysOfWeek = "0 - Sun\n1 - Mon\n2 - Tue\n3 - Wed\n4 - Thu\n5 - Fri\n6 - Sat";
console.log(daysOfWeek);


//CODE POINT
//é possivem escrever caracteres utilizando seu code point no padrão Unicode
//Unicode é como se fosse uma tabela imensa com mts caracteres e ela veio pra unificar diferentes sistemas de codificacao que é usado no mundo todo (antes era diferente dependendo da região, como na alemanha, china, etc)
let daysOfWeekInCodePoints = "\u0030 \u002d \u0053\u0075\u006e\u000A\u0031 \u002d \u004d\u006f\u006e\u000A\u0032 \u002d \u0054\u0075\u0065\u000A\u0033 \u002d \u0057\u0065\u0064\u000A\u0034 \u002d \u0054\u0068\u0075\u000A\u0035 \u002d \u0046\u0072\u0069\u000A\u0036 \u002d \u0053\u0061\u0074";
console.log(daysOfWeekInCodePoints);