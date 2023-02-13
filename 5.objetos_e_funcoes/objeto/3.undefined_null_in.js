//--------------------------------------UNDEFINED, NULL E IN------------------------------------------------
//é possivel consultar uma determinada chave por meio do operador in
//funciona dessa forma ->> chave - in - objeto

const book = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
    language: "English",
    available: true
};

//chave - in - objeto
console.log("title" in book); 
console.log("language" in book);
console.log("available" in book);
console.log("publisher" in book); //como essa chave nao existe entao volta falso

book.available = null;
console.log("available" in book); //essa chave segue estando no objeto, mas o valor da propriedade nao existe


//as propriedades do objeto podem ser apagadas usando delete ----------------------------------------------------------
const book2 = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
    language: "English",
    available: true
};
console.log('antes de apagar', book2);

// delete book2.available;
delete book2['available']; //-> caso queira apagar dinamicamente


console.log('depois de apagar', book2);