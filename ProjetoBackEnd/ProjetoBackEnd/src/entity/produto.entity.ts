import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("produto")
export class Produto {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    nome: string;

    @Column('decimal', { precision: 5, scale: 2 })
    preco: number;

    @Column('int')
    qtdEstoque: number;
}