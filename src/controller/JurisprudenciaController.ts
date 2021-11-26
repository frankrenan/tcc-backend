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

  async getQuery(request: Request, response: Response) {

    const stringBusca =  request.params.stringBusca;

    const jurisprudenciaService = new JurisprudenciaService();

    const resultado = await jurisprudenciaService.listQuery(stringBusca);

    return response.json(resultado);
  }

}

export { JurisprudenciaController }