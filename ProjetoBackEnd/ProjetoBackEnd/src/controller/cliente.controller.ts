import { NextFunction, Request, Response } from "express";
import { Cliente } from "../entity/cliente.entity";
import { getRepository } from "typeorm";

export class ClienteController {
    private clienteRepository = getRepository(Cliente);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.clienteRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.clienteRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.clienteRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id);
        let clienteToRemove = await this.clienteRepository.findOne(id);

        if (!clienteToRemove) {
            return "this client does not exist";
        }

        await this.clienteRepository.remove(clienteToRemove);
        return "client has been removed";
    }
}