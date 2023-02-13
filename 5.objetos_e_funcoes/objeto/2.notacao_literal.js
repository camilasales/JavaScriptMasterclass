//--------------------------------------OBJETO NOTACAO LITERAL------------------------------------------------

const book = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
    language: "English",
    available: true
};
console.log(book);


//shorthand notation ---------------------------------------------------------------------------------
//utilizando shorthand notation que veio no es6
//como se fosse uma simplificação, onde pode passar variáveis para esse objeto
const title = "Clean Code";
const author = "Robert C. Martin";
const pages = 464;
const language = "English";
const available = true;

const book2 = {
    title: title,
    author: author,
    pages: pages,
    language: language,
    available: available
};

//se eu tenho uma variável que é mesmo nome da chave do objeto, é só fazer dessa forma:
const book3 = {
    title,
    author,
    pages,
    language,
    available
};

console.log(book3);


//declarando chave com string -------------------------------------------------------------------------
//dependendo da chave é necessário declarar ela como string
//tambem é permitido utilizar palavras reservadas e numeros, por que no fundo tudo vira string ou symbol
const book4 = {
    title: "Clean Code",
    author: "Robert C. Martin",
    "number-of-pages": 464,
    language: "English",
    available: true
};


//computar as chaves -------------------------------------------------------------------------------
//computar as chaves em tempo de execução, no es6 veio a chave computada, 
//para definir o objeto mais dinâmico usando notação literal
//assim o objeto interpreta que é pra ele procurar a referencia detro do colchetes
const key1 = "title";
const key2 = "author";
const key3 = "pages";
const key4 = "language";
const key5 = "available";
const book5 = {
    [key1]: "Clean Code",
    [key2]: "Robert C. Martin",
    [key3]: 464,
    [key4]: "English",
    [key5]: true
};
console.log(book5);


//atribuicao após a criação -----------------------------------------------------------------------
//além da notação literal é possível atribuir propriedades aos objetos por meio da sua referencia
//é possivel atribuir suas propriedades mesmo depois da construção desse objeto
const book6 = {};
book6.title = "Clean Code";
book6.author = "Robert C. Martin";
book6.pages = 464;
book6.language = "English";
book6.available = true;
console.log(book6);


//atribuicao após a criação computando a chave pela sua referencia 
//assim como na notação literal, é possível computar as chaves de um objeto em tempo de 
//execução pela sua referência depois de ter criado o objeto
const chave1 = "title";
const chave2 = "author";
const chave3 = "pages";
const chave4 = "language";
const chave5 = "available";
const book7 = {};
book7[key1] = "Clean Code",
book7[key2] = "Robert C. Martin",
book7['number-of-page'] = 464,
book7[key4] = "English",
book7[key5] = true



//cada uma das suas propriedades podem ser consultadas por meio de sua referencia, de forma direta
//e por meio da computação de chaves

//forma direta
console.log(book7.title);

//computação de chaves
//objetivo do for in é percorrer chaves
for (let key in book7) {
    console.log(book7[key]);
}


//copiando objeto com for in --------------------------------------------------
const bookOriginal = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
    language: "English",
    available: true
};

const bookCopy = {};
for (let key in bookOriginal){
    bookCopy[key] = bookOriginal[key];
}

console.log(bookCopy);