/**
 * AUTOR: FRANK RENAN TAVEIRA LIMA
 * DATA: 20/09/2021
 * ARQUIVO: ROUTES.TS
 * ASSUNTO: ESTE É O ARQUIVO QUE MAPEIA AS ROTAS/ENDPOINTS E CHAMA OS MÉTODOS
 */

/* IMPORTAÇÕES */
import { Router } from "express";
import { ProcessoController } from "./controller/ProcessoController";
import { UsuarioController } from "./controller/UsuarioController";
import { AdvogadoController } from "./controller/AdvogadoController";
import { JurisprudenciaController } from "./controller/JurisprudenciaController";
import { AutenticarAdvogadoController } from "./controller/AutenticarAdvogadoController";

/* DECLARAÇÕES */
const router = Router();
const usuarioController = new UsuarioController();
const processoController = new ProcessoController();
const advogadoController = new AdvogadoController();
const jurisprudenciaController = new JurisprudenciaController();
const autenticarAdvogadoController = new AutenticarAdvogadoController();

/* VERBOS DO HTTP */
/* ROTAS CRUD USUARIO */
router.get('/api/v1/usuario', usuarioController.get);
router.post('/api/v1/usuario', usuarioController.post);
router.delete('/api/v1/usuario/:cpf', usuarioController.delete);
router.put('/api/v1/usuario', usuarioController.put);

/*  ROTAS CRUD PROCESSO */
router.post('/api/v1/processo', processoController.post);
router.get('/api/v1/processo', processoController.get);
router.delete('/api/v1/processo', processoController.delete);

/*  ROTAS CRUD ADVOGADO */
router.post('/api/v1/advogado', advogadoController.post);
router.get('/api/v1/advogado', advogadoController.get);
router.delete('/api/v1/advogado/:cpf', advogadoController.delete);
router.put('/api/v1/advogado', advogadoController.put);

/*  ROTAS AUTENTICAR ADVOGADO */
router.post('/api/v1/autenticar', autenticarAdvogadoController.autenticar);

/*  ROTAS AUTENTICAR ADVOGADO */
router.post('/api/v1/jurisprudencia', jurisprudenciaController.post);
router.get('/api/v1/jurisprudencia', jurisprudenciaController.get);
router.get('/api/v1/jurisprudencia/', jurisprudenciaController.getQuery);

/* EXPORTAÇÃO */
export { router }