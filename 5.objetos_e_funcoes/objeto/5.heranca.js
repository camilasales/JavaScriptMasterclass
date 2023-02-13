//--------------------------------------HERANÇA------------------------------------------------
//o javaScript é conhecido por ser multiplos paradigmas, ou seja é possível utilizar 
// nos 3 paradgmas: funcional, orientado a objetos e estruturada
//no js a herança é realizada entre objetos e não por classes
const functionalLanguage = {
    paradigm: "Functional"
};
const scheme = {
    name: "Scheme",
    year: 1975,
    paradigm: "Functional"    
};
const javascript = {
    name: "JavaScript",
    year: 1995,
    paradigm: "Functional"
};

//javaScript é uma linguagem que segue a orientação a prototipos
//tem uma herança baseada em prototipos, todo objeto tem uma referencia para um ou mais protótipos

//1º forma -> uma das formas de acessas esse prototipo é utilizando __proto__ (dunder proto) -----------------------------
const functionalLanguage1 = {
    paradigm: "Functional"
};
const scheme1 = {
    name: "Scheme",
    year: 1975,
    __proto__: functionalLanguage1
};
const javascript1 = {
    name: "JavaScript",
    year: 1995,
    __proto__: functionalLanguage1
};

console.log(javascript1);
console.log(javascript1.paradigm);

//sempre que procura uma propriedade de um objeto e ela não existe, automaticamente ele busca pelo protótipo desse objeto
//caso essa propriedade não é encontrada ai sim retorna undefined
//todo objeto quando criado já tem um protótipo e aponta para object, como se fosse herdado de object
//nesse caso esta sendo alterado para outro objeto que é o functionalLanguage1


//metodo hasOwnPropety
//pode ser utilizado para determinar se a propiedade pertence ao objeto
//ele retorna true caso a chave exista no objeto e falso caso nao tenha
//ele identifica se a propiedade é de um prototipo ou nao, caso seja ele retorna false
for (let key in scheme) {
    console.log(key, scheme.hasOwnProperty(key));
}



//2º forma -> Object.setPrototypeOf e Object.getPrototypeOf ------------------------------------------------------------
//eles permitem a interação com o protótipo do objeto
//essa é a melhor forma de implementar um prototipo pq fica mais claro
const functionalLanguage2 = {
    paradigm: "Functional"
};
const scheme2 = {
    name: "Scheme",
    year: 1975
};
Object.setPrototypeOf(scheme2, functionalLanguage2);
const javascript2 = {
    name: "JavaScript",
    year: 1995
};
Object.setPrototypeOf(javascript2, functionalLanguage2);



//3º forma -> Object.create -----------------------------------------------------------------------------
//é possivel criar um objeto passando seu protótipo por parametro
//cria um objeto e já indica o protótipo
const functionalLanguage3 = {
    paradigm: "Functional"
};
const scheme3 = Object.create(functionalLanguage3);
scheme3.name = "Scheme";
scheme3.year = 1975;

const javascript3 = Object.create(functionalLanguage3);
javascript3.name = "JavaScript";
javascript3.year = 1995;


//caso a mesma propriedade exista no objeto e no seu protótipo, a propriedade do próprio objeto é retornada
//acontece algo chamado shadowing (sombra), onde a propriedade faz sompra no protótipo

const functionalLanguage4 = Object.create({});
functionalLanguage4.paradigm = "Functional";

const scheme4 = Object.create(functionalLanguage4);
scheme4.name = "Scheme";
scheme4.year = 1975;

const javascript4 = Object.create(functionalLanguage4);
javascript4.name = "JavaScript";
javascript4.year = 1995;
javascript4.paradigm = "OO";

console.log(javascript4.paradigm);
console.log(javascript4.__proto__.paradigm); //para acessar o protótipo do objeto que está sendo apontado
console.log(Object.getPrototypeOf(javascript).paradigm); //outra forma de acessar o protótipo
