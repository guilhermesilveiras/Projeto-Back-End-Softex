import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Venda } from './venda.entity';

@Entity("cliente")
export class Cliente {

    @PrimaryGeneratedColumn()
    idcliente!: number;

    @Column({ length: 11 })
        cpf!: string;

        @Column({ length: 100 })
        nome!: string;

        @Column({ length: 100 })
        email!: string;

        @Column({ length: 15 })
        telefone!: string;

        @OneToOne(() => Venda)
        @JoinColumn()
        venda!: Venda;

}