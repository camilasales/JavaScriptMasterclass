//--------------------------------------JSON------------------------------------------------
//é um formato para a troca de dados entre sistemas, ele é uma string

//JSON.stringfy----------------------------------------------------------
//converte qualquer tipo de dado para JSON
JSON.stringify(10);
JSON.stringify("JavaScript");
JSON.stringify(true);
JSON.stringify(false);
JSON.stringify({name: "Self", paradigm: "OO"});
JSON.stringify([1, 2, 3, 4, 5, 6]);
JSON.stringify(null);


//JSON.parse----------------------------------------------------------
//converte um JSON para um determinado tipo de dado
JSON.parse('10');
JSON.parse('"JavaScript"');
JSON.parse('true');
JSON.parse('false');
JSON.parse('{"name": "Self", "paradigm": "OO"}');
JSON.parse('[1, 2, 3, 4, 5, 6]');
JSON.parse('null');


//strings podem ser comparadas de caracter a caracter
//entao o JSON possibilita a comparação de objetos
const book1 = {
    name: "Refactoring",
    author: "Martin Fowler"
};
const book2 = {
    name: "Refactoring",
    author: "Martin Fowler"
};
console.log(book1 === book2);
console.log(JSON.stringify(book1) === JSON.stringify(book2));

//tambem facilitana clonagem de objetos
const book3 = JSON.parse(JSON.stringify(book2));
console.log(book2 === book3);

