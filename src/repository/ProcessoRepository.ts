import { EntityRepository, Repository } from "typeorm";
import { Processo } from "../database/entities/Processo";

@EntityRepository(Processo)
class ProcessoRepository extends Repository<Processo> { }

export { ProcessoRepository }