import { Cliente } from "../entity/cliente.entity";


class ClienteRepository {
    clientesDB = new Array<Cliente>();

    async save(cliente: Cliente): Promise<Cliente> {
        try {
            this.clientesDB.push(cliente);
            return cliente;
        } catch (err) {
            throw new Error("Falha ao criar o cliente!");
        }
    }

    async retrieveAll(): Promise<Array<Cliente>> {
        try {
            return this.clientesDB;
        } catch (error) {
            throw new Error("Falha ao retornar os clientes!");
        }
    }

}
export default new ClienteRepository();