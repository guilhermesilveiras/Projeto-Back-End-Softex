import { Router } from "express";
import ClienteController from "../controller/cliente.controller";

class ClienteRoutes {
    router = Router();
    controller = new ClienteController();

    constructor() {
        this.intializeRoutes();
    }

    intializeRoutes() {
        // Insere um novo cliente.
        this.router.post("/cliente", this.controller.create);

        // Retornar os clientes já cadastrados.
        this.router.get("/cliente", this.controller.findAll);

        // Adcionar genero a um filme.
        //this.router.post("/filme/addGenero/:id", this.controller.addGenero);
    }
}

export default new ClienteRoutes().router;