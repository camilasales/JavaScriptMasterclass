//--------------------------------------META CARACTERES ------------------------------------------------

// \w -> Representa o conjunto [a-zA-Z0-9_]
// \W -> Representa o conjunto [^a-zA-Z0-9_]
// \d -> Representa o conjunto [0-9]
// \D -> Representa o conjunto [^0-9]
// \s -> Representa um espaço em branco
// \S -> Representa um não espaço em branco
// \n -> Representa uma quebra de linha
// \t -> Representa um tab


let regExp2 = /^\w+@\w+\.\w{3}$/;
let result2 = regExp2.exec("maryanne@hotmail.com");
console.log(result2);


let regExp3 = /^\w+@\w+(\.\w{2,3})+$/;
let result3 = regExp3.exec("maryanne@hotmail.com.br");
console.log(result3);
