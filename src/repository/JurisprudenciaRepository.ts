import { EntityRepository, Repository } from "typeorm";
import { Jurisprudencia } from "../database/entities/Jurisprudencia";

@EntityRepository(Jurisprudencia)
class JurisprudenciaRepository extends Repository<Jurisprudencia> { }

export { JurisprudenciaRepository }