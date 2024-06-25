/* eslint-disable prettier/prettier */
import { MigrationInterface, QueryRunner } from 'typeorm';
import { SexoEnum } from 'src/usuarios/genero.enum';

export class CreateUsuariosEntity1716246193302 implements MigrationInterface {
    name = 'CreateUsuariosEntity1716246193302';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TYPE "public"."sexo_enum" AS ENUM('M', 'F', 'I')
        `);

        await queryRunner.query(`
            CREATE TYPE "public"."pais_enum" AS ENUM('Brasil', 'EUA', 'Outro')
        `);

        await queryRunner.query(`
            CREATE TABLE "usuarios" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "nome" character varying(100) NOT NULL,
                "email" character varying(100) NOT NULL,
                "data_nascimento" date,
                "genero" "public"."sexo_enum",
                "pais" "public"."pais_enum",
                CONSTRAINT "PK_8973029e8bb26f72a4738afc834" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "usuarios"
        `);

        await queryRunner.query(`
            DROP TYPE "public"."sexo_enum"
        `);

        await queryRunner.query(`
            DROP TYPE "public"."pais_enum"
        `);
    }

}