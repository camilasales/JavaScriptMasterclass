//--------------------------------------TIPOS SYMBOL ------------------------------------------------
Symbol("a");
Symbol("b");
Symbol("c");

//esses symbols são unicos
Symbol("a") == Symbol("a");
Symbol("b") == Symbol("b");
Symbol("c") == Symbol("c");


//por padrão eles são utilizados em várias operações:
Symbol.hasInstance            
Symbol.isConcatSpreadable
Symbol.iterator
Symbol.match
Symbol.replace
Symbol.search
Symbol.species
Symbol.split
Symbol.toPrimitive
Symbol.toStringTag
Symbol.unscopables

//utilizando o math
let regexp = /JavaScript/;
regexp[Symbol.match] = false;
console.log("/JavaScript/".startsWith(regexp));