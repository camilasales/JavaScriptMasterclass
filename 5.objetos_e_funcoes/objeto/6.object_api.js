//--------------------------------------OBJECT API------------------------------------------------
//object api tras diversas operações para interagir com o objeto

//Object.assign --------------------------------------------------------------------------------------
//utilizado para fazer a cópia das propriedades entre objetos
//Object.assign(objetoAlvo, objetoQueVaiSerCopiado) pode ser passado mais de um objeto a ser copiado
const javascript = Object.create({});
Object.assign(javascript, {
    name: 'JavaScript',
    year: 1995,
    paradigm: 'OO and Functional'
},{
    author: 'Brendan Eich',
    influencedBy: 'Java, Scheme and Self' 
});
console.log(javascript);




//Object.keys --------------------------------------------------------------------------------------
//retorna as chaves das propriedades do objeto, ele retorna um array com o nome das chaves
const javascript2 = {
    name: 'JavaScript',
    year: 1995,
    paradigm: 'OO and Functional'
};
console.log('chaves:', Object.keys(javascript2));




//Object.values --------------------------------------------------------------------------------------
//retorna os valores das propriedades do objeto, ele retorna um array com os valores de cada chave
const javascript3 = {
    name: 'JavaScript',
    year: 1995,
    paradigm: 'OO and Functional'
};
console.log('valores:', Object.values(javascript3));




//Object.entries --------------------------------------------------------------------------------------
//retorna as propriedades do objeto em pares de chave e valor, ele retorna um array de arrays
//um array onde tem chave e valor
const javascript4 = {
    name: 'JavaScript',
    year: 1995,
    paradigm: 'OO and Functional'
};
console.log(Object.entries(javascript4));




//Object.is --------------------------------------------------------------------------------------
//compara dois objetos, considerando os tipos de dados, similar com o operador ===

const javascript5 = {
    name: 'JavaScript',
    year: 1995,
    paradigm: 'OO and Functional'
};

const javascript6 = {
    name: 'JavaScript',
    year: 1995,
    paradigm: 'OO and Functional'
};
console.log(Object.is(javascript5, javascript6)); //retorna false pq são dois tipos de objetos diferentes




//Object.defineProperty -----------------------------------------------------------------------------------------------
//Object.defineProperty(objetoAlvo, nomeDaChaveEmString, obejetoComOsAtributos)

//é usado para adicionar ou modificar a propriedade de um objeto, contem essas opções de configuração:
//value -> define o valor de uma determiada propriedade
//enumerable -> permite que uma determinada propriedade seja enumerada, fique visivel quando os atributos de um objeto é listado
//writable -> permique que uma determinada propriedade tenha seu valor modificado
//configurable -> permite que uma determinada propriedade seja apagada


const javascript7 = {};
Object.defineProperty(javascript7, "name", {
    value: "JavaScript", //valor da propriedade
    // enumerable: true, //ativa a visibilidade da propriedade
    // writable: true, //permissão para alterar o valor da propriedade
    // configurable: true //permite que apague a propriedade
});
console.log(javascript7, javascript7.name); //nesse caso a propriedade inserida não é apagada, enumerada ou modificada

//enumerable como false -> não aparece em nenhuma das operações que manipulam o objeto:
console.log('chaves:', Object.keys(javascript7));
console.log('valores:', Object.values(javascript7));
console.log(Object.entries(javascript7));

//writable como false -> não permite alterar o valor da propriedade
javascript7.name = "ECMAScript";

//configurable como false -> não permite apague propriedade
delete javascript7.name;




//Object.preventExtensions -----------------------------------------------------------------------------------------------
//impede: inserir propriedades
//permite: modificar e remover as propriedades existentes
//além disso torna o protótipo do objeto imutável

const javaScript8 = {
    name: 'JavaScript',
    year: 1995,
    parafigm: 'OO and Funcional'
}
Object.preventExtensions(javaScript8);
Object.isExtensible(javaScript8); //verifica se foi aplicado esse extensible no objeto
javaScript8.name = 'ECMAScript'; //permite alterar
delete javaScript8.year; //permite deletar
javaScript8.author = 'Brendan Eitch'; //não permite adicionar (é apenas ignorado)

console.log(javaScript8);




//Object.seal -----------------------------------------------------------------------------------------------
//impede: inserir e remover propriedades
//permite: modificar as propriedades existentes
//além disso torna o protótipo do objeto imutável
const javaScript9 = {
    name: 'JavaScript',
    year: 1995,
    parafigm: 'OO and Funcional'
}
Object.seal(javaScript9);
Object.isSealed(javaScript9); //verifica se foi aplicado esse selado no objeto
javaScript9.name = 'ECMAScript'; //permite alterar
delete javaScript9.year; //não permite deletar (é apenas ignorado)
javaScript9.author = 'Brendan Eitch'; //não permite adicionar (é apenas ignorado)

console.log(javaScript9);




//Object.freeze -----------------------------------------------------------------------------------------------
//impede: inserir, modificar e remover propriedade
//além disso torna o protótipo do objeto imutável
const javaScript10 = {
    name: 'JavaScript',
    year: 1995,
    parafigm: 'OO and Funcional'
}
Object.freeze(javaScript10);
Object.isFrozen(javaScript10); //verifica se foi aplicado esse congelado no objeto
javaScript10.name = 'ECMAScript'; //não permite permite alterar (é apenas ignorado)
delete javaScript10.year; //não permite deletar (é apenas ignorado)
javaScript10.author = 'Brendan Eitch'; //não permite adicionar (é apenas ignorado)

console.log('é freeze:', Object.isFrozen(javaScript10), javaScript10);