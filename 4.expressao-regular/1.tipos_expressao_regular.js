//--------------------------------------TIPOS EXPRESSAO REGULAR ------------------------------------------------
//existem duas formas de escrever RegExp:
//1º -> entre 2 barras, isso já faz com que seja identificado:
/john@gmail.com/; //essa é a melhor forma de utilizar

//2º -> pode ser instanciado
new RegExp("john@gmail.com");


//o tipo dela sempre vai ser object:
typeof /john@gmail.com/; //resultado: object
typeof new RegExp("john@gmail.com"); //resultado: object


//METODOS DISPONIVEIS REGEXP (regue esp) -------------------------------------
//test -> retorna um booleano indicando se validou ou nao
let regExp_test = /john@gmail.com/;
let result_test = regExp_test.test("john@gmail.com");
console.log(result_test);


//exec -> semelhandi com o test porem é mais completo, retorna um array com as propriedades
let regExp_exec = /john@gmail.com/;
let result_exec = regExp_exec.exec("john@gmail.com");
console.log(result_exec);
console.log(result_exec[0]); 
console.log(result_exec.index);//a partir de qual indice foi encontrado
console.log(result_exec.input);







