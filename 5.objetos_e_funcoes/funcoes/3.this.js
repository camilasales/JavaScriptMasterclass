//--------------------------------------THIS------------------------------------------------
//existe uma variável implicita chamada this que faz referência para o objeto responsável
//pela sua invocação
const rectangle = {
    x: 10,
    y: 2,
    calculateArea: function() {
        return this.x * this.y;
    }
    //tb é possivel declarar dessa forma onde declara a chave e parenteses, o interpretador já identifica uma função (chamada de meto notation)
    // calculateArea() {
    //     return this.x * this.y;
    // }
};
// console.log(rectangle.calculateArea());



//importante sempre olhar para o objeto que estã invocando a função, pois ele assume o papel de this
const calculateArea = function() {
    return this.x * this.y;
};
const rectangle2 = {
    x: 10,
    y: 2,
    calculateArea
};
console.log(calculateArea());
console.log(rectangle.calculateArea());
