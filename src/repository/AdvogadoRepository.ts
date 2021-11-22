import { EntityRepository, Repository } from "typeorm";
import { Advogado } from "../database/entities/Advogado";

@EntityRepository(Advogado)
class AdvogadoRepository extends Repository<Advogado> { }

export { AdvogadoRepository }