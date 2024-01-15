import { Request, Response, NextFunction } from "express";
import { ClienteRepository } from "../repository/cliente.repository";
import { getCustomRepository } from "typeorm";
import { Cliente } from "../entity/cliente.entity";

export class ClienteController {

    private clienteRepository = getCustomRepository(ClienteRepository);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.clienteRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id);
        const cliente = await this.clienteRepository.findCliente(id);

        if (!cliente) {
            return response.status(404).json({ message: "Cliente não encontrado" });
        }

        return response.json(cliente);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const cliente: Cliente = request.body;
        return this.clienteRepository.saveCliente(cliente);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id);
        const clienteToRemove = await this.clienteRepository.findClienteBy(id);

        if (!clienteToRemove) {
            return response.status(404).json({ message: "Cliente não encontrado" });
        }

        await this.clienteRepository.deleteCliente(id);
        return response.status(200).json({ message: "Cliente removido com sucesso." });
    }
}