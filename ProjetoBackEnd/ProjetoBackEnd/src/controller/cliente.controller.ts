import { Request, Response } from "express";
import { Cliente } from "../entity/cliente.entity";
import ClienteRepository from "../repositories/cliente.repository";
import clienteRepository from "../repositories/cliente.repository";

export default class ClienteController {

    async create(req: Request, res: Response) {
        if (!req.body.cpf) {
            res.status(400).send({
                message: "O CPF do cliente não pode ser vazio!"
            });
            return;
        }

        try {
            const cliente: Cliente = req.body;
            const savedCliente = await clienteRepository.save(cliente);
            res.status(201).send(savedCliente);
        } catch (err) {
            res.status(500).send({
                message: "Erro ao tentar criar o cliente."
            });
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const clientes = await clienteRepository.retrieveAll();
            res.status(200).send(clientes);
        } catch (err) {
            res.status(500).send({
                message: "Erro encontrado quando estava se fazendo a busca por todos os clientes."
            });
        }
    }

}
