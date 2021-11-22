import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("processo")
class Processo {

  constructor() {
    if (!this.id) this.id = uuid();
  }

  @PrimaryColumn()
  readonly id: string;

  @Column()
  numero: number;

  @Column()
  ano: number;

  @Column()
  natureza: string;

  @Column()
  especie: string;

  @Column()
  objeto: string;

  @Column()
  numeroPaginas: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}

export { Processo }
