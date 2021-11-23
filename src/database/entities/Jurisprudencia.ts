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
  tipo: String;

  @Column()
  descricao: String;

  @Column()
  tamanho: String;

  @Column()
  ata: String;

  @Column()
  objeto: String;

  @Column()
  relator: String;

  @Column()
  pronunciaMp: String;

  @Column()
  assunto: String;

  @Column()
  caminhoArquivo: String;

  @Column()
  dataSessao: Date;

  @Column()
  ementa: String;

  @Column()
  quorum: String;

  @Column()
  auditor: String;

  @Column()
  representanteMp: String;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}

export { Jurisprudencia}
