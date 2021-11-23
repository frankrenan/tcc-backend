import { Request, Response } from "express"
import { JurisprudenciaService } from "../services/JurisprudenciaService";

class JurisprudenciaController {

  async post(request: Request, response: Response) {

    const { tipo, descricao, tamanho, ata, objeto, relator, pronunciaMp, assunto, caminhoArquivo, dataSessao, ementa, quorum, auditor, representanteMp } = request.body;

    const jurisprudenciaService = new JurisprudenciaService();

    const jurisprudencia = await jurisprudenciaService.create({ tipo, descricao, tamanho, ata, objeto, relator, pronunciaMp, assunto, caminhoArquivo, dataSessao, ementa, quorum, auditor, representanteMp });

    return response.status(200).json(jurisprudencia);
  }

  async get(request: Request, response: Response) {
    const jurisprudenciaService = new JurisprudenciaService();

    return response.status(200).json(await jurisprudenciaService.list());
  }

}

export { JurisprudenciaController }