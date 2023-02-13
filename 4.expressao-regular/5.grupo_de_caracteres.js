//--------------------------------------GRUPOS DE CARACTERES ----------------------------------------------
// são definidos entre os colchetes e dentro deles tem os caracteres que sao aceitos

//[abc] -> aceita qualquer caractere dentro do grupo, nesse caso que seja: a, b e c
//[^abc] -> não aceita qualquer caractere dentro do grupo, nesse caso que nao seja: a, b e c 
//[0-9] -> aceita um range de numeros, nesse caso aceita qualque caractere entre 0 e 9
//[^0-9] -> nao aceita um range de numeros, nesse caso não aceita qualquere caractere entre 0 e 9


let regExp = /^[a-z][a-z][a-z][a-z]@gmail.com$/;
let result = regExp.exec("jane@gmail.com");
console.log(result);




