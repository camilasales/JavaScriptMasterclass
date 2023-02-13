//--------------------------------------META CARACTERES ------------------------------------------------
//ponto(.) -> representa qualquer caracters, qualquer coisa
let regExp = /john@gmail.com/;
let result = regExp.test("john@gmailAcom"); //-> nessa caso vai dar true já q o ponto pode ser qualquer coisa
console.log(result);
