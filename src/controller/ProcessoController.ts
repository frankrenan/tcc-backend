import { Request, Response } from "express";
import { ProcessoService } from "../services/ProcessoService";


class ProcessoController {

  async post(request: Request, response: Response) {
    const { numero, ano, natureza, especie, objeto, numeroPaginas } = request.body;
    const processoService = new ProcessoService();
    const processo = await processoService.create({ numero, ano, natureza, especie, objeto, numeroPaginas });

    return response.json(processo);
  }

  async get(request: Request, response: Response) {

    const processoService = new ProcessoService();
    const processos = await processoService.list();

    return response.json(processos);
  }

  async delete(request: Request, response: Response) {

    const { numero, ano } = request.body;

    const processoService = new ProcessoService();
    const processo = await processoService.delete({ numero, ano });

    if (processo.affected === 0) {
      throw new Error('Erro ao deletar!');
    }

    return response.status(202).json({ mensagem: `Processo nº${numero}/${ano} Apagado com sucesso!` });
  }



}

export { ProcessoController }
