//--------------------------------------QUANTIFICADORES----------------------------------------------
//eles podem ser aplicados a caracteres, grupos, conjuntos ou metacaracteres
// {n} -> Quantifica um número específico
// {n,} -> Quantifica um número mínimo
// {n,m} -> Quantifica um número mínimo e um número máximo
// ? -> Zero ou um
// * -> Zero ou mais
// + -> Um ou mais

let regExp1 = /^[a-z]+@[a-z]+\.[a-z]{3}$/;
let result1 = regExp1.exec("janedois@hotmail.com");
console.log(result1);


let regExp2 = /^[a-z]+@[a-z]+\.[a-z]{3}$/;
let result2 = regExp2.exec("maryanne@hotmail.com");
console.log(result2);

//sempre que quiser colocar um quantificador em torno de algum grupo de caractere deve utilizar o parenteses ()
let regExp3 = /^[a-z]+@[a-z]+(\.[a-z]{2,3})+$/;
let result3 = regExp3.exec("maryanne@hotmail.com.br");
console.log(result3);
