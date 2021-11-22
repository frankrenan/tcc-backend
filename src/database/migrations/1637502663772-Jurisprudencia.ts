import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Jurisprudencia1637502663772 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "jurisprudencia",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true
                    },
                    {
                        name: "tipo",
                        type: "ENUM('ACORDAO','DECISORIO','PUBLICACAO', 'SUMULA')"
                    },
                    {
                        name: "descricao",
                        type: "text"
                    },
                    {
                        name: "tamanho",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "ata",
                        type: "text",
                        isNullable: true
                    },
                    {
                        name: "objeto",
                        type: "text",
                        isNullable: true
                    },
                    {
                        name: "relator",
                        type: "varchar(100)",
                        isNullable: true
                    },
                    {
                        name: "pronunciaMP",
                        type: "text",
                        isNullable: true
                    },
                    {
                        name: "assunto",
                        type: "text",
                        isNullable: true
                    },
                    {
                        name: "caminhoArquivo",
                        type: "text",
                        isNullable: true
                    },
                    {
                        name: "dataSessao",
                        type: "datetime",
                        isNullable: true
                    },
                    {
                        name: "ementa",
                        type: "text",
                        isNullable: true
                    },
                    {
                        name: "quorum",
                        type: "text",
                        isNullable: true
                    },
                    {
                        name: "auditor",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "representanteMP",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("jurisprudencia");
    }

}
