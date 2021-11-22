import { AdvogadoService } from "../services/AdvogadoService";
import { Request, Response } from "express";


class AdvogadoController {

  async post(request: Request, response: Response) {

    const { oab, nome, email, estado, admin, cpf, senha } = request.body;

    const advogadoService = new AdvogadoService();

    const advogado = await advogadoService.create({ oab, nome, email, estado, admin, cpf, senha });

    return response.json({ mensagem: "Advogado cadastrado com sucesso!", advogado });
  }

  async get(request: Request, response: Response){

    const advogadoService = new AdvogadoService();

    return response.json(await advogadoService.list());
  }

  async put(request: Request, response: Response){

    const { cpf, nome, email, senha } = request.body;

   const advogadoService = new AdvogadoService();

   const advogado = await advogadoService.update({ cpf, nome, email, senha });

   return response.json(advogado);
 }

  async delete(request: Request, response: Response) {

    const { cpf } = request.params;

    const advogadoService = new AdvogadoService();

    const advogadoDeletado = await advogadoService.delete(cpf);

    return response.json(advogadoDeletado);
  }

}

export { AdvogadoController }