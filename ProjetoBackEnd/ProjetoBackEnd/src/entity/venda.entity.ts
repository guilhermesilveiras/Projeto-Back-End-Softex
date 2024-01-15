import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn, CreateDateColumn} from "typeorm";
import { Produto } from "./produto.entity";
import { Cliente } from './cliente.entity';

@Entity("venda")
export class Venda {

    @PrimaryGeneratedColumn()
    idVenda: number;

    @CreateDateColumn()
    dataDaVenda: Date;

    @OneToMany(() => Produto, produto => produto.venda, {
        cascade: true
    })
    @JoinColumn()
    produtosVendidos: Produto[];

    @Column('decimal', { precision: 5, scale: 2, default: 0 })
    totalVenda: number;

    @OneToOne(() => Cliente, cliente => cliente.venda)
    @JoinColumn()
    cliente: Cliente;
}