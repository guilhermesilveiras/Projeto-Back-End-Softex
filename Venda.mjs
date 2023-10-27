import { Produto } from "./produto.mjs";
import { Cliente } from "./Cliente.mjs";

export class Venda {
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
        }
        return total;
    }

    emitirNota(produto, cliente) {
        let produtos = this.registroDeVenda(produto);
        let total = this.calcularTotalVenda(produto);
        let clientePedido = cliente.associarPedidos();
        let data = this.#dataDavenda;
        return `PRODUTOS: ${produtos}\nVALOR A PAGAR: ${total}\nCLIENTE: ${clientePedido}\nDATA: ${data}`
    }
}