import { EntityRepository, Repository } from "typeorm";
import { Cliente } from "../entity/cliente.entity";

@EntityRepository(Cliente)
export class ClienteRepository extends Repository<Cliente> {

    async saveCliente(cliente: Cliente): Promise<Cliente> {
        return await this.save(cliente);
    }

    async findClienteBy(cpf: string): Promise<typeof Cliente | undefined> {
        const cliente = await this.createQueryBuilder("cliente")
            .where("cliente.cpf = :cpf", { cpf })
            .getOne();
            return Cliente;
    }

}