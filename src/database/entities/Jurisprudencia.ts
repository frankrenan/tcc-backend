import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("jurisprudencia")
class Jurisprudencia{

  constructor() {
    if (!this.id) this.id = uuid();
  }

  @PrimaryColumn()
  readonly id: string;

  @Column()
  tipo: string;

  @Column()
  descricao: string;

  @Column()
  tamanho: string;

  @Column()
  ata: string;

  @Column()
  objeto: string;

  @Column()
  relator: string;

  @Column()
  pronunciaMp: string;

  @Column()
  assunto: string;

  @Column()
  caminhoArquivo: string;

  @Column()
  dataSessao: Date;

  @Column()
  ementa: string;

  @Column()
  quorum: string;

  @Column()
  auditor: string;

  @Column()
  representanteMp: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}

export { Jurisprudencia}
