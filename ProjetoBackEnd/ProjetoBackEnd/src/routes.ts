import { ClienteController } from "./controller/cliente.controller"

export const Routes = [{
    method: "get",
    route: "/clientes",
    controller: ClienteController,
    action: "all"
}, {
    method: "get",
    route: "/clientes/:id",
    controller: ClienteController,
    action: "one"
}, {
    method: "post",
    route: "/clientes",
    controller: ClienteController,
    action: "save"
}, {
    method: "delete",
    route: "/clientes/:id",
    controller: ClienteController,
    action: "remove"
}]