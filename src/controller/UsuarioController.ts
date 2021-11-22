/**
 * AUTOR: FRANK RENAN TAVEIRA LIMA
 * DATA: 20/09/2021
 * ARQUIVO: USUARIOCONTROLLER.TS
 * ASSUNTO: ESTE É O ARQUIVO QUE REALIZA A COMUNICAÇÃO COM A CAMADA DE SERVIÇOS DA CLASSE/ENTIDADE USUARIO
 */


/* IMPORTAÇÕES */
import { Request, Response } from "express";
import { UsuarioService } from "../services/UsuarioService";

/* CLASSE */
class UsuarioController {

  async get(request: Request, response: Response) {

    /* INSTANCIA */
    const usuarioService = new UsuarioService();

    /* CHAMANDO A FUNÇÃO USUARIOSERVICE*/
    const usuarios = await usuarioService.list();

    /* RESPOSTA */
    return response.json(usuarios);
  }

  async post(request: Request, response: Response) {

    /* DECLARAÇÕES */
    const { cpf, senha, admin } = request.body;

    /* INSTANCIA */
    const usuarioService = new UsuarioService();

    /* CHAMANDO A FUNÇÃO USUARIOSERVICE*/
    const usuario = await usuarioService.create({ cpf, senha, admin });

    /* RESPOSTA */
    return response.json(usuario);
  }

  async put(request: Request, response: Response){

     /* DECLARAÇÕES */
     const { cpf, senha } = request.body;

     /* INSTANCIA */
    const usuarioService = new UsuarioService();

    /* CHAMANDO A FUNÇÃO USUARIOSERVICE*/
    const usuario = await usuarioService.update({ cpf, senha, });

    /* RESPOSTA */
    return response.json(usuario);
  }

  async delete(request: Request, response: Response) {

    /* DECLARAÇÕES */
    const { cpf } = request.params;

    /* INSTANCIA */
    const usuarioService = new UsuarioService();

    /* CHAMANDO A FUNÇÃO USUARIOSERVICE*/
    const usuarioDeletado = await usuarioService.delete(cpf);

    /* RESPOSTA */
    return response.json(usuarioDeletado);
  }

}

export { UsuarioController }