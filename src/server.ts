/**
 * AUTOR: FRANK RENAN TAVEIRA LIMA
 * DATA: 15/09/2021
 * ARQUIVO: SERVER.TS
 * ASSUNTO: ESTE É O ARQUIVO PRINCIPAL PARA LEVANTAR OS SERVIÇOS DO BACKEND 
 */

/* IMPORTAÇÕES */
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import "dotenv/config";
import "./database";
import { router } from "./routes";

/* DECLARAÇÃO DE VARIÁVEIS E INICIALIZAÇÃO */
const app = express();
const PORTA = parseInt(process.env.APP_PORTA);
const HOST = process.env.HOST;

app.use(express.json());
app.use(router);
app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  return error instanceof Error ? response.status(404).json({ error: error.message }) : response.status(500).json({ error: 'Internal Server Error!' });
})

/* LEVANTANDO O SERVIDOR */
app.listen(PORTA, HOST, () => console.log("Aplicação subiu!"));