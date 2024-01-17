import { EntityRepository, Repository } from "typeorm";
import { Venda } from "../entity/venda.entity";

@EntityRepository(Venda)
export class VendaRepository extends Repository<Venda> {

    async findVenda(idVenda: number): Promise<Venda | null> {
        return await this.createQueryBuilder("venda")
            .where("venda.idVenda = :idVenda", { idVenda })
            .getOne();
    }

    async deleteVenda(idVenda: number): Promise<void> {
        await this.delete(idVenda);
    }

    async saveVenda(venda: Venda): Promise<Venda> {
        return await this.save(venda);
    }
}