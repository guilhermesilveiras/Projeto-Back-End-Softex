import { Cliente } from "./Cliente.mjs";
import { Produto } from "./produto.mjs";
import { Venda } from "./venda.mjs";

const c1 = new Cliente("João", "Rua 1", "3454-8600", "joaozin123@gmail.com");
var nomeCliente1 = c1.getNome();
const p1 = new Produto("Air Jordan", 349.90, 10);
const v1 = new Venda();
let notinha = v1.emitirNota(p1, c1);
console.log(notinha);

const c2 = new Cliente("Pedro", "Rua 2323", "2345-6789", "maria@gmail.com");
var nomeCliente2 = c2.getNome();
const p2 = new Produto("Camisa de Time", 99.90, 5);
const v2 = new Venda();
v2.registroDeVenda(p2);
let notinha2 = v2.emitirNota(p2, c2);
console.log(notinha2);