import { cliente } from "./cliente.mjs";
import { Produto } from "./produto.mjs";
import {Venda } from "./venda.mjs";

const c1 = new cliente("João", "Rua 1", "3454-8600", "joaozin123@gmail.com" );
var nomeCliente1 = c1.getNome();
const p1 = new Produto("Air Jordan", 349.90, 10);
const v1 = new Venda();
let notinha = v1.emitirNota(p1, c1);
console.log(notinha);