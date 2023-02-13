//-------------------------------------- GRUPOS DE CAPTURA ------------------------------------------------
//parenteses () -> determina um grupo de captura para realizar a extracao de valores de uma determinada string

let regExp = /([a-z]+)@([\.a-z]+)/;
let result = regExp.exec("mary@hotmail.com");
console.log(result);
console.log(result[0]);
console.log(result[1]);
console.log(result[2]);
console.log(result.index);
console.log(result.input);


let regExp3 = /^(\w+)@(\w+(\.\w{2,3})+)$/;
let result3 = regExp3.exec("maryanne@hotmail.com.br");
console.log(result3);
