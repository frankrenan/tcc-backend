import { getCustomRepository } from "typeorm"
import { ProcessoRepository } from "../repository/ProcessoRepository"


interface IProcessoRequest {
  numero: number;
  ano: number;
  natureza?: string;
  especie?: string;
  objeto?: string;
  numeroPaginas?: number;
}

class ProcessoService {

  /* CRIAR */
  async create({ numero, ano, natureza, especie, objeto, numeroPaginas }: IProcessoRequest) {

    /* DECLARAÇÕES */
    const processoRepository = getCustomRepository(ProcessoRepository);

    /* VALIDAÇÕES */
    if (await processoRepository.findOne({ numero, ano })) throw new Error('Este processo já existe na base de dados!');

    /* CRIANDO NA BASE DE DADOS */
    const processo = processoRepository.create({ numero, ano, natureza, especie, objeto, numeroPaginas });
    await processoRepository.save(processo);
    return processo;
  }

  /* LISTAR */
  async list() {

    /* DECLARAÇÕES */
    const processoRepository = getCustomRepository(ProcessoRepository);

    return await processoRepository.find();
  }

  /* EXCLUIR */
  async delete({ numero, ano }: IProcessoRequest) {

    const processoRepository = getCustomRepository(ProcessoRepository);

    return await processoRepository.delete({numero, ano});
  }

  /* ALTERAR */
}

export { ProcessoService }