import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Advogado1637257155823 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "advogado",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true
                    },
                    {
                        name: "oab",
                        type: "integer",
                        isUnique: true
                    },
                    {
                        name: "nome",
                        type: "varchar(200)"
                    },
                    {
                        name: "email",
                        type: "varchar"
                    },
                    {
                        name: "estado",
                        type: "char(2)"
                    },
                    {
                        name: "admin",
                        type: "boolean",
                        default: false
                    },
                    {
                        name: "cpf",
                        type: "varchar(12)",
                        isPrimary: true
                    },
                    {
                        name: "senha",
                        type: "varchar"
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
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("advogado");
    }

}
