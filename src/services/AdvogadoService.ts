import { getCustomRepository } from "typeorm";
import { AdvogadoRepository } from "../repository/AdvogadoRepository";
import { hash, compare } from "bcryptjs";

interface IAdvogadoRequest {
  oab: number;
  nome: string;
  email: string;
  estado: string;
  admin?: boolean;
  cpf: string;
  senha: string;
}

class AdvogadoService {

  async create({ oab, nome, email, estado, admin = false, cpf, senha }: IAdvogadoRequest) {

    const advogadoRepository = getCustomRepository(AdvogadoRepository);

    if (await advogadoRepository.findOne({ oab })) throw new Error('Advogado já existe no banco de dados');
    if (await advogadoRepository.findOne({ cpf })) throw new Error('Advogado já existe no banco de dados');
    if (await advogadoRepository.findOne({ email })) throw new Error('Advogado já existe no banco de dados');

    const senhaHash = await hash(senha, 8);
    const advogado = advogadoRepository.create({ oab, nome, email, estado, admin, cpf, senha: senhaHash });

    await advogadoRepository.save(advogado);

    return advogado;
  }

  async list() {
    const advogadoRepository = getCustomRepository(AdvogadoRepository);

    return await advogadoRepository.find();
  }

   /* ALTERAR */
   async update({ cpf, nome, email, senha}) {

    /* INSTANCIAS */
    const advogadoRepository = getCustomRepository(AdvogadoRepository);
    const advogadoExistente = await advogadoRepository.findOne({ cpf });
    const senhaHash = await hash(senha, 8);

    /* VALIDAÇÕES */
    // if (!cpf) throw new Error('CPF incorreto ou inválido!');
    if (!advogadoExistente) throw new Error('CPF incorreto ou inválido!');
    if (await compare(senha, advogadoExistente.senha)) throw new Error('Senha não pode ser a mesma da anterior');

    advogadoExistente.nome = nome;
    advogadoExistente.email = email;
    advogadoExistente.senha = senhaHash;
    await advogadoRepository.save(advogadoExistente); 

    return advogadoExistente;
  }

  /* DELETAR */
  async delete(cpf: string) {

    /* INSTANCIAS */
    const advogadoRepository = getCustomRepository(AdvogadoRepository);

    /* VALIDAÇÕES */
    if (!cpf) throw new Error('CPF incorreto ou inválido!');
    if (!await advogadoRepository.findOne({ cpf })) throw new Error('CPF incorreto ou inválido!');

    return await advogadoRepository.delete({ cpf });
  }
}

export { AdvogadoService }