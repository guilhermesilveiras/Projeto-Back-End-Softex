export class cliente{
    #nome;
    #endereco;
    #telefone;
    #email;

    constructor(nome,endereco,telefone, email) {
        this.#nome = nome;
        this.#endereco = endereco;
        this.#telefone = telefone;
        this.#email = email;
    }

    associarPedidos(){
        return `NOME: ${this.#nome}\nENDEREÇO: ${this.#endereco}\nTelefone: ${this.#telefone}\nEMAIL: ${this.#email}`;
    }

    getNome(){
        return this.#nome;

    }

    getEndereco(){
        return this.#endereco

    }

    getTelefone(){
        return this.#telefone

    }

    getEmail(){
        return this.#email

    }


}

