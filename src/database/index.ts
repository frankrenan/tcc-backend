/**
 * AUTOR: FRANK RENAN TAVEIRA LIMA
 * DATA: 20/09/2021
 * ARQUIVO: INDEX.TS
 * ASSUNTO: ESTE É O ARQUIVO QUE FAZ A CONEXÃO COM O BANCO DE DADOS.
 */

/* IMPORTAÇÕES */
import 'reflect-metadata';
import { createConnection } from "typeorm";

/* FUNÇÃO DE CONEXÃO COM O BD*/
createConnection({
  type: "mysql",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [__dirname + "/entities/*.ts"],
  synchronize: true,
  logging: false
})
  .then(() => console.log("Conexão realizada com sucesso!"))
  .catch((err) => console.log(`Algo inesperado aconteceu ao conectar com o banco de dados ${err}`));