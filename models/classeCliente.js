//Cliente.js
module.exports = class Cliente {
    //propriedades e funções da classe aqui
    constructor(nome, idade, endereco, email) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
        this.endereco = endereco;
        this.dataCadastro = new Date();
    }

    static idadeAdulto = 18;

    isAdult(){
        return this.idade >= idadeAdulto;
    }

    getFirstName(){
        return this.nome.split(" ")[0];
    }
}