import { getCustomRepository } from "typeorm"
import { JurisprudenciaRepository } from "../repository/JurisprudenciaRepository"


interface IJurisprudenciaRequest {
  tipo: string;
  descricao: string;
  tamanho?: string;
  ata?: string;
  objeto?: string;
  relator?: string;
  pronunciaMp?: string;
  assunto?: string;
  caminhoArquivo?: string;
  dataSessao?: string;
  ementa?: string;
  quorum?: string;
  auditor?: string;
  representanteMp?: string;

}

class JurisprudenciaService {

  async create({ tipo, descricao }: IJurisprudenciaRequest) {

    const jurisprudenciaRepository = getCustomRepository(JurisprudenciaRepository);

    const jurisprudencia = jurisprudenciaRepository.create({ tipo, descricao });

    await jurisprudenciaRepository.save(jurisprudencia);

    return jurisprudencia;
  }

  async list() {
    const jurisprudenciaRepository = getCustomRepository(JurisprudenciaRepository);

    return await jurisprudenciaRepository.find();
  }

}

export { JurisprudenciaService }