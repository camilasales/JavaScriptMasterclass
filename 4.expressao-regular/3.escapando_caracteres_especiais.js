//--------------------------------------ESCAPANDO CARACTERES ESPECIAIS------------------------------------------------

// barra(\) -> utilizada antes de caracteres especiais, com o objetivo de escapá-los
let regExp = /john@gmail\.com/; //-> nesse caso esta desligando essa funcao de metacaracter do ponto, agora a exigencia é que tenha o ponto normal
let result = regExp.exec("john@gmail.com");
console.log(result);