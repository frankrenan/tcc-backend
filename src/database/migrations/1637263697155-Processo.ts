import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Processo1637263697155 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "processo",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true
                    },
                    {
                        name: "numero",
                        type: "integer"
                    },
                    {
                        name: "ano",
                        type: "integer"
                    },
                    {
                        name: "natureza",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "especie",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "objeto",
                        type: "text",
                        isNullable: true
                    },
                    {
                        name: "numeroPaginas",
                        type: "integer"
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
        await queryRunner.dropTable("processo");
    }

}
