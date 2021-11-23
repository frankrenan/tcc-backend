import { getCustomRepository } from "typeorm"
import { JurisprudenciaRepository } from "../repository/JurisprudenciaRepository"



interface IJurisprudenciaRequest {
  tipo: string;
  descricao: any;
  tamanho?: string;
  ata?: any;
  objeto?: any;
  relator?: string;
  pronunciaMp?: any;
  assunto?: any;
  caminhoArquivo?: any;
  dataSessao?: Date;
  ementa?: any;
  quorum?: any;
  auditor?: string;
  representanteMp?: string;
}

class JurisprudenciaService {

  async create({ tipo, descricao, tamanho, ata, objeto, relator, pronunciaMp, assunto, caminhoArquivo, dataSessao, ementa, quorum, auditor, representanteMp }: IJurisprudenciaRequest) {

    const jurisprudenciaRepository = getCustomRepository(JurisprudenciaRepository);

    const jurisprudencia = jurisprudenciaRepository.create({ tipo, descricao, tamanho, ata, objeto, relator, pronunciaMp, assunto, caminhoArquivo, dataSessao, ementa, quorum, auditor, representanteMp });

    await jurisprudenciaRepository.save(jurisprudencia);

    return jurisprudencia;
  }

  async list() {
    const jurisprudenciaRepository = getCustomRepository(JurisprudenciaRepository);

    return await jurisprudenciaRepository.find();
  }

}

export { JurisprudenciaService }