import { Column, Entity, PrimaryColumn } from "typeorm";
import { Usuario } from "./Usuario";
import { v4 as uuid } from "uuid";

@Entity("advogado")
class Advogado extends Usuario{

  constructor() {
    super();
  }
  
  @Column()
  oab: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  estado: string;

}

export {Advogado}