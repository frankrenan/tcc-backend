import { getCustomRepository } from "typeorm"
import { AdvogadoRepository } from "../repository/AdvogadoRepository"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken";
import { Usuario } from "../database/entities/Usuario";


interface IAutenticarRequest {
  cpf: string;
  senha: string;
}

class AutenticarAdvogadoService {

  async execute({ cpf, senha }: IAutenticarRequest) {
    const advogadoRepository = getCustomRepository(AdvogadoRepository);

    const advogado = await advogadoRepository.findOne({ cpf });
    if (!advogado) throw new Error('CPF ou senha incorreto!');

    const verificarSenha = await compare(senha, advogado.senha);
    if (!verificarSenha) throw new Error('CPF ou senha incorreto!');

    const token = sign(
      {
        cpf: advogado.cpf
      },
      process.env.API_SECRET_HASH,
      {
        subject: advogado.email,
        expiresIn: "28800" // 8h
      });

    return Object.assign({ advogado, token });
  }

}

export { AutenticarAdvogadoService }