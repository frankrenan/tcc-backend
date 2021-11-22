/**
 * AUTOR: FRANK RENAN TAVEIRA LIMA
 * DATA: 20/09/2021
 * ARQUIVO: USUARIOREPOSITORY.TS
 * ASSUNTO: ESTE É O ARQUIVO QUE HERDA O REPOSITORY DO TYPEORM PARA MANIPULAÇÃO NO BANCO.
 */

/* IMPORTAÇÕES */
import { EntityRepository, Repository } from "typeorm";
import { Usuario } from "../database/entities/Usuario";

/* CLASSE COM HERANÇA*/
@EntityRepository(Usuario)
class UsuarioRepositorio extends Repository<Usuario> { }

export { UsuarioRepositorio }