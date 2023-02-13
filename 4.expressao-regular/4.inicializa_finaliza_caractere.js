//--------------------------------------INICIALIZA E FINALIZA DETERMINADO CARACTERE ------------------------------------

//circunflexo(^) -> inicia com um determinado caractere
let regExp = /^john@gmail\.com/;
let result1 = regExp.exec("E-Mail: john@gmail.com"); //-> vai dar null ja q inicia com E-mail..
console.log(result1);
let result2 = regExp.exec("john@gmail.com"); //-> vai dar certo já que esta iniciando na forma indicada pelo ^
console.log(result2);


//cifrao($) -> finaliza com um determinado caractere
// let regExp = /john@gmail\.com$/;
// let result1 = regExp.exec("john@gmail.com teste teste"); //-> vai dar null ja q depois do '.com' ainda tem continuidade
// console.log(result1);
// let result2 = regExp.exec("john@gmail.com"); //-> vai dar certo já que esta finalizando na forma indicada pelo $
// console.log(result2);