//--------------------------------------FUNCAO DE PRIMEIRA CLASSE------------------------------------------------
//No JavaScript as funções são de primeira classe, ou seja, elas podem ser atribuídas a variáveis, 
//passada por parâmetros ou retornada em uma outra função

let sum = function(a, b) {
    return a + b;
};

let subtract = function(a, b) {
    return a - b;
};

//uma funcao que retorna outra funcao
let calculator = function(fn) {
    return function(a, b) {
        return fn(a, b);
    }
};
// console.log(sum(2, 2));
// console.log(subtract(2, 2));
// console.log(calculator(sum)(2, 2));
// console.log(calculator(subtract)(2, 2));


//é possível invocar uma função com menos ou mais parametros, não necessariamente seguindo o que está declarado
let sum2 = function(a, b) {
    return a + b;
};

//quando não passa a quantidade correta ele tenta executar com o valor faltante, no caso ele fica undefined
// console.log(sum2(2));

//quando passa mais parametros ele ignora o q não vai ser utilizado
// console.log(sum2(2, 2, 3)); 



//default parameters -----------------------------------------------------------------------------------
//podemos definir valores padrão para cada um dos paramentros de uma função,
//ele inicializa com um valor especifico.
let sum3 = function(a = 1, b = 1) {
    return a + b;
};

//caso não seja passado nenhum valor por paramentro, é utilizado o valor default
// console.log(sum());
// console.log(sum(2, 2));


//arguments -----------------------------------------------------------------------------------------
//é uma variável implicita nas funções,
//com ela é possível acessar os paramentros da função invocada

let sum4 = function() {
    // return arguments;
    let total = 0;
    for(let argument in arguments) {
        total += arguments[argument];
    }
    return total;
};
console.log(sum4(1, 2, 3, 4));


//rest parameter -----------------------------------------------------------------
//permite acessar os parametros da funcao, semelhante ao argument
//mas é de fato um parametro porém é como se fosse um array, ele agrupa os paramentros passados dentro de um array
let sum5 = function(a, b, c, ...numbers) { //importante, o rest paramentro tem q ser sempre o ultimo da lista
    let total = a + b + c;
    for(let number of numbers) {
        total += number;
    }
    return total;
};
console.log(sum(1,2,3,4,5,6,7,8,9));