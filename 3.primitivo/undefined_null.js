//--------------------------------------UNDEFINED E NULL ------------------------------------------------

const book = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
    language: "English",
    available: true
};
console.log(book.publisher); //retona undefined já q o campo nao existe


const book2 = null;
console.log(book2); //retona null já que a varivel nao tem valor