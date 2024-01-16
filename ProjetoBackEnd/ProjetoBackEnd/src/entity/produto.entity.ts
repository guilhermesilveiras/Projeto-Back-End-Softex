import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Venda } from "./venda.entity";

@Entity("produto")
export class Produto {

    @PrimaryGeneratedColumn()
    idProduto!: number;

    @Column({ length: 100 })
    nome!: string;

    @Column('decimal', { precision: 5, scale: 2 })
    preco!: number;

    @Column('int')
    qtdEstoque!: number;

    @ManyToOne(() => Venda, venda => venda.produtosVendidos)
    venda!: Venda;
}