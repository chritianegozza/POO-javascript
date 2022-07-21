//Atribuição de um Objeto em JavaScript

//Ao atribuir o objeto prod à variável novoprod, a variável novoprod e prod se referem ao
//mesmo objeto. Por isso, ao alterar o tipo e o valor do objeto novoprod, foi alterado também o tipo e o valor do objeto prod


class Produto {
    tipo;
    valor;
    constructor(tipo, valor){
        this.tipo =  tipo;
        this.tipo = valor;
    }
    getDados(){
        return `
        Tipo: ${this.tipo} R$ ${this.valor}`;
       
    }

}

const prod = new Produto('Generico',50);
console.log(prod.getDados())
const novoprod = prod;
novoprod.tipo = 'Computador';
novoprod.valor = 900;
console.log(prod.getDados())