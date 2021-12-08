import { getCustomRepository } from "typeorm"
import getCliente from "../api/Elasticsearch";
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

    getCliente()
      .index({
        index: "jurisprudencia",
        type: "type_jurisprudencia",
        body: jurisprudencia
      }).then(() => console.log("Cadastrado no elastic com sucesso"))
      .catch(() => console.log("Não foi possível cadastrar no elastic com sucesso"))

    return jurisprudencia;
  }

  async list() {
    const jurisprudenciaRepository = getCustomRepository(JurisprudenciaRepository);

    return await jurisprudenciaRepository.find();
  }

  /* ELASTICSEARCH */
  async listQuery(stringBusca: string) {

    // getCliente().search({
    //   index: "jurisprudencia",
    //   type: "type_jurisprudencia", body: {
    //     query: {
    //       match: {
    //         descricao: stringBusca
    //       }
    //     },
    //   }
    // }).then((data) => {
    //   for (const teste of data.hits.hits) {
    //     console.log(teste._source);
    //   }
    // })

    const response = await getCliente().search({
      index: "jurisprudencia",
      type: "type_jurisprudencia",
      _source: true,
      body: {
        query: {
          match: {
            objeto: stringBusca
          }
        },
      }
    });
    return response.hits.hits;
  }

}

export { JurisprudenciaService }