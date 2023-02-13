//--------------------------------------COMPARACAO DE OBJETOS------------------------------------------------
//a comparacao de objetos é feita por meio da sua referencia
//por mais que os objetos tenham as mesmas propriedades eles serão considerados diferentes

const book1 = {
    title: "Clean Code",
    author: "Robert C. Martin"
};
const book2 = {
    title: "Clean Code",
    author: "Robert C. Martin"
};
console.log(book1 == book2); //resultado: false
console.log(book1 === book2); //resultado: false

//como comparar ---------------------------------------------------------------
//uma forma de comparar objetos é analisando cada uma de suas propriedades,
//por meio da sua chave e 

let equal = true;
for (let key in book1) {
    if (book1[key] !== book2[key]) equal = false;
};

for (let key in book2) {
    if (book2[key] !== book1[key]) equal = false;
};

console.log(equal);