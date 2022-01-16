import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createNotes1642298266028 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "notes",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "body",
                        type: "varchar"
                    },
                    {
                        name: "user_id",
                        type: "varchar",
                        isNullable: false
                    },
                ],
                foreignKeys: [
                    {
                        name: "FKUserNotes",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE",
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("notes")
    }

}
