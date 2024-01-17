import { Application } from "express";
import homeRoutes from "./home.routes";
import clienteRoutes from "./cliente.routes";
import vendaRoutes from "./venda.routes";

// Concentrador de rotas
export default class Routes {
  constructor(app: Application) {
    app.use("/LojaFut", homeRoutes);
    app.use("/LojaFut", clienteRoutes);
    app.use("/LojaFut", vendaRoutes)
  }
}