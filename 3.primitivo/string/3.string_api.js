//--------------------------------------STRING API------------------------------------------------
//1º grupo (mais utilizado)
"JavaScript".length; //retorna o tamanho da sting, qtdd de caracteres
"PHP".indexOf("P"); //retorna a primeira posicao do caracter (index) indicada no paramento (-1 caso não encontre), leva em consideracao maiuscula e minuscula
"PHP".lastIndexOf("P"); //retorna a ultima posicao do caracter (index) indicada no paramento (-1 caso não encontre), leva em consideracao maiuscula e minuscula
"cobol".toUpperCase(); //converte as letras da string para maiúscula
"ALGOL".toLowerCase(); //converte as letras da string para minúscula


//2º grupo
"JavaScript".charAt(1); //retorna o caracter que esta sendo passado pelo parametro (index) 
"JavaScript".charCodeAt(1); //retorna o code point (tabela unicode) da posição (index) passada pelo paramento
String.fromCharCode(97); // retorna o caracter com base no codigo passado pelo paramentro (code point)


//3º grupo - verifica se a string contem, começa ou termina com um determinado grupo de caracteres (são operacoes mais novas)
//todos levam em conta se for maiusculo ou minusculo
"JavaScript".includes("Java"); //retorna verdadeiro se a string conter o conteudo passado por paramentro
"Ruby".startsWith("R"); //retorna verdadeiro se a string iniciar com o conteudo passado por paramentro 
"Erlang".endsWith("lang"); //retorna verdadeiro se a string termina com o conteudo passado por paramentro 


//locale compare -> campara duas strings, se baseia na ordem alfabetica
//retorna -1 se a string passada pelo paramentro for maior
//retorna 0 se a string passada pelo paramentro for igual 
//retorna 1 se a string passada pelo paramentro for menor
"C++".localeCompare("Ruby");
"Python".localeCompare("Java");
"JavaScript".localeCompare("JavaScript");


//5º grupo -> ambos aceitam expressões regulares como paramentro
"C++".match(/\+/g); //retorna partes da string (array) com base do regexp passado por paramentro
"Java".search(/a/); //retorna a primeira posicao (index) da string com base do regexp passado por paramentro
"JavaScript".replace("Java", "Ecma"); //retorna uma nova string resultante da substituição feita pelo dado passado por paramentro (ele aceiyta regexp e string literal)
"JavaScript".replace(/a/g, 4);


//6º grupo -> mais classicos
"JavaScript".slice(0, 4); //(de 0 a n-1) retorna uma parte da string, coloca o inicio e fim da posicao (index) por paramentro 
//(não inclui a posicao final), caso nao indique o fim ele pega todo o restante 
"JavaScript".slice(4);
"JavaScript".slice(0, -6); //nesse caso o promeiro paramentro é o inicio da string, o segundo conta de tras pra frente (nesse caso começa a contar do 't')
"JavaScript".slice(-6); //conta de tras pra frente (nesse caso começa a contar do 't')

"C;Java;JavaScript;Ruby".split(";"); //separa a string em partes, o criterio de separacao é passado pelo paramentro, ele retorna um array de strings

"JavaScript".substring(0, 4); //similar ao slice, mas não aceita valores negativos no paramentro
"JavaScript".substring(4, 0);
"JavaScript".substring(4);


//7º grupo -> operações mais recentes
"Java".concat("Script");//retorna uma nova string resultado da concatenacao do valor passado por paramentro
"Data".concat("Flex");

"Script".padStart(10, "Java"); //completa a string com caracteres no inicio
//primeiro paramentro é o tamanho que deseja, numero total
// segundo paramentro é o valor que vai preencher o espaço até completar o tamanho desejado
"C".padEnd(3, "+"); //completa a string com caracteres no fim

"+".repeat(2) //retepe um caractere pela quantidade passada pelo paramentro
"C".concat("+".repeat(2));

" Self ".trim(); //elimina espacos em branco no inicio e fim
" Scheme ".trimLeft(); //elimina espacos em branco no inicio
" Perl ".trimRight(); //elimina espacos em branco no fim


