//--------------------------------------TIPOS FUNCTION------------------------------------------------
//uma funcao é um objeto que contem um bloco de código executável
//como se encapsulase um bloco de código e depois executasse
//existem duas formas de declarar funcao

//1º -> function declaration, ela é pré carregada no contexto de execução, ou seja
//quando criada ela fica dispónivel em todo seu bloco, esse processo se chama hosting.
//por isso é possível chamar-lá antes da sua declaração, em qualquer momento
console.log(sum1(2,2));
function sum1(a,b){
    return a + b;
};


//2º -> function expression, essa realiza uma atribuição, ela não é pré carregada no contexto de execução
const sum2 = function (a,b){
    return a + b;
};
console.log(sum2(2,2));