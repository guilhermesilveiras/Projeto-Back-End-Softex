import { Router } from "express";
import { VendaController } from "../controller/venda.controller";

const router = Router();
const vendaController = new VendaController();

// Get all vendas
router.get("/", vendaController.all);

// Get one venda
router.get("/:id", vendaController.one);

// Create a new venda
router.post("/", vendaController.save);

// Delete a venda
router.delete("/:id", vendaController.remove);

export default router;