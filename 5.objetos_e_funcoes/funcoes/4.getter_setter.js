//--------------------------------------GETTER E SETTER------------------------------------------------
//as funções do tipo getter e setter servem para interceptar o acesso as propriedades
//de determinado objeto
const rectangle = {
    x: 10,
    y: 2,
    calculeArea(){
        return this.x * this.y;
    }
};

//aplicando getter ----------------------------------------------------------------------------------
const rectangle2 = {
    x: 10,
    y: 2,
    get area(){ //assim passa a agir como propriedade
        return this.x * this.y;
    }
};
rectangle2.x = 5;
rectangle2.y = 12;
// console.log(rectangle2.area);


//aplicando setter ----------------------------------------------------------------------------------
//utilize chaves diferente para a funcao setter e a propriedade do objeto
//uma das vantagens de utilizar interceptores é que pode adicionar regras
const rectangle3 = {
    set x(x) {
        if (x > 0) {
            this._x = x;
        } else {
            console.log("Invalid value for x");
        }
    },
    set y(y) {
        if (y > 0) {
            this._y = y;
        } else {
            console.log("Invalid value for y");
        }
    },
    get area(){ //assim passa a agir como propriedade
        return this._x * this._y;
    }
};
rectangle3.x = 5;
rectangle3.y = 12;
console.log(rectangle3);

//tb é possivel inserir interseptores por meio do defineProperty da object api
//essa era a maneira de inserir get e set antes do ES6
const rectangle4 = {};
Object.defineProperty(rectangle4, "area", {
    get() {
        return this._x * this._y;
    }
});
Object.defineProperty(rectangle4, "x", {
    set(x) {
        this._x = x;
    }
});
Object.defineProperty(rectangle4, "y", {
    set(y) {
        this._y = y;
    }
});
rectangle4.x = 10;
rectangle4.y = 2;
console.log(rectangle4.area);