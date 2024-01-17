import { Request, Response, NextFunction } from "express";
import { VendaRepository } from "../repositories/venda.repository";
import { getCustomRepository } from "typeorm";
import { Venda } from "../entity/venda.entity";

export class VendaController {

    private vendaRepository = getCustomRepository(VendaRepository);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.vendaRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id);
        const venda = await this.vendaRepository.findVenda(id);

        if (!venda) {
            return response.status(404).json({ message: "Venda não encontrada" });
        }

        return response.json(venda);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const venda: Venda = request.body;
        return this.vendaRepository.saveVenda(venda);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id);
        const vendaToRemove = await this.vendaRepository.findVenda(id);

        if (!vendaToRemove) {
            return response.status(404).json({ message: "Venda não encontrada" });
        }

        await this.vendaRepository.deleteVenda(id);
        return response.status(200).json({ message: "Venda removida com sucesso." });
    }
}