
export class Produto {
    #nome;
    #preco;
    #qtdEstoque;

    constructor(nome, preco, qtdEstoque) {
        this.#nome = nome;
        this.#preco = preco;
        this.#qtdEstoque = qtdEstoque;
    }

    atualizarEstoque() {

    }

    alertaEstoqueBaixo(){
        if(this.#qtdEstoque <= 3){
            console.log("Quuantidade no estoque muito Baixa");
        }
    }

    get nome(){
        return this.#nome;

    }
    
    set nome(nome){
        this.#nome = nome;
    }

    get preco(){
        return this.#preco;
    }

    set preco(preco){
        this.#preco = preco;
    }

    get qtdEstoque(){
        return this.#qtdEstoque;
    }

    set qtdEstoque(qtdEst){
        this.#qtdEstoque = qtdEst;
    }

}