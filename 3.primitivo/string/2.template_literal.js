//--------------------------------------TEMPLATE LITERAL ------------------------------------------------
//um adas principais vantagens é a interpolação de variaveis

// concatenação de variavel com string normal
// let host = "localhost";
// let port = "3000";
// let resource = "users";
// let url = "https://" + host + ":" + port + "/" + resource;
// console.log(url);

//utilizando template literal para concatenar string com variavel
let host = "localhost";
let port = "3000";
let resource = "users";
let url = `https://${host}:${port}/${resource}`;
console.log(url);


//caracteristica de ser naturalmente multilar
//quebra de linha com string normal (é preciso concatenar)
// let monthsOfYear = "0 - Jan" + 
// "1 - Feb" + 
// "2 - Mar" + 
// "3 - Apr" + 
// "4 - May" + 
// "5 - Jun" +
// "6 - Jul" +
// "7 - Aug" +
// "8 - Sep" +
// "9 - Oct" + 
// "10 - Nov" +
// "11 - Dec"
// console.log(monthsOfYear);

//quebra de linha com string normal (utilizando caracter de controle)
// let monthsOfYear = "0 - Jan\
// 1 - Feb\
// 2 - Mar\
// 3 - Apr\
// 4 - May\
// 5 - Jun\
// 6 - Jul\
// 7 - Aug\
// 8 - Sep\
// 9 - Oct\
// 10 - Nov\
// 11 - Dec";
// console.log(monthsOfYear);

// let monthsOfYear = "0 - Jan\n\
// 1 - Feb\n\
// 2 - Mar\n\
// 3 - Apr\n\
// 4 - May\n\
// 5 - Jun\n\
// 6 - Jul\n\
// 7 - Aug\n\
// 8 - Sep\n\
// 9 - Oct\n\
// 10 - Nov\n\
// 11 - Dec";
// console.log(monthsOfYear);

// quebra de linha com template literal, a quebra de linha é interpretada naturalmente
let monthsOfYear = `0 - Jan
1 - Feb
2 - Mar
3 - Apr
4 - May
5 - Jun
6 - Jul
7 - Aug
8 - Sep
9 - Oct
10 - Nov
11 - Dec`;
console.log(monthsOfYear);


