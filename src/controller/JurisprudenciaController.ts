import { Request, Response } from "express"
import { JurisprudenciaService } from "../services/JurisprudenciaService";

class JurisprudenciaController {

  async post(request: Request, response: Response) {

    const { tipo, descricao } = request.body;

    const jurisprudenciaService = new JurisprudenciaService();

    const jurisprudencia = await jurisprudenciaService.create({ tipo, descricao });

  }

  async get(request: Request, response: Response) {
    const jurisprudenciaService = new JurisprudenciaService();

    return response.status(200).json(await jurisprudenciaService.list);
  }

}

export { JurisprudenciaController }