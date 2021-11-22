/**
 * AUTOR: FRANK RENAN TAVEIRA LIMA
 * DATA: 20/09/2021
 * ARQUIVO: USUARIOSERVICE.TS
 * ASSUNTO: ESTE É O ARQUIVO QUE INTERAGE COM A CLASSE USUARIOREPOSITORY PARA REALIZAR OS CRUDS DO USUÁRIO NO BANCO.
 */

/* IMPORTAÇÕES */
import { getCustomRepository } from "typeorm";
import { UsuarioRepositorio } from "../repository/UsuarioRepository";
import { hash, compare } from "bcryptjs";


/* TIPANDO OS DADOS */
interface IUsuarioRequest {
  cpf: string;
  senha: string;
  admin?: boolean;
}

/* CLASSE */
class UsuarioService {

  /* FUNÇÃO ASSINCRONA */
  /* CRIAR */
  async create({ cpf, senha, admin }: IUsuarioRequest) {

    /* INSTANCIAS */
    const usuarioRepository = getCustomRepository(UsuarioRepositorio);
    const senhaHash = await hash(senha, 8);

    /* VALIDAÇÕES */
    if (!cpf && !senha) throw new Error('Preencha os campos obrigatórios!');
    if (await usuarioRepository.findOne({ cpf })) throw new Error('Este CPF já está cadastrado na base de dados!');

    /* CRIAÇÃO DE USUÁRIO */
    const usuario = usuarioRepository.create({ cpf, senha: senhaHash, admin });
    await usuarioRepository.save(usuario);
    return usuario;
  }

  /* ALTERAR */
  async update({ cpf, senha }: IUsuarioRequest) {

    /* INSTANCIAS */
    const usuarioRepository = getCustomRepository(UsuarioRepositorio);
    const usuarioExistente = await usuarioRepository.findOne({ cpf });
    const senhaHash = await hash(senha, 8);
    // const existeSenha = await compare(senha, usuarioExistente.senha);

    /* VALIDAÇÕES */
    if (!cpf) throw new Error('CPF incorreto ou inválido!');
    if (!usuarioExistente) throw new Error('CPF incorreto ou inválido!');
    if (await compare(senha, usuarioExistente.senha)) throw new Error('Senha não pode ser a mesma da anterior');

    usuarioExistente.senha = senhaHash;
    await usuarioRepository.save(usuarioExistente); 

    return usuarioExistente;
  }

  /* LISTAR */
  async list() {

    /* INSTANCIAS */
    const usuarioRepository = getCustomRepository(UsuarioRepositorio);
    return await usuarioRepository.find();
  }

  /* DELETAR */
  async delete(cpf: string) {

    /* INSTANCIAS */
    const usuarioRepository = getCustomRepository(UsuarioRepositorio);

    /* VALIDAÇÕES */
    if (!cpf) throw new Error('CPF incorreto ou inválido!');
    if (!await usuarioRepository.findOne({ cpf })) throw new Error('CPF incorreto ou inválido!');

    return await usuarioRepository.delete({ cpf });
  }
}

export { UsuarioService }