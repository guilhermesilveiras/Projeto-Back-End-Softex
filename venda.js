import { Produto } from "./produto.js";

class Venda {
    #dataDavenda;
    #produtosVendidos = [];
    constructor() {
        this.#dataDavenda = new Date();
        this.#produtosVendidos = [];
    }

    registroDeVenda(produto) {
        this.#produtosVendidos.push(produto);
        return this.#produtosVendidos;
    }

    calcularTotalVenda(produto) {
        let total = 0;
        for (const produto of this.#produtosVendidos) {
            total += produto.preco;
            return total;
        }
    }
}