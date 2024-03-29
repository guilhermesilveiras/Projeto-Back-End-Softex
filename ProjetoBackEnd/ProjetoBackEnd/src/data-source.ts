import "reflect-metadata"
import { DataSource } from "typeorm"
import { Cliente } from "./entity/cliente.entity"
import { Venda } from "./entity/venda.entity"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1234",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [Cliente, Venda],
    migrations: [],
    subscribers: [],
})
